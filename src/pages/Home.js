import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  return (
    <div className="home-page">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-background">
          <div className="hero-image">
            <img src="/hero.jpg" alt="KAHVE DÜNYASI - Sıcak ve samimi cafe atmosferi" />
          </div>
          <div className="hero-overlay"></div>
        </div>
        <div className="hero-content">
          <div className="container">
            <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>
              CAFE NOVA'ya hoş geldiniz
            </p>
            <p className={`hero-description ${isVisible ? 'animate-in' : ''}`}>
              Modern tasarım, kaliteli kahve ve sıcak atmosferimizle 
              size unutulmaz bir deneyim sunuyoruz.
            </p>
            <div className={`hero-buttons ${isVisible ? 'animate-in' : ''}`}>
              <Link to="/menu" className="btn btn-primary">Menüyü Gör</Link>
              <Link to="/about" className="btn btn-secondary">Hakkımızda</Link>
            </div>
          </div>
        </div>
        <div className="scroll-indicator" onClick={() => {
          document.querySelector('.story').scrollIntoView({ 
            behavior: 'smooth' 
          });
        }}>
          <div className="scroll-arrow"></div>
        </div>
      </section>

      {/* About Preview */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text">
              <h2>Hikayemiz</h2>
              <p>
                2019 yılında küçük bir hayalle başladık. Kahvenin sadece bir içecek değil, 
                bir deneyim olduğuna inanıyorduk. İstanbul'un kalbinde, Kadıköy'de 
                CAFE NOVA'yı kurduk.
              </p>
              <p>
                Her fincan kahvemizde, dünyanın farklı köşelerinden özenle seçilmiş 
                çekirdekler kullanıyoruz. Baristalarımız, kahve sanatının inceliklerini 
                öğrenmek için sürekli kendilerini geliştiriyor ve her gün yeni teknikler 
                deniyorlar.
              </p>
              <p>
                Bugün, misafirlerimizin ikinci evi haline geldik. Sıcak atmosferimiz, 
                kaliteli kahvemiz ve samimi hizmetimizle İstanbul'un en sevilen 
                cafe'lerinden biri olduk. Burada sadece kahve içmiyor, anılar biriktiriyoruz.
              </p>
              <p>
                CAFE NOVA'da her gün yeni hikayeler yazılıyor. Öğrenciler ders çalışıyor, 
                arkadaşlar sohbet ediyor, iş insanları toplantı yapıyor. Biz de bu 
                hikayelerin bir parçası olmaktan mutluluk duyuyoruz.
              </p>
              <Link to="/about" className="btn btn-outline">Devamı</Link>
            </div>
            <div className="story-image">
              <img src="/history.jpg" alt="Cafe Nova - Kahve tutkusu ve arkadaşlık" />
            </div>
          </div>
        </div>
      </section>

      {/* Menu Preview */}
      <section className="menu-preview">
        <div className="container">
          <div className="section-header">
            <h2>Menümüz</h2>
            <p>Lezzete açılan kapı</p>
          </div>
          <div className="menu-categories">
            <Link to="/menu?category=kahve" className="category-card">
              <div className="category-image">
                <img src="/cafe.jpg" alt="Cafe Nova - Kahve çeşitleri" />
              </div>
              <div className="category-overlay">
                <h3>Kahve</h3>
              </div>
            </Link>
            <Link to="/menu?category=yemek" className="category-card">
              <div className="category-image">
                <img src="/food.jpg" alt="Cafe Nova - Yemek menüsü" />
              </div>
              <div className="category-overlay">
                <h3>Yemek</h3>
              </div>
            </Link>
            <Link to="/menu?category=icecek" className="category-card">
              <div className="category-image">
                <img src="/drink.jpg" alt="Cafe Nova - İçecek menüsü" />
              </div>
              <div className="category-overlay">
                <h3>İçecek</h3>
              </div>
            </Link>
            <Link to="/menu?category=tatli" className="category-card">
              <div className="category-image">
                <img src="/sweet.jpg" alt="Cafe Nova - Tatlı menüsü" />
              </div>
              <div className="category-overlay">
                <h3>Tatlı</h3>
              </div>
            </Link>
          </div>
          <div className="menu-cta">
            <Link to="/menu" className="btn btn-primary">Tüm Menüyü Gör</Link>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="featured">
        <div className="container">
          <div className="section-header">
            <h2>Neden Biz?</h2>
            <p>Bizi özel kılan ürünlerimiz</p>
          </div>
          <div className="featured-grid">
            <div className="featured-item">
              <div className="featured-image">
                <img src="/sweet.jpg" alt="Cafe Nova - Özel kahve karışımı" />
              </div>
              <div className="featured-content">
                <h3>Özel Kahve Karışımı</h3>
                <p>Dünyanın en iyi çekirdeklerinden özenle seçilmiş özel karışımımız</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-image">
                <img src="/sweet-1.jpg" alt="Cafe Nova - Ev yapımı tatlılar" />
              </div>
              <div className="featured-content">
                <h3>Ev Yapımı Tatlılar</h3>
                <p>Geleneksel tariflerle hazırlanan taze ve lezzetli tatlılarımız</p>
              </div>
            </div>
            <div className="featured-item">
              <div className="featured-image">
                <img src="/toast-1.jpg" alt="Cafe Nova - Taze sandviçler" />
              </div>
              <div className="featured-content">
                <h3>Taze Sandviçler</h3>
                <p>Günlük taze malzemelerle hazırlanan özel sandviçlerimiz</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Preview */}
      <section className="gallery-preview">
        <div className="container">
          <div className="section-header">
            <h2>Mekanımızdan Kareler</h2>
            <p>Atmosferimizi keşfedin</p>
          </div>
          <div className="gallery-grid">
            <div className="gallery-item">
              <img src="/cafe-1.jpg" alt="Cafe Nova - Latte art" />
            </div>
            <div className="gallery-item">
              <img src="/cafe-2.jpg" alt="Cafe Nova - Cafe atmosferi" />
            </div>
            <div className="gallery-item">
              <img src="/hero.jpg" alt="Cafe Nova - Mekan görünümü" />
            </div>
          </div>
          <div className="gallery-cta">
            <Link to="/gallery" className="btn btn-outline">Daha Fazla Fotoğraf</Link>
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
                <p>📍 Kadıköy, İstanbul</p>
                <p>📞 +90 212 555 0123</p>
                <p>✉️ info@cafenova.com</p>
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

export default Home;

