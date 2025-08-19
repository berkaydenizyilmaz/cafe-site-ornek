import React, { useState, useEffect } from 'react';
import './About.css';

const About = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
            <div className="story-text">
              <h2>Hikayemiz</h2>
              <p>
                2019 yılında küçük bir hayalle başladık. Kahvenin sadece bir içecek değil, 
                bir deneyim olduğuna inanıyorduk. İstanbul'un kalbinde, Kadıköy'de 
                KAHVE DÜNYASI'nı kurduk.
              </p>
              <p>
                Her fincan kahvemizde, dünyanın farklı köşelerinden özenle seçilmiş 
                çekirdekler kullanıyoruz. Baristalarımız, kahve sanatının inceliklerini 
                öğrenmek için sürekli kendilerini geliştiriyor.
              </p>
              <p>
                Bugün, misafirlerimizin ikinci evi haline geldik. Sıcak atmosferimiz, 
                kaliteli kahvemiz ve samimi hizmetimizle İstanbul'un en sevilen 
                cafe'lerinden biri olduk.
              </p>
            </div>
            <div className="story-image">
              <div className="image-placeholder">
                <span>📖</span>
                <p>Hikaye Görsel</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="values">
        <div className="container">
          <div className="section-header">
            <h2>Değerlerimiz</h2>
            <p>Bizi biz yapan prensipler</p>
          </div>
          <div className="values-grid">
            <div className="value-item">
              <div className="value-icon">☕</div>
              <h3>Kalite</h3>
              <p>En kaliteli kahve çekirdeklerini kullanıyor, her fincanı özenle hazırlıyoruz.</p>
            </div>
            <div className="value-item">
              <div className="value-icon">❤️</div>
              <h3>Sevgi</h3>
              <p>Kahveye ve misafirlerimize olan sevgimiz, her detayda kendini gösteriyor.</p>
            </div>
            <div className="value-item">
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
          <div className="section-header">
            <h2>Ekibimiz</h2>
            <p>Kahve tutkusu olan insanlar</p>
          </div>
          <div className="team-grid">
            <div className="team-member">
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
            <div className="team-member">
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
            <div className="team-member">
              <div className="member-image">
                <div className="image-placeholder">
                  <span>👨‍💼</span>
                </div>
              </div>
              <div className="member-info">
                <h3>Mehmet Yönetici</h3>
                <p>Genel Müdür</p>
                <p>KAHVE DÜNYASI'nın kurucusu ve yöneticisi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="stats">
        <div className="container">
          <div className="stats-grid">
            <div className="stat-item">
              <div className="stat-number">4+</div>
              <div className="stat-label">Yıllık Deneyim</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">1000+</div>
              <div className="stat-label">Mutlu Müşteri</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">50+</div>
              <div className="stat-label">Kahve Çeşidi</div>
            </div>
            <div className="stat-item">
              <div className="stat-number">24/7</div>
              <div className="stat-label">Kahve Tutkusu</div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
