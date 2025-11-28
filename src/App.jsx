import React, { useState } from 'react';
import { categories } from './data/categories';
import Hero from './components/Hero';
import CategoryCard from './components/CategoryCard';
import Modal from './components/Modal';

function App() {
  const [selectedCategory, setSelectedCategory] = useState(null);

  return (
    <div className="app-container">
      <div className="background-gradient"></div>

      <header className="app-header">
        <div className="logo">PM</div>
        <nav>
          <a href="#" className="nav-link">Inicio</a>
          <a href="#" className="nav-link">Categorías</a>
          <a href="#" className="nav-link">Acerca de</a>
        </nav>
      </header>

      <main>
        <Hero />

        <section className="categories-section">
          <h2 className="section-title">Explora Categorías</h2>
          <div className="categories-grid">
            {categories.map((category) => (
              <CategoryCard
                key={category.id}
                category={category}
                onClick={setSelectedCategory}
              />
            ))}
          </div>
        </section>
      </main>

      <footer className="app-footer">
        <p>© 2025 Prompt Maestro. Diseñado para Arquitectos de Software.</p>
      </footer>

      {selectedCategory && (
        <Modal
          category={selectedCategory}
          onClose={() => setSelectedCategory(null)}
        />
      )}
    </div>
  );
}

export default App;
