import React from 'react';
import './Main.css';

/**
 * Main Component containing the About, Menu, and Gallery sections 
 * for a premium coffee shop landing page.
 */
const Main = () => {
  // Array of six coffee products for the Menu section
  const coffeeProducts = [
    {
      id: 1,
      name: 'Signature Velvet Latte',
      description: 'A smooth blend of espresso, steamed velvety milk, and a delicate touch of vanilla.',
      price: '$4.50',
      image: 'https://images.unsplash.com/photo-1541167760496-1628856ab772?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 2,
      name: 'Classic Espresso',
      description: 'Rich, bold, and intense single-origin shot brewed to absolute perfection.',
      price: '$3.00',
      image: 'https://images.unsplash.com/photo-1510591509098-f4fdc6d0ff04?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 3,
      name: 'Caramel Macchiato',
      description: 'Freshly steamed milk with vanilla-flavored syrup marked with espresso and caramel drizzle.',
      price: '$5.25',
      image: 'https://images.unsplash.com/photo-1485808191679-5f86510681a2?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 4,
      name: 'Creamy Cappuccino',
      description: 'Equal parts espresso, steamed milk, and a deep layer of silky microfoam.',
      price: '$4.25',
      image: 'https://images.unsplash.com/photo-1534778101976-62847782c213?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 5,
      name: 'Iced Cold Brew',
      description: 'Steeped slowly for 24 hours to yield a naturally sweet, low-acidity refreshing coffee.',
      price: '$4.75',
      image: 'https://images.unsplash.com/photo-1517701604599-bb29b565090c?auto=format&fit=crop&q=80&w=600'
    },
    {
      id: 6,
      name: 'Mocha Delight',
      description: 'A decadent pairing of rich dark chocolate, espresso, and steamed milk topped with foam.',
      price: '$5.50',
      image: 'https://images.unsplash.com/photo-1578314675249-a6919f80cc4e?auto=format&fit=crop&q=80&w=600'
    }
  ];

  // Array of six images for the Gallery section
  const galleryImages = [
    {
      id: 1,
      url: 'https://images.unsplash.com/photo-1447933601403-0c6688de566e?auto=format&fit=crop&q=80&w=600',
      alt: 'Coffee beans roasting'
    },
    {
      id: 2,
      url: 'https://images.unsplash.com/photo-1495474472287-4d71bcdd2085?auto=format&fit=crop&q=80&w=600',
      alt: 'Barista preparing coffee'
    },
    {
      id: 3,
      url: 'https://images.unsplash.com/photo-1501339847302-ac426a4a7cbb?auto=format&fit=crop&q=80&w=600',
      alt: 'Cozy coffee shop interior'
    },
    {
      id: 4,
      url: 'https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?auto=format&fit=crop&q=80&w=600',
      alt: 'Pour over coffee brewing'
    },
    {
      id: 5,
      url: 'https://images.unsplash.com/photo-1554118811-1e0d58224f24?auto=format&fit=crop&q=80&w=600',
      alt: 'Latte art in a white ceramic cup'
    },
    {
      id: 6,
      url: 'https://images.unsplash.com/photo-1507133754655-2e6717f959c7?auto=format&fit=crop&q=80&w=600',
      alt: 'Assorted coffee pastries and drinks'
    }
  ];

  return (
    <main className="main-content">
      {/* ==========================================
         SECTION 1 - About Us
         ========================================== */}
      <section id="about" className="about-section">
        <div className="about-container">
          <div className="about-image-wrapper">
            <img 
              src="https://images.unsplash.com/photo-1442512595331-e89e73853f31?auto=format&fit=crop&q=80&w=800" 
              alt="Cozy ambiance at Velvet Brew coffee shop" 
              className="about-image"
            />
          </div>
          <div className="about-text-content">
            <span className="section-subtitle">Our Heritage</span>
            <h2 className="section-title">Brewing Excellence Since 2015</h2>
            <p className="about-story">
              At Velvet Brew, coffee is more than just a morning ritual—it's an art form. Founded out of a deep-rooted passion for ethical sourcing and exceptional flavor profiles, we travel directly to independent farms across the globe to select the finest specialty beans.
            </p>
            <p className="about-story">
              Every single batch is masterfully roasted in-house to unlock unique tasting notes, ensuring that each cup tells a vibrant story of craftsmanship, dedication, and warmth. Come sit back, relax, and experience community in every sip.
            </p>
          </div>
        </div>
      </section>

      {/* ==========================================
         SECTION 2 - Menu
         ========================================== */}
      <section id="menu" className="menu-section">
        <div className="menu-container">
          <div className="section-header">
            <span className="section-subtitle">Discover Our Tastes</span>
            <h2 className="section-title">Artisanal Coffee Menu</h2>
          </div>

          <div className="menu-grid">
            {coffeeProducts.map((product) => (
              <div className="menu-card" key={product.id}>
                <div className="menu-image-container">
                  <img src={product.image} alt={product.name} className="menu-image" />
                </div>
                <div className="menu-details">
                  <div className="menu-info-top">
                    <h3 className="menu-item-name">{product.name}</h3>
                    <span className="menu-price">{product.price}</span>
                  </div>
                  <p className="menu-description">{product.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ==========================================
         SECTION 3 - Gallery
         ========================================== */}
      <section id="gallery" className="gallery-section">
        <div className="gallery-container">
          <div className="section-header">
            <span className="section-subtitle">Visual Experience</span>
            <h2 className="section-title">Moments at Velvet Brew</h2>
          </div>

          <div className="gallery-grid">
            {galleryImages.map((image) => (
              <div className="gallery-item" key={image.id}>
                <img src={image.url} alt={image.alt} className="gallery-image" />
              </div>
            ))}
          </div>
        </div>
      </section>
    </main>
  );
};

export default Main;