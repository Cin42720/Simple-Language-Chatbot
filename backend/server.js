const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const OpenAI = require('openai');
const { getAdjectiveClausesKnowledgeText } = require('./adjectiveClauses');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(bodyParser.json());

const USE_GROQ = process.env.USE_GROQ === 'true' || (!process.env.OPENAI_API_KEY && process.env.GROQ_API_KEY);

const fixCommonTypos = (text) => {
  if (!text) return text;
  
  const fixes = [
    { pattern: /olabilirğm/gi, replacement: 'olabilirim' },
    { pattern: /olabilirğn/gi, replacement: 'olabilirsin' },
    { pattern: /olabilirğz/gi, replacement: 'olabiliriz' },
    { pattern: /olabilirğ/gi, replacement: 'olabilir' },
    { pattern: /yapabilirğm/gi, replacement: 'yapabilirim' },
    { pattern: /yapabilirğn/gi, replacement: 'yapabilirsin' },
    { pattern: /yapabilirğz/gi, replacement: 'yapabiliriz' },
    { pattern: /yapabilirğ/gi, replacement: 'yapabilir' },
    { pattern: /edebilirğm/gi, replacement: 'edebilirim' },
    { pattern: /edebilirğn/gi, replacement: 'edebilirsin' },
    { pattern: /edebilirğz/gi, replacement: 'edebiliriz' },
    { pattern: /edebilirğ/gi, replacement: 'edebilir' },
  ];
  
  let fixed = text;
  fixes.forEach(({ pattern, replacement }) => {
    fixed = fixed.replace(pattern, replacement);
  });
  
  return fixed;
};

let aiClient;
if (USE_GROQ) {
  aiClient = new OpenAI({
    apiKey: process.env.GROQ_API_KEY,
    baseURL: 'https://api.groq.com/openai/v1',
  });
} else {
  aiClient = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });
}

app.get('/', (req, res) => {
  res.json({ message: 'API Server is running!' });
});

const isAdjectiveClausesRelated = (message) => {
  const keywords = [
    'adjective clause', 'relative clause', 'sıfat cümleciği', 'ilgi cümleciği',
    'which', 'that', 'who', 'whom', 'where', 'whose',
    'relative pronoun', 'ilgi zamiri', 'relative clauses',
    'adjective clauses', 'defining clause', 'non-defining clause',
    'tanımlayıcı cümlecik', 'tanımlayıcı olmayan cümlecik'
  ];
  
  const lowerMessage = message.toLowerCase();
  return keywords.some(keyword => lowerMessage.includes(keyword.toLowerCase()));
};

app.post('/api/chat', async (req, res) => {
  try {
    const { message } = req.body;

    if (!message) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const model = USE_GROQ ? 'llama-3.3-70b-versatile' : 'gpt-3.5-turbo';

    const isRelated = isAdjectiveClausesRelated(message);
    const adjectiveClausesInfo = getAdjectiveClausesKnowledgeText();
    
    let systemPrompt;
    
    if (isRelated) {
      systemPrompt = `Sen mesleki yabancı dil öğrenmeye yardımcı olan bir uzman asistansın. Kullanıcı Adjective Clauses konusunda soru soruyor.

KRİTİK TÜRKÇE KURALLARI (MUTLAKA UYGULA):
1) TÜM cevaplarını SADECE TÜRKÇE ver. Hiçbir zaman İngilizce, Vietnamca, Almanca veya başka dilde cevap verme. Sadece Türkçe kelimeler kullan.
2) Türkçe karakterleri DOĞRU kullan: ç, ğ, ı, ö, ş, ü (büyük: Ç, Ğ, İ, Ö, Ş, Ü). "ı" harfini "i" ile karıştırma, "ş" harfini "s" ile karıştırma.
3) Türkçe dilbilgisi kurallarına uy: ekler, çekimler, cümle yapısı doğru olsun.
4) Doğal Türkçe konuş. Yapay veya çeviri gibi görünmesin.
5) Türkçe kelimeleri doğru yaz: "de/da" ayrı yazılır, "ki" bağlacı ayrı yazılır, "mi" soru eki ayrı yazılır.
6) ÖNEMLİ: Sadece örnek cümlelerde farklı diller kullanabilirsin (örneğin İngilizce örnek cümleler). Normal konuşmanda, açıklamalarda, sorularda SADECE TÜRKÇE kullan. Hiçbir zaman Vietnamca, Çince, Japonca veya diğer dillerden kelimeler kullanma.

Aşağıdaki bilgileri kullanarak detaylı, kapsamlı ve öğretici cevaplar ver:

${adjectiveClausesInfo}

CEVAP VERME STANDARTLARI:
1. Detaylı açıklama yap, örnekler ver
2. Karşılaştırma yap (which vs that, who vs whom)
3. Türkçe çeviriler ekle
4. Yapılandırılmış format kullan`;
    } else {
      systemPrompt = `Sen mesleki yabancı dil öğrenmeye yardımcı olan bir asistansın.

KRİTİK TÜRKÇE KURALLARI (MUTLAKA UYGULA):
1) TÜM cevaplarını SADECE TÜRKÇE ver. Hiçbir zaman İngilizce, Vietnamca, Almanca veya başka dilde cevap verme. Sadece Türkçe kelimeler kullan.
2) Türkçe karakterleri DOĞRU kullan: ç, ğ, ı, ö, ş, ü (büyük: Ç, Ğ, İ, Ö, Ş, Ü). "ı" harfini "i" ile karıştırma, "ş" harfini "s" ile karıştırma.
3) Türkçe dilbilgisi kurallarına uy: ekler, çekimler, cümle yapısı doğru olsun.
4) Doğal Türkçe konuş. Yapay veya çeviri gibi görünmesin.
5) Türkçe kelimeleri doğru yaz: "de/da" ayrı yazılır, "ki" bağlacı ayrı yazılır, "mi" soru eki ayrı yazılır.
6) ÖNEMLİ: Sadece örnek cümlelerde farklı diller kullanabilirsin (örneğin İngilizce örnek cümleler). Normal konuşmanda, açıklamalarda, sorularda SADECE TÜRKÇE kullan. Hiçbir zaman Vietnamca, Çince, Japonca veya diğer dillerden kelimeler kullanma.
7) Soruya göre kısa veya uzun cevaplar ver, gerektiğinde detaylı açıklamalar yap.

Eğer kullanıcı Adjective Clauses, Relative Clauses, Sıfat Cümlecikleri, İlgi Cümlecikleri, "which", "that", "who", "whom", "where" gibi konularda soru sorarsa, aşağıdaki bilgileri kullan:

${adjectiveClausesInfo}`;
    }

    const completion = await aiClient.chat.completions.create({
      model: model,
      messages: [
        {
          role: 'system',
          content: systemPrompt,
        },
        {
          role: 'user',
          content: message,
        },
      ],
      temperature: isRelated ? 0.6 : 0.5,
    });

    let response = completion.choices[0].message.content;
    response = fixCommonTypos(response);

    res.json({ response });
  } catch (error) {
    console.error('Error:', error.response?.data || error.message);
    const provider = USE_GROQ ? 'Groq' : 'OpenAI';
    res.status(500).json({
      error: `Failed to get response from ${provider}`,
      details: error.response?.data || error.message,
    });
  }
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

