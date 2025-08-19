import React, { useState, useEffect } from 'react';
import './Gallery.css';

const Gallery = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

  const galleryItems = [
    { id: 1, title: 'Mekanımız', description: 'Sıcak ve samimi atmosferimiz', category: 'mekan' },
    { id: 2, title: 'Kahve', description: 'Özenle hazırlanan kahvelerimiz', category: 'kahve' },
    { id: 3, title: 'Tatlılar', description: 'Ev yapımı tatlılarımız', category: 'tatli' },
    { id: 4, title: 'Barista', description: 'Uzman baristalarımız', category: 'barista' },
    { id: 5, title: 'Atmosfer', description: 'Keyifli vakit geçirme alanımız', category: 'atmosfer' },
    { id: 6, title: 'Detaylar', description: 'Özenle seçilmiş dekorasyon', category: 'detay' },
    { id: 7, title: 'Kahve Makinesi', description: 'Profesyonel ekipmanlarımız', category: 'ekipman' },
    { id: 8, title: 'Müşteriler', description: 'Mutlu misafirlerimiz', category: 'musteri' },
    { id: 9, title: 'Özel Köşeler', description: 'Sessiz çalışma alanları', category: 'mekan' }
  ];

  return (
    <div className="gallery-page">
      {/* Hero */}
      <section className="gallery-hero">
        <div className="container">
          <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>Galeri</h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>Mekanımızdan kareler</p>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="gallery-section">
        <div className="container">
          <div className="gallery-grid">
            {galleryItems.map((item, index) => (
              <div key={item.id} className="gallery-item">
                <div className="image-placeholder">
                  <span>📸</span>
                  <div className="image-overlay">
                    <h3>{item.title}</h3>
                    <p>{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Media */}
      <section className="social-media">
        <div className="container">
          <div className="section-header">
            <h2>Sosyal Medya</h2>
            <p>Bizi takip edin</p>
          </div>
          <div className="social-grid">
            <div className="social-item">
              <div className="social-icon">📱</div>
              <h3>Instagram</h3>
              <p>@kahvedunyasi</p>
              <p>Günlük fotoğraflar ve hikayeler</p>
            </div>
            <div className="social-item">
              <div className="social-icon">📘</div>
              <h3>Facebook</h3>
              <p>KAHVE DÜNYASI</p>
              <p>Etkinlikler ve güncellemeler</p>
            </div>
            <div className="social-item">
              <div className="social-icon">🐦</div>
              <h3>Twitter</h3>
              <p>@kahvedunyasi</p>
              <p>Anlık paylaşımlar</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
