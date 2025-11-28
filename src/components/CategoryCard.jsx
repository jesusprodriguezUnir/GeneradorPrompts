import React from 'react';

const CategoryCard = ({ category, onClick }) => {
    return (
        <div className="category-card" onClick={() => onClick(category)}>
            <div className="category-icon">{category.icon}</div>
            <h3 className="category-name">{category.name}</h3>
            <div className="category-count">
                {category.subcategories.length} Subcategorías
            </div>
        </div>
    );
};

export default CategoryCard;
