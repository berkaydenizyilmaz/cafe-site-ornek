import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [animatedStats, setAnimatedStats] = useState({
    experience: 0,
    customers: 0,
    coffeeTypes: 0,
    passion: 0
  });
  const [statsVisible, setStatsVisible] = useState(false);
  const statsRef = useRef(null);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  // Scroll animation için Intersection Observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-in');
            if (entry.target === statsRef.current) {
              setStatsVisible(true);
            }
          }
        });
      },
      { threshold: 0.1 }
    );

    const elements = document.querySelectorAll('.animate-on-scroll');
    elements.forEach(el => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  // Sayı animasyonu
  useEffect(() => {
    if (statsVisible) {
      const duration = 2000; // 2 saniye
      const steps = 60;
      const stepDuration = duration / steps;

      const targets = {
        experience: 4,
        customers: 1000,
        coffeeTypes: 50,
        passion: 24
      };

      let currentStep = 0;
      const timer = setInterval(() => {
        currentStep++;
        const progress = currentStep / steps;

        setAnimatedStats({
          experience: Math.floor(targets.experience * progress),
          customers: Math.floor(targets.customers * progress),
          coffeeTypes: Math.floor(targets.coffeeTypes * progress),
          passion: Math.floor(targets.passion * progress)
        });

        if (currentStep >= steps) {
          clearInterval(timer);
        }
      }, stepDuration);

      return () => clearInterval(timer);
    }
  }, [statsVisible]);

  return (
    <div className="about-page">
      {/* Hero */}
      <section className="about-hero">
        <div className="container">
          <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>Hakkımızda</h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>Kahve tutkumuzun hikayesi</p>
        </div>
      </section>

      {/* Story */}
      <section className="story">
        <div className="container">
          <div className="story-content">
            <div className="story-text animate-on-scroll">
              <h2>Hikayemiz</h2>
              <p>
                2019 yılında küçük bir hayalle başladık. Kahvenin sadece bir içecek değil, 
                bir deneyim olduğuna inanıyorduk. İstanbul'un kalbinde 
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
              <p>
                Kahve tutkumuz sadece içecek hazırlamakla sınırlı değil. Her sabah
                kahve çekirdeklerini özenle seçiyor, kavurma sürecini titizlikle takip
                ediyoruz. Baristalarımız sürekli eğitim alıyor, yeni teknikler öğreniyor
                ve her fincan kahveyi bir sanat eseri gibi hazırlıyor.
              </p>
              <p>
                Misafirlerimizin memnuniyeti bizim için her şeyden önemli. Bu yüzden
                sadece en kaliteli malzemeleri kullanıyor, hijyen standartlarını en üst
                seviyede tutuyoruz. Her detayı düşünüyor, her anı özel kılmaya çalışıyoruz.
              </p>
              
              {/* Stats */}
              <div className="story-stats" ref={statsRef}>
                <div className="stats-grid">
                  <div className="stat-item">
                    <div className="stat-number">{animatedStats.experience}+</div>
                    <div className="stat-label">Yıllık Deneyim</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{animatedStats.customers}+</div>
                    <div className="stat-label">Mutlu Müşteri</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{animatedStats.coffeeTypes}+</div>
                    <div className="stat-label">Kahve Çeşidi</div>
                  </div>
                  <div className="stat-item">
                    <div className="stat-number">{animatedStats.passion}/7</div>
                    <div className="stat-label">Kahve Tutkusu</div>
                  </div>
                </div>
              </div>
            </div>
            <div className="story-image animate-on-scroll">
              <img src="/history.jpg" alt="Cafe Nova - Kahve tutkusu ve arkadaşlık" />
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Değerlerimiz</h2>
            <p>Bizi biz yapan prensipler</p>
          </div>
          <div className="values-grid">
            <div className="value-item animate-on-scroll">
              <div className="value-icon">☕</div>
              <h3>Kalite</h3>
              <p>En kaliteli kahve çekirdeklerini kullanıyor, her fincanı özenle hazırlıyoruz.</p>
            </div>
            <div className="value-item animate-on-scroll">
              <div className="value-icon">❤️</div>
              <h3>Sevgi</h3>
              <p>Kahveye ve misafirlerimize olan sevgimiz, her detayda kendini gösteriyor.</p>
            </div>
            <div className="value-item animate-on-scroll">
              <div className="value-icon">🏠</div>
              <h3>Sıcaklık</h3>
              <p>Ev gibi rahat ve samimi bir ortam sunuyoruz.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Team */}
      <section className="team">
        <div className="container">
          <div className="section-header animate-on-scroll">
            <h2>Ekibimiz</h2>
            <p>Kahve tutkusu olan insanlar</p>
          </div>
          <div className="team-grid">
            <div className="team-member animate-on-scroll">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>👨‍🍳</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Ahmet Barista</h3>
                <p>Baş Barista</p>
                <p>5 yıllık deneyim ile kahve sanatının ustası</p>
              </div>
            </div>
            <div className="team-member animate-on-scroll">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>👩‍🍳</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Ayşe Pastacı</h3>
                <p>Pastacı</p>
                <p>Tatlılarımızın yaratıcı beyni</p>
              </div>
            </div>
            <div className="team-member animate-on-scroll">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>👨‍💼</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Mehmet Yönetici</h3>
                <p>Genel Müdür</p>
                <p>CAFE NOVA'nın kurucusu ve yöneticisi</p>
              </div>
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

export default About;
