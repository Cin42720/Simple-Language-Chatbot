# AI Chatbot - Language Learning Assistant

Mesleki yabancı dil öğrenmeye yardımcı olan bir AI chatbot uygulaması. Özellikle **Adjective Clauses (Sıfat Cümlecikleri)** konusunda detaylı bilgi ve örnekler sunar.

## Hakkında

Bu proje, BTK Akademi B2 Seviye İngilizce kursundan alınan kapsamlı Adjective Clauses bilgisiyle eğitilmiş özel bir AI asistanıdır. Chatbot, Adjective Clauses konusunda uzmanlaşmış olup, kullanıcılara bu konuda detaylı açıklamalar, örnekler ve pratik ipuçları sunar.

## Özellikler

- **AI destekli dil öğrenme asistanı** - Groq API (Llama 3.3 70B) kullanarak güçlü AI desteği
- **Adjective Clauses konusunda özel uzmanlık** - BTK Akademi B2 seviye İngilizce kursu içeriğiyle eğitilmiş
- **Kapsamlı bilgi bankası** - which, that, who, whom, where gibi relative pronoun'ların detaylı açıklamaları
- **Pratik örnekler** - Defining ve non-defining clauses, relative pronoun atlama kuralları
- **Karanlık/Aydınlık tema desteği** - Kullanıcı tercihine göre tema değiştirme
- **Gerçek zamanlı sohbet arayüzü** - Modern ve kullanıcı dostu React arayüzü
- **Tam Türkçe destek** - Tüm cevaplar Türkçe olarak verilir

## Adjective Clauses Özellikleri

Chatbot aşağıdaki Adjective Clauses konularında uzmanlaşmıştır:

- **Relative Pronoun Kullanımı**: which, that, who, whom, where
- **İki Cümleyi Birleştirme**: Relative clause oluşturma teknikleri
- **Defining vs Non-Defining Clauses**: Virgül kullanımı ve farklar
- **Relative Pronoun Atlama Kuralları**: Ne zaman atlanabilir, ne zaman atlanamaz
- **Kapsamlı Örnekler**: 10+ detaylı örnek cümle ve Türkçe çevirileri
- **Pratik İpuçları**: Doğru kullanım için rehberlik

**Kaynak**: BTK Akademi - B2 Seviye İngilizce Kursu (Eğitmen: Seçkin ESEN)

## Kurulum

### Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### Backend Kurulumu

```bash
cd backend
npm install
```

Backend sunucusu `.env` dosyasını kullanır. `backend` klasöründe `.env` dosyası oluşturup aşağıdaki ortam değişkenlerini eklemeniz gerekir.

### Frontend Kurulumu

```bash
cd frontend
npm install
```

## Çalıştırma

### Backend Sunucusu

```bash
cd backend
npm start
# veya geliştirme modu için:
npm run dev
```

Backend sunucusu varsayılan olarak `http://localhost:5000` adresinde çalışır.

### Frontend Uygulaması

```bash
cd frontend
npm run dev
# veya
npm start
```

Frontend uygulaması varsayılan olarak `http://localhost:3000` adresinde çalışır.

## Ortam Değişkenleri

Backend klasöründe `.env` dosyası oluşturun ve aşağıdaki değişkenleri ekleyin:

```env
USE_GROQ=true
GROQ_API_KEY=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
PORT=5000
```

- `USE_GROQ`: Groq API kullanımını etkinleştirir (true/false)
- `GROQ_API_KEY`: Groq API anahtarı (yukarıdaki anahtar kullanılabilir)
- `PORT`: Backend sunucu portu (varsayılan: 5000)

## Teknolojiler

### Backend
- **Express.js** - Web sunucu framework'ü
- **OpenAI SDK** - Groq API desteği ile AI entegrasyonu
- **Groq API** - Llama 3.3 70B modeli
- **CORS** - Cross-origin resource sharing
- **dotenv** - Ortam değişkenleri yönetimi

### Frontend
- **React** - Kullanıcı arayüzü kütüphanesi
- **Vite** - Hızlı build tool ve development server
- **Axios** - HTTP istekleri için kütüphane

## Kullanım

1. Backend ve frontend sunucularını başlatın
2. Tarayıcınızda `http://localhost:3000` adresine gidin
3. Chatbot ile sohbet etmeye başlayın
4. Adjective Clauses veya diğer dil öğrenme konularında sorular sorun

### Örnek Sorular

- "Adjective clause nedir?"
- "which ve that arasındaki fark nedir?"
- "who ve whom nasıl kullanılır?"
- "Relative pronoun ne zaman atlanabilir?"
- "Defining ve non-defining clause farkı nedir?"

## Proje Yapısı

```
.
├── backend/
│   ├── server.js              # Express sunucu ve API endpoint'leri
│   ├── adjectiveClauses.js    # Adjective Clauses bilgi bankası
│   ├── .env                   # Ortam değişkenleri (oluşturulmalı)
│   └── package.json
└── frontend/
    ├── src/
    │   ├── App.jsx            # Ana React bileşeni
    │   ├── main.jsx           # React entry point
    │   ├── App.css            # Stil dosyası
    │   └── index.css          # Global stiller
    ├── index.html             # HTML template
    ├── vite.config.js         # Vite yapılandırması
    └── package.json
```

## Notlar

- API anahtarları `.env` dosyasında saklanmaktadır. `.env` dosyasını `backend` klasöründe oluşturmanız gerekir.
- Chatbot tüm cevapları Türkçe verir
- Adjective Clauses konusunda özel uzmanlık ve detaylı açıklamalar sunar
- Sistem, Adjective Clauses ile ilgili soruları otomatik olarak tespit eder ve özel bir prompt ile yanıtlar
- Türkçe karakter hatalarını otomatik olarak düzeltir

## Geliştirici

**Hüseyin Emre Ustaer**

## Lisans

ISC
