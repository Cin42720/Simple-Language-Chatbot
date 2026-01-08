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

### Projeyi İndirme

```bash
git clone https://github.com/Cin42720/Simple-Language-Chatbot.git
cd Simple-Language-Chatbot
```

### Backend Kurulumu

**ÖNEMLİ:** Backend'i çalıştırmadan önce mutlaka bağımlılıkları kurun!

```bash
cd backend
npm install
```

Backend sunucusu hazır yapılandırılmıştır. API anahtarları kodda tanımlıdır, ek bir yapılandırma gerekmez.

### Frontend Kurulumu

**ÖNEMLİ:** Frontend'i çalıştırmadan önce mutlaka bağımlılıkları kurun!

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

## Teknolojiler

### Backend
- **Express.js** - Web sunucu framework'ü
- **OpenAI SDK** - Groq API desteği ile AI entegrasyonu
- **Groq API** - Llama 3.3 70B modeli
- **CORS** - Cross-origin resource sharing

### Frontend
- **React** - Kullanıcı arayüzü kütüphanesi
- **Vite** - Hızlı build tool ve development server
- **Axios** - HTTP istekleri için kütüphane

## Kullanım

### Adım Adım Başlatma

1. **Backend'i başlatın** (ilk terminal penceresi):
   ```bash
   cd backend
   npm start
   ```
   Backend `http://localhost:5000` adresinde çalışacaktır.

2. **Frontend'i başlatın** (ikinci terminal penceresi):
   ```bash
   cd frontend
   npm run dev
   ```
   Frontend `http://localhost:3000` adresinde çalışacaktır.

3. Tarayıcınızda `http://localhost:3000` adresine gidin
4. Chatbot ile sohbet etmeye başlayın
5. Adjective Clauses veya diğer dil öğrenme konularında sorular sorun

### Sorun Giderme

**Hata: "Cannot find module 'express'" veya "vite: not found"**
- Bu hata, bağımlılıkların kurulmadığını gösterir
- Çözüm: İlgili klasörde (`backend` veya `frontend`) `npm install` komutunu çalıştırın

**Hata: "Port 5000 already in use"**
- Backend zaten çalışıyor olabilir
- Çözüm: Çalışan Node.js process'lerini durdurun veya farklı bir port kullanın

### Örnek Sorular

- "Adjective clause nedir?"
- "which ve that arasındaki fark nedir?"
- "who ve whom nasıl kullanılır?"
- "Relative pronoun ne zaman atlanabilir?"
- "Defining ve non-defining clause farkı nedir?"

## Notlar

- API anahtarları `backend/server.js` dosyasında direkt olarak tanımlıdır
- Chatbot tüm cevapları Türkçe verir
- Adjective Clauses konusunda özel uzmanlık ve detaylı açıklamalar sunar
- Sistem, Adjective Clauses ile ilgili soruları otomatik olarak tespit eder ve özel bir prompt ile yanıtlar
- Türkçe karakter hatalarını otomatik olarak düzeltir

## Geliştirici

**Hüseyin Emre Ustaer**

