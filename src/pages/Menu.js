import React, { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import './Menu.css';

const Menu = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [searchParams] = useSearchParams();

  useEffect(() => {
    setIsVisible(true);
    
    // URL'den kategori parametresini al
    const categoryFromUrl = searchParams.get('category');
    if (categoryFromUrl) {
      setActiveCategory(categoryFromUrl);
    }
  }, [searchParams]);

  const menuItems = [
    { id: 1, name: 'Espresso', description: 'Klasik İtalyan espressosu', category: 'kahve' },
    { id: 2, name: 'Americano', description: 'Espresso ve sıcak su', category: 'kahve' },
    { id: 3, name: 'Latte', description: 'Espresso ve buharlanmış süt', category: 'kahve' },
    { id: 4, name: 'Cappuccino', description: 'Espresso, süt ve süt köpüğü', category: 'kahve' },
    { id: 5, name: 'Mocha', description: 'Espresso, çikolata ve süt', category: 'kahve' },
    { id: 6, name: 'Tavuklu Sandviç', description: 'Taze tavuk, marul, domates', category: 'yemek' },
    { id: 7, name: 'Peynirli Tost', description: 'Kaşar peyniri ve tereyağı', category: 'yemek' },
    { id: 8, name: 'Sezar Salata', description: 'Marul, tavuk, parmesan', category: 'yemek' },
    { id: 9, name: 'Limonata', description: 'Taze sıkılmış limon suyu', category: 'icecek' },
    { id: 10, name: 'Smoothie', description: 'Meyve karışımı', category: 'icecek' },
    { id: 11, name: 'Çay', description: 'Sıcak çay çeşitleri', category: 'icecek' },
    { id: 12, name: 'Cheesecake', description: 'New York cheesecake', category: 'tatli' },
    { id: 13, name: 'Tiramisu', description: 'İtalyan tatlısı', category: 'tatli' },
    { id: 14, name: 'Brownie', description: 'Çikolatalı brownie', category: 'tatli' }
  ];

  const categories = [
    { id: 'all', name: 'Tümü', icon: '🍽️' },
    { id: 'kahve', name: 'Kahve', icon: '☕' },
    { id: 'yemek', name: 'Yemek', icon: '🍽️' },
    { id: 'icecek', name: 'İçecek', icon: '🥤' },
    { id: 'tatli', name: 'Tatlı', icon: '🍰' }
  ];

  const filteredItems = activeCategory === 'all' 
    ? menuItems 
    : menuItems.filter(item => item.category === activeCategory);

  return (
    <div className="menu-page">
      {/* Hero */}
      <section className="menu-hero">
        <div className="container">
          <h1 className={`hero-title ${isVisible ? 'animate-in' : ''}`}>Menümüz</h1>
          <p className={`hero-subtitle ${isVisible ? 'animate-in' : ''}`}>Lezzete açılan kapı</p>
        </div>
      </section>

      {/* Categories */}
      <section className="categories">
        <div className="container">
          <div className="category-tabs">
            {categories.map((category) => (
              <button
                key={category.id}
                className={`category-tab ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => setActiveCategory(category.id)}
              >
                <span className="tab-icon">{category.icon}</span>
                <span className="tab-text">{category.name}</span>
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Menu Items */}
      <section className="menu-items">
        <div className="container">
          <div className="menu-grid">
            {filteredItems.map((item) => (
              <div key={item.id} className="menu-card">
                <div className="menu-image">
                  <div className="image-placeholder">
                    <span>🍽️</span>
                  </div>
                </div>
                <div className="menu-content">
                  <div className="menu-header">
                    <h3>{item.name}</h3>
                  </div>
                  <p className="description">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Info */}
      <section className="menu-info">
        <div className="container">
          <div className="info-grid">
            <div className="info-item">
              <div className="info-icon">🌱</div>
              <h4>Taze Malzemeler</h4>
              <p>Günlük taze malzemeler kullanıyoruz</p>
            </div>
            <div className="info-item">
              <div className="info-icon">👨‍🍳</div>
              <h4>Uzman Şefler</h4>
              <p>Deneyimli şeflerimizle hazırlanıyor</p>
            </div>
            <div className="info-item">
              <div className="info-icon">⚡</div>
              <h4>Hızlı Servis</h4>
              <p>Hızlı ve kaliteli servis</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Menu;
