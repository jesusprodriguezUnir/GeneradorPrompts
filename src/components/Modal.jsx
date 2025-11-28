import React, { useState } from 'react';

const Modal = ({ category, onClose }) => {
    const [selectedSub, setSelectedSub] = useState(category.subcategories[0]);
    const [copied, setCopied] = useState(false);

    if (!category) return null;

    const handleCopy = () => {
        navigator.clipboard.writeText(selectedSub.prompt);
        setCopied(true);
        setTimeout(() => setCopied(false), 2000);
    };

    return (
        <div className="modal-overlay" onClick={onClose}>
            <div className="modal-content" onClick={(e) => e.stopPropagation()}>
                <button className="modal-close" onClick={onClose}>&times;</button>

                <div className="modal-header">
                    <span className="modal-icon">{category.icon}</span>
                    <h2>{category.name}</h2>
                </div>

                <div className="modal-body">
                    <div className="sidebar">
                        <h3>Subcategorías</h3>
                        <ul>
                            {category.subcategories.map((sub) => (
                                <li
                                    key={sub.id}
                                    className={selectedSub.id === sub.id ? 'active' : ''}
                                    onClick={() => setSelectedSub(sub)}
                                >
                                    {sub.name}
                                </li>
                            ))}
                        </ul>
                    </div>

                    <div className="main-content">
                        <div className="content-header">
                            <h3>{selectedSub.name}</h3>
                            <button className="copy-btn" onClick={handleCopy}>
                                {copied ? '¡Copiado!' : 'Copiar Prompt'}
                            </button>
                        </div>

                        <div className="prompt-box">
                            <pre>{selectedSub.prompt}</pre>
                        </div>

                        <div className="tech-stack">
                            <h4>Recomendaciones Técnicas</h4>
                            <div className="tech-grid">
                                <div className="tech-item">
                                    <strong>Lenguajes:</strong> {selectedSub.tech.languages}
                                </div>
                                <div className="tech-item">
                                    <strong>Frameworks:</strong> {selectedSub.tech.frameworks}
                                </div>
                                <div className="tech-item">
                                    <strong>Arquitectura:</strong> {selectedSub.tech.architecture}
                                </div>
                                <div className="tech-item">
                                    <strong>Base de Datos:</strong> {selectedSub.tech.database}
                                </div>
                                <div className="tech-item">
                                    <strong>DevOps:</strong> {selectedSub.tech.devops}
                                </div>
                                <div className="tech-item warning">
                                    <strong>Seguridad:</strong> {selectedSub.tech.security}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Modal;
