# AI Chatbot - Language Learning Assistant

Mesleki yabancÄ± dil Ã¶ÄŸrenmeye yardÄ±mcÄ± olan bir AI chatbot uygulamasÄ±. Ã–zellikle **Adjective Clauses (SÄ±fat CÃ¼mlecikleri)** konusunda detaylÄ± bilgi ve Ã¶rnekler sunar.

## HakkÄ±nda

Bu proje, BTK Akademi B2 Seviye Ä°ngilizce kursundan alÄ±nan kapsamlÄ± Adjective Clauses bilgisiyle eÄŸitilmiÅŸ Ã¶zel bir AI asistanÄ±dÄ±r. Chatbot, Adjective Clauses konusunda uzmanlaÅŸmÄ±ÅŸ olup, kullanÄ±cÄ±lara bu konuda detaylÄ± aÃ§Ä±klamalar, Ã¶rnekler ve pratik ipuÃ§larÄ± sunar.

## Ã–zellikler

- **AI destekli dil Ã¶ÄŸrenme asistanÄ±** - Groq API (Llama 3.3 70B) kullanarak gÃ¼Ã§lÃ¼ AI desteÄŸi
- **Adjective Clauses konusunda Ã¶zel uzmanlÄ±k** - BTK Akademi B2 seviye Ä°ngilizce kursu iÃ§eriÄŸiyle eÄŸitilmiÅŸ
- **KapsamlÄ± bilgi bankasÄ±** - which, that, who, whom, where gibi relative pronoun'larÄ±n detaylÄ± aÃ§Ä±klamalarÄ±
- **Pratik Ã¶rnekler** - Defining ve non-defining clauses, relative pronoun atlama kurallarÄ±
- **KaranlÄ±k/AydÄ±nlÄ±k tema desteÄŸi** - KullanÄ±cÄ± tercihine gÃ¶re tema deÄŸiÅŸtirme
- **GerÃ§ek zamanlÄ± sohbet arayÃ¼zÃ¼** - Modern ve kullanÄ±cÄ± dostu React arayÃ¼zÃ¼
- **Tam TÃ¼rkÃ§e destek** - TÃ¼m cevaplar TÃ¼rkÃ§e olarak verilir

## Adjective Clauses Ã–zellikleri

Chatbot aÅŸaÄŸÄ±daki Adjective Clauses konularÄ±nda uzmanlaÅŸmÄ±ÅŸtÄ±r:

- **Relative Pronoun KullanÄ±mÄ±**: which, that, who, whom, where
- **Ä°ki CÃ¼mleyi BirleÅŸtirme**: Relative clause oluÅŸturma teknikleri
- **Defining vs Non-Defining Clauses**: VirgÃ¼l kullanÄ±mÄ± ve farklar
- **Relative Pronoun Atlama KurallarÄ±**: Ne zaman atlanabilir, ne zaman atlanamaz
- **KapsamlÄ± Ã–rnekler**: 10+ detaylÄ± Ã¶rnek cÃ¼mle ve TÃ¼rkÃ§e Ã§evirileri
- **Pratik Ä°puÃ§larÄ±**: DoÄŸru kullanÄ±m iÃ§in rehberlik

**Kaynak**: BTK Akademi - B2 Seviye Ä°ngilizce Kursu (EÄŸitmen: SeÃ§kin ESEN)

## Kurulum

### Gereksinimler

- Node.js (v14 veya Ã¼zeri)
- npm veya yarn

### Backend Kurulumu

```bash
cd backend
npm install
```

Backend sunucusu hazÄ±r yapÄ±landÄ±rÄ±lmÄ±ÅŸtÄ±r. API anahtarlarÄ± kodda tanÄ±mlÄ±dÄ±r, ek bir yapÄ±landÄ±rma gerekmez.

### Frontend Kurulumu

```bash
cd frontend
npm install
```

## Ã‡alÄ±ÅŸtÄ±rma

### Backend Sunucusu

```bash
cd backend
npm start
# veya geliÅŸtirme modu iÃ§in:
npm run dev
```

Backend sunucusu varsayÄ±lan olarak `http://localhost:5000` adresinde Ã§alÄ±ÅŸÄ±r.

### Frontend UygulamasÄ±

```bash
cd frontend
npm run dev
# veya
npm start
```

Frontend uygulamasÄ± varsayÄ±lan olarak `http://localhost:3000` adresinde Ã§alÄ±ÅŸÄ±r.

## Teknolojiler

### Backend
- **Express.js** - Web sunucu framework'Ã¼
- **OpenAI SDK** - Groq API desteÄŸi ile AI entegrasyonu
- **Groq API** - Llama 3.3 70B modeli
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - KullanÄ±cÄ± arayÃ¼zÃ¼ kÃ¼tÃ¼phanesi
- **Vite** - HÄ±zlÄ± build tool ve development server
- **Axios** - HTTP istekleri iÃ§in kÃ¼tÃ¼phane

## KullanÄ±m

1. Backend ve frontend sunucularÄ±nÄ± baÅŸlatÄ±n
2. TarayÄ±cÄ±nÄ±zda `http://localhost:3000` adresine gidin
3. Chatbot ile sohbet etmeye baÅŸlayÄ±n
4. Adjective Clauses veya diÄŸer dil Ã¶ÄŸrenme konularÄ±nda sorular sorun

### Ã–rnek Sorular

- "Adjective clause nedir?"
- "which ve that arasÄ±ndaki fark nedir?"
- "who ve whom nasÄ±l kullanÄ±lÄ±r?"
- "Relative pronoun ne zaman atlanabilir?"
- "Defining ve non-defining clause farkÄ± nedir?"

## Notlar

- API anahtarlarÄ± `backend/server.js` dosyasÄ±nda direkt olarak tanÄ±mlÄ±dÄ±r
- Chatbot tÃ¼m cevaplarÄ± TÃ¼rkÃ§e verir
- Adjective Clauses konusunda Ã¶zel uzmanlÄ±k ve detaylÄ± aÃ§Ä±klamalar sunar
- Sistem, Adjective Clauses ile ilgili sorularÄ± otomatik olarak tespit eder ve Ã¶zel bir prompt ile yanÄ±tlar
- TÃ¼rkÃ§e karakter hatalarÄ±nÄ± otomatik olarak dÃ¼zeltir

## GeliÅŸtirici

**HÃ¼seyin Emre Ustaer**