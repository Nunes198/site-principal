import React from 'react';
import './App.css';

const WhatsAppButton = () => {
    return (
        <a
            href="https://wa.me/5588999344202"
            className="whatsapp-button"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="Chat on WhatsApp"
        >
            <img
                src="/imagens/whatsapp.png"
                alt="WhatsApp"
                style={{ width: '60px', height: '60px' }}
            />
        </a>
    );
};

export default WhatsAppButton;
