import React, { useState, useEffect } from 'react';
import './Contact.css';

const Contact = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="contact-page">
      {/* Hero */}
      <section className="contact-hero">
        <div className="container">
          <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>İletişim</h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>Bize ulaşın</p>
        </div>
      </section>

      {/* Contact Info */}
      <section className="contact-info">
        <div className="container">
          <div className="contact-content">
            <div className="contact-details">
              <h2>İletişim Bilgileri</h2>
              <div className="contact-items">
                <div className="contact-item">
                  <div className="contact-icon">📍</div>
                  <div className="contact-text">
                    <h3>Adres</h3>
                    <p>Kadıköy, İstanbul</p>
                    <p>Caferağa Mahallesi, Moda Caddesi No:123</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Telefon</h3>
                    <p>+90 212 555 0123</p>
                    <p>+90 532 555 0123</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>E-posta</h3>
                    <p>info@kahvedunyasi.com</p>
                    <p>rezervasyon@kahvedunyasi.com</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">🕒</div>
                  <div className="contact-text">
                    <h3>Çalışma Saatleri</h3>
                    <p>Pazartesi - Cuma: 07:00 - 23:00</p>
                    <p>Cumartesi - Pazar: 08:00 - 00:00</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="contact-image">
              <div className="image-placeholder">
                <span>🏠</span>
                <p>Cafe Görsel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="contact-form">
        <div className="container">
          <div className="form-content">
            <div className="form-header">
              <h2>Mesaj Gönderin</h2>
              <p>Önerileriniz ve geri bildirimleriniz bizim için değerli</p>
            </div>
            <form className="contact-form-element">
              <div className="form-group">
                <input type="text" placeholder="Adınız" required />
              </div>
              <div className="form-group">
                <input type="email" placeholder="E-posta Adresiniz" required />
              </div>
              <div className="form-group">
                <input type="tel" placeholder="Telefon Numaranız" />
              </div>
              <div className="form-group">
                <select>
                  <option value="">Konu Seçin</option>
                  <option value="genel">Genel Bilgi</option>
                  <option value="rezervasyon">Rezervasyon</option>
                  <option value="oneri">Öneri/Şikayet</option>
                  <option value="isbirligi">İş Birliği</option>
                </select>
              </div>
              <div className="form-group">
                <textarea placeholder="Mesajınız" rows="5" required></textarea>
              </div>
              <button type="submit" className="submit-btn">Mesaj Gönder</button>
            </form>
          </div>
        </div>
      </section>

      {/* Map */}
      <section className="map-section">
        <div className="container">
          <div className="map-content">
            <h2>Konum</h2>
            <p>Bizi kolayca bulabilirsiniz</p>
            <div className="map-placeholder">
              <span>🗺️</span>
              <p>Harita</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
