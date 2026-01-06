const adjectiveClausesKnowledge = {
  title: "Adjective Clauses (Relative Clauses)",
  subtitle: "B2 Seviye İngilizce - BTK Akademi",
  description: "Adjective Clauses (Sıfat Cümlecikleri), Türkçe'de 'Relative Clauses' veya 'İlgi Cümlecikleri' olarak da bilinir. Bu yapı, bir ismi tanımlamak veya hakkında daha fazla bilgi vermek için kullanılır.",
  
  basicConcept: {
    explanation: "İki ayrı cümleyi, bir relative pronoun (ilgi zamiri) kullanarak tek bir cümlede birleştirmek."
  },

  rules: {
    whichThat: {
      usage: "Nesneler için kullanılır",
      examples: [
        {
          original: ["The boat was very expensive.", "I purchased it last summer."],
          combined: [
            "The boat **which** I purchased last summer was very expensive.",
            "The boat **that** I purchased last summer was very expensive.",
            "The boat I purchased last summer was very expensive. *(Relative pronoun atlanabilir)*"
          ],
          explanation: "\"which\" ve \"that\" nesneler için kullanılır. Konuşma dilinde relative pronoun genellikle atlanır."
        },
        {
          original: ["My father works for a company.", "It is in the city center."],
          combined: [
            "My father works for a company **which** is in the city center.",
            "My father works for a company **that** is in the city center."
          ],
          explanation: "Bu örnekte relative clause, öznenin konumunu açıklıyor."
        }
      ]
    },
    
    whoWhom: {
      usage: "İnsanlar için kullanılır",
      examples: [
        {
          original: ["The woman is a teacher.", "She has been standing in line for two hours."],
          combined: [
            "The woman **who** has been standing in line for two hours is a teacher.",
            "The woman **that** has been standing in line for two hours is a teacher."
          ],
          explanation: "İnsanlar için \"who\" kullanılır. \"that\" da kullanılabilir ancak daha az resmidir."
        },
        {
          original: ["The people live in Boston.", "We saw **them** yesterday."],
          combined: [
            "The people **who** we saw yesterday live in Boston.",
            "The people **whom** we saw yesterday live in Boston. *(Daha resmi)*",
            "The people **that** we saw yesterday live in Boston.",
            "The people we saw yesterday live in Boston. *(Relative pronoun atlanabilir)*"
          ],
          explanation: "**who**: Konuşma dilinde hem özne hem nesne için kullanılır. **whom**: Resmi dilde nesne konumunda kullanılır. Relative pronoun nesne konumundaysa atlanabilir."
        }
      ]
    },
    
    where: {
      usage: "Yerler için kullanılır",
      examples: [
        {
          original: ["The restaurant is now closed.", "We had our first date there."],
          combined: [
            "The restaurant **where** we had our first date is now closed."
          ],
          explanation: "\"where\" yerler için kullanılır ve \"in which\" yerine tercih edilir."
        }
      ]
    }
  },

  comprehensiveExamples: [
    {
      english: "The car, **which** was parked in front of the house, had a flat tire.",
      turkish: "Araba, evin önünde park edilmişti, lastiği patlamıştı."
    },
    {
      english: "She found the book **that** she had been searching for all week.",
      turkish: "Tüm hafta aradığı kitabı buldu."
    },
    {
      english: "The restaurant, **where** we had our first date, is now closed.",
      turkish: "İlk randevumuzu yaptığımız restoran artık kapalı."
    },
    {
      english: "The teacher **who** taught us algebra last year is retiring.",
      turkish: "Geçen yıl bize cebir öğreten öğretmen emekli oluyor."
    },
    {
      english: "The movie, **which** I watched last night, was surprisingly good.",
      turkish: "Dün gece izlediğim film şaşırtıcı şekilde iyiydi."
    },
    {
      english: "The team, **which** won the championship last year, is undefeated this season.",
      turkish: "Geçen yıl şampiyonluğu kazanan takım bu sezon yenilgisiz."
    },
    {
      english: "The concert, **where** we met, holds special memories for us.",
      turkish: "Tanıştığımız konser bizim için özel anılar barındırıyor."
    },
    {
      english: "The cake **that** my mom baked for my birthday was delicious.",
      turkish: "Annemin doğum günüm için pişirdiği pasta lezzetliydi."
    },
    {
      english: "The book **that** is on the top shelf is the one I've been looking for.",
      turkish: "En üst raftaki kitap aradığım kitap."
    },
    {
      english: "The person **who** won the competition will receive a trophy.",
      turkish: "Yarışmayı kazanan kişi bir kupa alacak."
    }
  ],

  pronounSelection: {
    table: [
      { situation: "İnsan (özne)", pronoun: "who / that", example: "The woman **who** called me..." },
      { situation: "İnsan (nesne)", pronoun: "who / whom / that / (atlanır)", example: "The people **who** we saw..." },
      { situation: "Nesne (özne)", pronoun: "which / that", example: "The car **which** is red..." },
      { situation: "Nesne (nesne)", pronoun: "which / that / (atlanır)", example: "The book **which** I read..." },
      { situation: "Yer", pronoun: "where", example: "The place **where** we met..." }
    ]
  },

  importantRules: {
    omission: {
      canOmit: {
        condition: "Relative pronoun nesne konumundaysa atlanabilir",
        examples: [
          "The book I read ✅",
          "The people we saw ✅"
        ]
      },
      cannotOmit: {
        condition: "Relative pronoun özne konumundaysa atlanamaz",
        examples: [
          "The book is interesting ❌ (Yanlış - relative clause eksik)",
          "The book **that** is interesting ✅"
        ]
      }
    },
    
    commaUsage: {
      nonDefining: {
        description: "Ekstra bilgi verir, virgülle ayrılır",
        example: "The car, **which** was expensive, broke down."
      },
      defining: {
        description: "Temel bilgi verir, virgül kullanılmaz",
        example: "The car **that** I bought broke down."
      }
    }
  },

  practiceTips: [
    "**İki cümleyi birleştirin:** Her zaman iki ayrı cümleyle başlayın",
    "**Doğru pronoun seçin:** İnsan mı, nesne mi, yer mi?",
    "**Pozisyonu kontrol edin:** Özne mi nesne mi?",
    "**Virgül kullanımına dikkat:** Ekstra bilgi mi, temel bilgi mi?"
  ],

  summary: [
    "**Adjective Clauses**, isimleri tanımlamak için kullanılır",
    "**which/that**: Nesneler için",
    "**who/whom**: İnsanlar için",
    "**where**: Yerler için",
    "Relative pronoun nesne konumundaysa **atlanabilir**",
    "Relative pronoun özne konumundaysa **atlanamaz**"
  ],

  source: {
    course: "BTK Akademi - B2 Seviye İngilizce",
    instructor: "Seçkin ESEN",
    lastUpdate: "2026"
  }
};

function getAdjectiveClausesKnowledgeText() {
  let text = `# ${adjectiveClausesKnowledge.title}\n`;
  text += `## ${adjectiveClausesKnowledge.subtitle}\n\n`;
  text += `${adjectiveClausesKnowledge.description}\n\n`;
  
  text += `## Temel Mantık\n`;
  text += `${adjectiveClausesKnowledge.basicConcept.explanation}\n\n`;
  
  text += `## 1. Temel Kullanım: "which" ve "that" (Nesneler için)\n\n`;
  adjectiveClausesKnowledge.rules.whichThat.examples.forEach((ex, idx) => {
    text += `### Örnek ${idx + 1}\n\n`;
    text += `**İki ayrı cümle:**\n`;
    ex.original.forEach(c => text += `- ${c}\n`);
    text += `\n**Birleştirilmiş cümleler:**\n`;
    ex.combined.forEach(c => text += `- ${c}\n`);
    text += `\n**Açıklama:** ${ex.explanation}\n\n`;
  });
  
  text += `## 2. "who" ve "whom" (İnsanlar için)\n\n`;
  adjectiveClausesKnowledge.rules.whoWhom.examples.forEach((ex, idx) => {
    text += `### Örnek ${idx + 3}\n\n`;
    text += `**İki ayrı cümle:**\n`;
    ex.original.forEach(c => text += `- ${c}\n`);
    text += `\n**Birleştirilmiş cümleler:**\n`;
    ex.combined.forEach(c => text += `- ${c}\n`);
    text += `\n**Açıklama:** ${ex.explanation}\n\n`;
  });
  
  text += `## 3. "where" (Yerler için)\n\n`;
  adjectiveClausesKnowledge.rules.where.examples.forEach((ex, idx) => {
    text += `### Örnek ${idx + 5}\n\n`;
    text += `**İki ayrı cümle:**\n`;
    ex.original.forEach(c => text += `- ${c}\n`);
    text += `\n**Birleştirilmiş cümle:**\n`;
    ex.combined.forEach(c => text += `- ${c}\n`);
    text += `\n**Açıklama:** ${ex.explanation}\n\n`;
  });
  
  text += `## Kapsamlı Örnekler\n\n`;
  adjectiveClausesKnowledge.comprehensiveExamples.forEach((ex, idx) => {
    text += `${idx + 1}. ${ex.english}\n`;
    text += `   - ${ex.turkish}\n\n`;
  });
  
  text += `## Relative Pronoun Seçimi\n\n`;
  text += `| Durum | Relative Pronoun | Örnek |\n`;
  text += `|-------|------------------|-------|\n`;
  adjectiveClausesKnowledge.pronounSelection.table.forEach(row => {
    text += `| ${row.situation} | ${row.pronoun} | ${row.example} |\n`;
  });
  text += `\n`;
  
  text += `## Relative Pronoun'un Atlanması\n\n`;
  text += `✅ **Atlanabilir:** ${adjectiveClausesKnowledge.importantRules.omission.canOmit.condition}\n`;
  adjectiveClausesKnowledge.importantRules.omission.canOmit.examples.forEach(ex => {
    text += `- ${ex}\n`;
  });
  text += `\n`;
  text += `❌ **Atlanamaz:** ${adjectiveClausesKnowledge.importantRules.omission.cannotOmit.condition}\n`;
  adjectiveClausesKnowledge.importantRules.omission.cannotOmit.examples.forEach(ex => {
    text += `- ${ex}\n`;
  });
  text += `\n`;
  
  text += `## Virgül Kullanımı\n\n`;
  text += `**Non-defining (Tanımlayıcı olmayan) Clauses:**\n`;
  text += `- ${adjectiveClausesKnowledge.importantRules.commaUsage.nonDefining.description}\n`;
  text += `- ${adjectiveClausesKnowledge.importantRules.commaUsage.nonDefining.example}\n\n`;
  text += `**Defining (Tanımlayıcı) Clauses:**\n`;
  text += `- ${adjectiveClausesKnowledge.importantRules.commaUsage.defining.description}\n`;
  text += `- ${adjectiveClausesKnowledge.importantRules.commaUsage.defining.example}\n\n`;
  
  text += `## Alıştırma İpuçları\n\n`;
  adjectiveClausesKnowledge.practiceTips.forEach((tip, idx) => {
    text += `${idx + 1}. ${tip}\n`;
  });
  text += `\n`;
  
  text += `## Özet\n\n`;
  adjectiveClausesKnowledge.summary.forEach(item => {
    text += `- ${item}\n`;
  });
  
  return text;
}

module.exports = {
  adjectiveClausesKnowledge,
  getAdjectiveClausesKnowledgeText
};

