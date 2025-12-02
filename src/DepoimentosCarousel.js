import React, { useState, useEffect, useRef } from 'react';

const depoimentos = [
  {
    texto: 'O serviço foi incrível e trouxe muita emoção para nossa família.',
    autor: 'João Silva',
  },
  {
    texto: 'A página criada foi linda e cheia de detalhes que nos fizeram reviver momentos especiais.',
    autor: 'Maria Oliveira',
  },
  {
    texto: 'Recomendo a todos! O QR Code é prático e a homenagem ficou perfeita.',
    autor: 'Carlos Pereira',
  },
  {
    texto: 'A equipe foi muito atenciosa e o resultado superou nossas expectativas. Uma homenagem digna e emocionante.',
    autor: 'Fernanda Souza',
  },
  {
    texto: 'O memorial digital permitiu que familiares distantes também pudessem participar da homenagem. Muito obrigado!',
    autor: 'Ricardo Lima',
  },
  {
    texto: 'A lembrança em cerâmica ficou linda e resistente. O QR Code funciona perfeitamente!',
    autor: 'Patrícia Mendes',
  },
  {
    texto: 'Fiquei impressionado com a sensibilidade e o cuidado na criação da página. Recomendo sem dúvidas.',
    autor: 'Eduardo Costa',
  },
  {
    texto: 'O atendimento foi rápido e transparente. O memorial ficou maravilhoso!',
    autor: 'Juliana Martins',
  },
];

function DepoimentosCarousel() {
  const [index, setIndex] = useState(0);
  const timeoutRef = useRef(null);

  // Função para avançar depoimento
  const next = () => {
    setIndex((prev) => (prev + 1) % depoimentos.length);
    resetTimeout();
  };
  // Função para voltar depoimento
  const prev = () => {
    setIndex((prev) => (prev - 1 + depoimentos.length) % depoimentos.length);
    resetTimeout();
  };

  // Rotação automática
  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      setIndex((prev) => (prev + 1) % depoimentos.length);
    }, 6000);
    return () => clearTimeout(timeoutRef.current);
  }, [index]);

  // Resetar timeout ao clicar nas setas
  function resetTimeout() {
    if (timeoutRef.current) {
      clearTimeout(timeoutRef.current);
    }
  }

  return (
    <div className="depoimentos-carousel" style={{ position: 'relative', maxWidth: 520, margin: '0 auto', padding: 16 }}>
      <blockquote style={{ background: '#F5F5F5', borderLeft: '4px solid #4CAF50', padding: '16px 24px', borderRadius: 8, color: '#444', minHeight: 120, transition: 'opacity 0.5s' }}>
        <p style={{ fontSize: '1.1rem', fontStyle: 'italic' }}>“{depoimentos[index].texto}”</p>
        <cite style={{ fontWeight: 500, color: '#2C2C2C', display: 'block', marginTop: 12 }}>{depoimentos[index].autor}</cite>
      </blockquote>
      <button onClick={prev} style={{ position: 'absolute', left: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 24, color: '#4CAF50', cursor: 'pointer' }} aria-label="Anterior">‹</button>
      <button onClick={next} style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 24, color: '#4CAF50', cursor: 'pointer' }} aria-label="Próximo">›</button>
      <div style={{ textAlign: 'center', marginTop: 8 }}>
        {depoimentos.map((_, i) => (
          <span key={i} style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: i === index ? '#4CAF50' : '#B0BEC5', margin: '0 3px' }}></span>
        ))}
      </div>
    </div>
  );
}

export default DepoimentosCarousel;
