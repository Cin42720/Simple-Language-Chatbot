# 🤖 AI Chatbot - Language Learning Assistant

Mesleki yabancı dil öğrenmeye yardımcı olan bir AI chatbot uygulaması. Özellikle Adjective Clauses (Sıfat Cümlecikleri) konusunda detaylı bilgi ve örnekler sunar.

## ✨ Özellikler

- 🤖 AI destekli dil öğrenme asistanı
- 📚 Adjective Clauses konusunda özel uzmanlık
- 🌙 Karanlık/Aydınlık tema desteği
- 💬 Gerçek zamanlı sohbet arayüzü
- 🇹🇷 Tam Türkçe destek

## 📦 Kurulum

### 📋 Gereksinimler

- Node.js (v14 veya üzeri)
- npm veya yarn

### 🔧 Backend Kurulumu

```bash
cd backend
npm install
```

Backend sunucusu `.env` dosyasını kullanır. Dosya zaten projeye dahil edilmiştir ve içinde gerekli API anahtarları bulunmaktadır.

### 🎨 Frontend Kurulumu

```bash
cd frontend
npm install
```

## 🚀 Çalıştırma

### ⚙️ Backend Sunucusu

```bash
cd backend
npm start
# veya geliştirme modu için:
npm run dev
```

Backend sunucusu varsayılan olarak `http://localhost:5000` adresinde çalışır.

### 💻 Frontend Uygulaması

```bash
cd frontend
npm start
```

Frontend uygulaması varsayılan olarak `http://localhost:3000` adresinde çalışır.

## 🔐 Ortam Değişkenleri

Backend klasöründeki `.env` dosyası aşağıdaki değişkenleri içerir:

```env
USE_GROQ=true
GROQ_API_KEY=your_groq_api_key_here
PORT=5000
```

- `USE_GROQ`: Groq API kullanımını etkinleştirir (true/false)
- `GROQ_API_KEY`: Groq API anahtarı
- `PORT`: Backend sunucu portu (varsayılan: 5000)

## 🛠️ Teknolojiler

### 🔙 Backend
- Express.js
- OpenAI SDK (Groq desteği ile)
- CORS
- dotenv

### 🎯 Frontend
- React
- Axios
- React Scripts

## 📖 Kullanım

1. Backend ve frontend sunucularını başlatın
2. Tarayıcınızda `http://localhost:3000` adresine gidin
3. Chatbot ile sohbet etmeye başlayın
4. Adjective Clauses veya diğer dil öğrenme konularında sorular sorun

## 📝 Notlar

- 🔑 API anahtarları `.env` dosyasında saklanmaktadır ve projeye dahil edilmiştir
- 🇹🇷 Chatbot tüm cevapları Türkçe verir
- 📚 Adjective Clauses konusunda özel uzmanlık ve detaylı açıklamalar sunar

## 📄 Lisans

ISC
