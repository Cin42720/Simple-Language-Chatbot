import React, { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || 'http://localhost:5000';

function App() {
  const [messages, setMessages] = useState([
    { text: 'Merhaba! Size nasıl yardımcı olabilirim?', sender: 'bot' },
  ]);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [backendConnected, setBackendConnected] = useState(null);
  const [darkMode, setDarkMode] = useState(() => {
    try {
      const savedTheme = localStorage.getItem('darkMode');
      if (savedTheme !== null) {
        return JSON.parse(savedTheme) === true;
      }
      return false;
    } catch (e) {
      return false;
    }
  });

  useEffect(() => {
    document.body.style.background = darkMode ? '#1a1a1a' : '#f5f5f5';
    document.body.style.color = darkMode ? '#e0e0e0' : '#333';
    localStorage.setItem('darkMode', JSON.stringify(darkMode));
  }, [darkMode]);

  useEffect(() => {
    const checkBackendConnection = async () => {
      try {
        const response = await axios.get(`${API_URL}/`);
        if (response.data.message) {
          setBackendConnected(true);
        }
      } catch (error) {
        setBackendConnected(false);
        setMessages([{ 
          text: '⚠️ Backend sunucusuna bağlanılamıyor! Lütfen backend sunucusunun çalıştığından emin olun (http://localhost:5000)', 
          sender: 'bot' 
        }]);
      }
    };
    checkBackendConnection();
  }, []);

  const formatMessage = (text) => {
    if (!text) return text;
    
    let formatted = text
      .split('\n')
      .map((line, index, array) => {
        const trimmed = line.trim();
        
        if (!trimmed) return '<br />';
        
        if (/^\d+[.)]\s/.test(trimmed) || /^[-•]\s/.test(trimmed)) {
          return `<div class="list-item">${trimmed}</div>`;
        }
        
        if (trimmed.startsWith('**') && trimmed.endsWith('**')) {
          return `<strong>${trimmed.slice(2, -2)}</strong>`;
        }
        
        return `<div>${trimmed}</div>`;
      })
      .join('');
    
    return formatted;
  };

  const handleSend = async (e) => {
    e.preventDefault();
    if (!input.trim() || loading) return;

    const userMessage = { text: input, sender: 'user' };
    setMessages((prev) => [...prev, userMessage]);
    const currentInput = input;
    setInput('');
    setLoading(true);

    try {
      const response = await axios.post(`${API_URL}/api/chat`, {
        message: currentInput,
      });
      setMessages((prev) => [...prev, { text: response.data.response, sender: 'bot' }]);
    } catch (error) {
      console.error('Frontend Error:', error);
      console.error('Error response:', error.response?.data);
      
      let errorText = 'Hata oluştu. Tekrar deneyin.';
      if (error.response?.data?.error) {
        errorText = error.response.data.error;
      } else if (error.response?.data?.details) {
        errorText = `Hata: ${error.response.data.details}`;
      } else if (error.message) {
        errorText = `Bağlantı hatası: ${error.message}`;
      }
      
      setMessages((prev) => [...prev, { text: errorText, sender: 'bot' }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={`app ${darkMode ? 'dark' : 'light'}`}>
      <div className="header">
        <h1>Language Learning Assistant</h1>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          {backendConnected === false && (
            <span style={{ color: '#ff6b6b', fontSize: '14px' }}>⚠️ Backend Bağlantısı Yok</span>
          )}
          {backendConnected === true && (
            <span style={{ color: '#51cf66', fontSize: '14px' }}>✓ Backend Bağlı</span>
          )}
          <button className="theme-toggle" onClick={() => setDarkMode(!darkMode)}>
            {darkMode ? '☀️' : '🌙'}
          </button>
        </div>
      </div>
      <div className="messages">
        {messages.map((msg, i) => (
          <div key={i} className={`message ${msg.sender}`}>
            {msg.sender === 'bot' ? (
              <div 
                className="message-content"
                dangerouslySetInnerHTML={{ __html: formatMessage(msg.text) }}
              />
            ) : (
              msg.text
            )}
          </div>
        ))}
        {loading && <div className="message bot">Yazıyor...</div>}
      </div>
      <form onSubmit={handleSend} className="input-form">
        <input
          type="text"
          value={input}
          onChange={(e) => setInput(e.target.value)}
          placeholder="Mesaj yazın..."
          disabled={loading}
        />
        <button type="submit" disabled={loading}>
          Gönder
        </button>
      </form>
    </div>
  );
}

export default App;
