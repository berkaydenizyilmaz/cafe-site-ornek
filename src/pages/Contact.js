import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
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
                    <p>Örnek Mahalle, Örnek Sokak</p>
                    <p>Örnek İlçe / Örnek Şehir</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">📞</div>
                  <div className="contact-text">
                    <h3>Telefon</h3>
                    <p>+90 XXX XXX XX XX</p>
                    <p>+90 XXX XXX XX XX</p>
                  </div>
                </div>
                <div className="contact-item">
                  <div className="contact-icon">✉️</div>
                  <div className="contact-text">
                    <h3>E-posta</h3>
                    <p>ornek@email.com</p>
                    <p>rezervasyon@email.com</p>
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

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section">
              <h3>CAFE NOVA</h3>
              <p>Kahvenin büyülü dünyasına hoş geldiniz. Modern tasarım, kaliteli kahve ve sıcak atmosferimizle size unutulmaz bir deneyim sunuyoruz.</p>
              <div className="social-links">
                <a href="#" className="social-link">📱</a>
                <a href="#" className="social-link">📘</a>
                <a href="#" className="social-link">🐦</a>
                <a href="#" className="social-link">📸</a>
              </div>
            </div>
            
            <div className="footer-section">
              <h4>Menü</h4>
              <ul className="footer-links">
                <li><Link to="/menu?category=kahve">Kahve</Link></li>
                <li><Link to="/menu?category=yemek">Yemek</Link></li>
                <li><Link to="/menu?category=icecek">İçecek</Link></li>
                <li><Link to="/menu?category=tatli">Tatlı</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>Hızlı Linkler</h4>
              <ul className="footer-links">
                <li><Link to="/about">Hakkımızda</Link></li>
                <li><Link to="/gallery">Galeri</Link></li>
                <li><Link to="/contact">İletişim</Link></li>
                <li><Link to="/menu">Tüm Menü</Link></li>
              </ul>
            </div>
            
            <div className="footer-section">
              <h4>İletişim</h4>
              <div className="contact-info">
                <p>📍 Örnek Adres</p>
                <p>📞 +90 XXX XXX XX XX</p>
                <p>✉️ ornek@email.com</p>
                <p>🕒 07:00 - 23:00</p>
              </div>
            </div>
          </div>
          
          <div className="footer-bottom">
            <p>&copy; 2024 CAFE NOVA. Tüm hakları saklıdır.</p>
            <div className="footer-bottom-links">
              <a href="#">Gizlilik Politikası</a>
              <a href="#">Kullanım Şartları</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Contact;
