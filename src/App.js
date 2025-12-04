import React, { useState, useEffect } from 'react';
import './App.css';
import WhatsAppButton from './WhatsAppButton';
import DepoimentosCarousel from './DepoimentosCarousel';
import Loader from './Loader';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalImg, setModalImg] = useState('/imagens/lembranca.jpeg');
  const [lembrancaIndex, setLembrancaIndex] = useState(0);
  const [lembrancaFade, setLembrancaFade] = useState(true);
  const [loading, setLoading] = useState(true);
  const [exemploIndex, setExemploIndex] = useState(0);
  const [exemploFade, setExemploFade] = useState(true);
  const lembrancas = ['/imagens/lembranca.jpeg', '/imagens/lembranca2.jpeg'];
  const exemplos = [
    {
      img: '/imagens/pagina-exemplo.png',
      link: 'https://memorial-hesite.vercel.app',
      alt: 'Exemplo de homenagem 1'
    },
    {
      img: '/imagens/pagina-exemplo2.png',
      link: 'https://memorial-website-mae.vercel.app',
      alt: 'Exemplo de homenagem 2'
    }
  ];

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1800); // Loader por 1.8s
    return () => clearTimeout(timer);
  }, []);

  // Transição automática
  useEffect(() => {
    const timer = setTimeout(() => {
      setLembrancaFade(false);
      setTimeout(() => {
        setLembrancaIndex((prev) => (prev + 1) % lembrancas.length);
        setLembrancaFade(true);
      }, 350);
    }, 5000);
    return () => clearTimeout(timer);
  }, [lembrancaIndex, lembrancas.length]);

  // Navegação manual com fade
  const handleLembrancaNav = (dir) => {
    setLembrancaFade(false);
    setTimeout(() => {
      setLembrancaIndex((prev) => (dir === 'prev' ? (prev - 1 + lembrancas.length) % lembrancas.length : (prev + 1) % lembrancas.length));
      setLembrancaFade(true);
    }, 350);
  };

  // Transição automática para exemplos
  useEffect(() => {
    const timer = setTimeout(() => {
      setExemploFade(false);
      setTimeout(() => {
        setExemploIndex((prev) => (prev + 1) % exemplos.length);
        setExemploFade(true);
      }, 350);
    }, 5000);
    return () => clearTimeout(timer);
  }, [exemploIndex, exemplos.length]);

  const handleExemploNav = (dir) => {
    setExemploFade(false);
    setTimeout(() => {
      setExemploIndex((prev) => (dir === 'prev' ? (prev - 1 + exemplos.length) % exemplos.length : (prev + 1) % exemplos.length));
      setExemploFade(true);
    }, 350);
  };

  if (loading) {
    return <Loader />;
  }

  // Função para alternar o estado do menu
  // Essa função altera o estado do menu de aberto para fechado e vice-versa
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Imagem no topo */}
      <div className="topo" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <img
          src="/imagens/capa.png"
          alt="Topo do site"
          style={{
            width: '100%',
            height: 'auto',
            display: 'block',
            borderRadius: '16px',
            boxShadow: '0 4px 24px rgba(0,0,0,0.08)'
          }}
        />
        <h1 className="eco-sagrado" style={{ fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: '2.8rem', color: '#2C2C2C', marginTop: 10, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12 }}>
          Eco Sagrado
          {/* Ícone de eternidade */}
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <svg width="32" height="32" viewBox="0 0 24 24" fill="none"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#4CAF50"/></svg>
          </span>
        </h1>
        <p className="eco-sagrado-frase" style={{ fontSize: '1.3rem', color: '#5A5A5A', fontStyle: 'italic', marginBottom: 0 }}>
          Memórias eternas, homenagens que conectam gerações.
        </p>
      </div>

      {/* Menu de navegação */}
      <nav className="menu">
        <div className="menu-icon" onClick={toggleMenu}>
          ☰ Menu {/* Ícone de menu com o texto */}
        </div>
        <ul className={`menu-links ${menuOpen ? 'open' : ''}`}>
          <li><a href="#inicio">Início</a></li>
          <li><a href="#como-funciona">Como Funciona</a></li>
          <li><a href="#exemplos">Exemplos</a></li>
          <li><a href="#planos">Planos e Preços</a></li>
          <li><a href="#contato">Contato</a></li>
        </ul>
      </nav>

      {/* Seção Hero */}
      <section id="inicio" className="hero">
        <h2 style={{ fontWeight: 600, color: '#3A3A3A', fontSize: '2.1rem' }}>
          Homenagens digitais para eternizar quem você ama
        </h2>
        <p style={{ fontSize: '1.1rem', color: '#6A6A6A', margin: '16px 0 24px' }}>
          Crie um memorial digital exclusivo, acessível por QR Code em cerâmica, para preservar histórias e sentimentos de forma respeitosa e duradoura.
        </p>
        <a
          href="https://wa.me/5588999344202"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-primary premium-btn"
          style={{ fontSize: '1.15rem', padding: '12px 32px', borderRadius: '8px', background: 'linear-gradient(90deg,#4CAF50,#B0BEC5)', boxShadow: '0 2px 8px rgba(76,175,80,0.12)' }}
        >
          Solicite seu memorial
        </a>
        <div style={{ marginTop: 24, background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(44,175,80,0.08)', padding: 18, maxWidth: 520, marginLeft: 'auto', marginRight: 'auto', color: '#388E3C', fontWeight: 500, fontSize: '1.08rem', textAlign: 'center' }}>
          <span style={{ fontSize: '1.2rem', color: '#2C2C2C', fontWeight: 600 }}>Homenagem eterna, pagamento único!</span><br />
          Ao adquirir seu memorial digital, você faz um investimento único e garante que a homenagem ficará disponível para sempre, sem mensalidades ou taxas futuras. Valorize a memória de quem você ama com uma página exclusiva, duradoura e acessível eternamente.
        </div>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="how-it-works" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#2C2C2C', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', textAlign: 'center' }}>
          Como Funciona
          {/* Ícone de QR Code */}
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><rect x="3" y="3" width="6" height="6" rx="2" fill="#2196F3"/><rect x="15" y="3" width="6" height="6" rx="2" fill="#2196F3"/><rect x="3" y="15" width="6" height="6" rx="2" fill="#2196F3"/><rect x="15" y="15" width="6" height="6" rx="2" fill="#2196F3"/><rect x="10" y="10" width="4" height="4" rx="1" fill="#B0BEC5"/></svg>
          </span>
        </h2>
        <ol style={{ fontSize: '1.15rem', color: '#444', maxWidth: 520, margin: '0 auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 20, textAlign: 'left', display: 'inline-block' }}>
          <li>✉️ Envie informações e fotos do ente querido. <span style={{ marginLeft: 6, verticalAlign: 'middle' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 2v.01L12 13 4 6.01V6h16zm-16 12V8.99l8 6.99 8-6.99V18H4z" fill="#FFC107"/></svg></span></li>
          <li>🖼️ Receba uma página personalizada, elegante e sensível. <span style={{ marginLeft: 6, verticalAlign: 'middle' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2zm-2 0H5V5h14v14zm-7-3l2.5 3.01L19 13l-4.5 6H7l4-6z" fill="#4CAF50"/></svg></span></li>
          <li>🔗 Receba o QR Code em cerâmica para fixar no túmulo ou memorial. <span style={{ marginLeft: 6, verticalAlign: 'middle' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 7a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10zm0 2H7v6h10V9z" fill="#2196F3"/></svg></span></li>
          <li>📲 Qualquer pessoa pode escanear e acessar a homenagem digital. <span style={{ marginLeft: 6, verticalAlign: 'middle' }}><svg width="18" height="18" viewBox="0 0 24 24" fill="none"><path d="M17 1H7C5.9 1 5 1.9 5 3v18c0 1.1.9 2 2 2h10c1.1 0 2-.9 2-2V3c0-1.1-.9-2-2-2zm0 2v18H7V3h10zm-5 16c-1.1 0-2-.9-2-2h4c0 1.1-.9 2-2 2z" fill="#B0BEC5"/></svg></span></li>
        </ol>
      </section>

      {/* Diferenciais */}
      <section className="diferenciais" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, maxWidth: 900, margin: '32px auto' }}>
        <h2 style={{ color: '#2C2C2C', fontWeight: 600, textAlign: 'center', marginBottom: 24 }}>
          Nossos Diferenciais
        </h2>
        <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: 32 }}>
          <div style={{ flex: '1 1 180px', minWidth: 180, textAlign: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2C7.03 2 3 6.03 3 11c0 4.97 4.03 9 9 9s9-4.03 9-9c0-4.97-4.03-9-9-9zm0 16c-3.87 0-7-3.13-7-7 0-3.87 3.13-7 7-7s7 3.13 7 7c0 3.87-3.13 7-7 7zm-1-13h2v6h-2zm0 8h2v2h-2z" fill="#B0BEC5"/></svg>
            <div style={{ fontWeight: 500, marginTop: 8 }}>Cerâmica de alta qualidade</div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>QR Code gravado em cerâmica resistente, feito para durar.</div>
          </div>
          <div style={{ flex: '1 1 180px', minWidth: 180, textAlign: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 5.25-3.75 10-7 10s-7-4.75-7-10V6l7-4zm0 2.18L6 6.09v5.91c0 4.42 2.97 8.36 6 8.36s6-3.94 6-8.36V6.09l-6-1.91z" fill="#2196F3"/></svg>
            <div style={{ fontWeight: 500, marginTop: 8 }}>Segurança e privacidade</div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>Site protegido por SSL e compromisso com proteção de dados.</div>
          </div>
          <div style={{ flex: '1 1 180px', minWidth: 180, textAlign: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E53935"/></svg>
            <div style={{ fontWeight: 500, marginTop: 8 }}>Personalização completa</div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>Memorial digital feito sob medida, com fotos, textos e vídeos.</div>
          </div>
          <div style={{ flex: '1 1 180px', minWidth: 180, textAlign: 'center' }}>
            <svg width="40" height="40" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#4CAF50"/></svg>
            <div style={{ fontWeight: 500, marginTop: 8 }}>Atendimento humanizado</div>
            <div style={{ fontSize: '0.95rem', color: '#666' }}>Equipe dedicada para ajudar em cada etapa da homenagem.</div>
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="faq" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32, maxWidth: 900, margin: '32px auto' }}>
        <h2 style={{ color: '#2C2C2C', fontWeight: 600, textAlign: 'center', marginBottom: 24 }}>
          Perguntas Frequentes (FAQ)
        </h2>
        <div className="faq-list">
          <details style={{ marginBottom: 18 }}>
            <summary style={{ fontWeight: 500, fontSize: '1.08rem', cursor: 'pointer', color: '#4CAF50' }}>Como funciona o memorial digital?</summary>
            <div style={{ color: '#444', marginTop: 8 }}>Você envia as informações e fotos do ente querido, nós criamos uma página personalizada e geramos um QR Code para ser fixado no túmulo ou memorial.</div>
          </details>
          <details style={{ marginBottom: 18 }}>
            <summary style={{ fontWeight: 500, fontSize: '1.08rem', cursor: 'pointer', color: '#4CAF50' }}>O QR Code é resistente ao tempo?</summary>
            <div style={{ color: '#444', marginTop: 8 }}>Sim! O QR Code é gravado em cerâmica de alta qualidade, resistente ao sol, chuva e variações de temperatura.</div>
          </details>
          <details style={{ marginBottom: 18 }}>
            <summary style={{ fontWeight: 500, fontSize: '1.08rem', cursor: 'pointer', color: '#4CAF50' }}>Quais informações posso colocar na homenagem?</summary>
            <div style={{ color: '#444', marginTop: 8 }}>Você pode incluir textos, fotos, vídeos, depoimentos e outros detalhes que desejar para tornar a homenagem única.</div>
          </details>
          <details style={{ marginBottom: 18 }}>
            <summary style={{ fontWeight: 500, fontSize: '1.08rem', cursor: 'pointer', color: '#4CAF50' }}>É seguro compartilhar dados no site?</summary>
            <div style={{ color: '#444', marginTop: 8 }}>Sim! O site utiliza criptografia SSL e segue normas de proteção de dados. Suas informações são tratadas com total privacidade.</div>
          </details>
          <details style={{ marginBottom: 18 }}>
            <summary style={{ fontWeight: 500, fontSize: '1.08rem', cursor: 'pointer', color: '#4CAF50' }}>Como faço para solicitar um memorial?</summary>
            <div style={{ color: '#444', marginTop: 8 }}>Basta clicar no botão de contato ou preencher o formulário. Nossa equipe entrará em contato para orientar todo o processo.</div>
          </details>
        </div>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="examples" style={{ textAlign: 'center' }}>
        <h2 style={{ color: '#2C2C2C', fontWeight: 600, display: 'flex', alignItems: 'center', gap: 10, justifyContent: 'center', textAlign: 'center' }}>
          Exemplos de Homenagem
          {/* Ícone de coração */}
          <span style={{ display: 'inline-block', verticalAlign: 'middle' }}>
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none"><path d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41 1.01 4.5 2.09C13.09 4.01 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z" fill="#E53935"/></svg>
          </span>
        </h2>
        <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '32px', width: '100%' }}>
          <div className="example" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 20, marginBottom: 0, display: 'block', textAlign: 'center', maxWidth: '600px', width: '100%' }}>
            <h3 style={{ color: '#4CAF50', fontWeight: 500, textAlign: 'center' }}>Memória que vive para sempre</h3>
            <p style={{ color: '#555', fontSize: '1rem', textAlign: 'center' }}>Homenagem digital eterna, acessível por QR Code em cerâmica. Memorial online com fotos, textos e vídeos, criado com respeito e carinho.</p>
            <div style={{ position: 'relative', display: 'inline-block' }}>
              <button onClick={() => handleExemploNav('prev')} style={{ position: 'absolute', left: -32, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 28, color: '#4CAF50', cursor: 'pointer', zIndex: 2 }} aria-label="Anterior">‹</button>
              <a
                href={exemplos[exemploIndex].link}
                target="_blank"
                rel="noopener noreferrer"
              >
                <img
                  src={exemplos[exemploIndex].img}
                  alt={exemplos[exemploIndex].alt}
                  className={exemploFade ? 'fade-in' : 'fade-out'}
                  style={{
                    width: '100%',
                    maxWidth: '600px',
                    height: 'auto',
                    display: 'block',
                    margin: '0 auto',
                    borderRadius: '10px',
                    boxShadow: '0 2px 8px rgba(0,0,0,0.08)',
                    transition: 'opacity 0.35s'
                  }}
                />
              </a>
              <button onClick={() => handleExemploNav('next')} style={{ position: 'absolute', right: -32, top: '50%', transform: 'translateY(-50%)', background: 'none', border: 'none', fontSize: 28, color: '#4CAF50', cursor: 'pointer', zIndex: 2 }} aria-label="Próxima">›</button>
            </div>
            <div style={{ marginTop: 8 }}>
              {exemplos.map((_, i) => (
                <span key={i} style={{ display: 'inline-block', width: 10, height: 10, borderRadius: '50%', background: i === exemploIndex ? '#4CAF50' : '#B0BEC5', margin: '0 3px' }}></span>
              ))}
            </div>
            <div style={{ marginTop: 20, textAlign: 'center', fontSize: '1.08rem', color: '#388E3C', fontWeight: 500 }}>
              Clique nas imagens acima para visualizar exemplos reais de sites de homenagem criados por nossa equipe.
            </div>
          </div>
        </div>

        {/* Modal para exibir imagem ampliada */}
        {showModal && (
          <div className="modal-overlay" style={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100vw',
            height: '100vh',
            background: 'rgba(0,0,0,0.7)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            zIndex: 9999
          }} onClick={() => setShowModal(false)}>
            <div style={{ position: 'relative', background: '#fff', padding: 20, borderRadius: 10 }}>
              <img
                src={modalImg}
                alt="Exemplo de lembrança ampliada"
                className="lembranca-modal-img"
                style={{ maxWidth: '80vw', maxHeight: '80vh', borderRadius: '8px' }}
              />
              <button
                onClick={() => setShowModal(false)}
                style={{ position: 'absolute', top: 10, right: 10, background: '#333', color: '#fff', border: 'none', borderRadius: '50%', width: 32, height: 32, fontSize: 18, cursor: 'pointer' }}
              >×</button>
            </div>
          </div>
        )}
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="pricing">
        <h2 style={{ color: '#2C2C2C', fontWeight: 600 }}>Planos e Preços</h2>
        <table style={{ background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', overflow: 'hidden' }}>
          <thead>
            <tr style={{ background: '#B0BEC5', color: '#2C2C2C' }}>
              <th>Plano</th>
              <th>Conteúdo</th>
              <th>QR Code</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simples</td>
              <td>Memorial digital padrão</td>
              <td>QR Code digital</td>
              <td>R$ 99,90</td>
            </tr>
            <tr>
              <td>Completo</td>
              <td>Memorial personalizado</td>
              <td>QR Code físico em cerâmica</td>
              <td>R$ 129,90</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Página completa + manutenção anual</td>
              <td>Dois QR Codes personalizados</td>
              <td>R$ 199,90</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="testimonials">
        <h2 style={{ color: '#2C2C2C', fontWeight: 600 }}>Depoimentos</h2>
        <DepoimentosCarousel />
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="contact">
        <h2 style={{ color: '#2C2C2C', fontWeight: 600 }}>Fale Conosco</h2>
        <p style={{ color: '#555', fontSize: '1rem', marginBottom: 16 }}>Nossa equipe está pronta para ajudar você a criar uma homenagem respeitosa e personalizada. Fale conosco pelo WhatsApp ou envie sua mensagem pelo formulário abaixo.</p>
        {/* Formulário de contato */}
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Evita o recarregamento da página
            const nome = e.target.nome.value;
            const email = e.target.email.value;
            const telefone = e.target.telefone.value;
            const mensagem = e.target.mensagem.value;

            // Cria a mensagem para o WhatsApp
            const textoWhatsApp = `Olá, meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Gostaria de fazer um orçamento. Mensagem: ${mensagem}`;

            // Redireciona para o WhatsApp
            const numeroWhatsApp = "5588999344202"; // Substitua pelo seu número
            const url = `https://wa.me/${numeroWhatsApp}?text=${encodeURIComponent(textoWhatsApp)}`;
            window.open(url, "_blank");
          }}
        >
          <label>
            Nome:
            <input type="text" name="nome" required />
          </label>
          <label>
            E-mail:
            <input type="email" name="email" required />
          </label>
          <label>
            Telefone:
            <input type="tel" name="telefone" required />
          </label>
          <label>
            Mensagem:
            <textarea name="mensagem" required></textarea>
          </label>
          <button type="submit">💬 Enviar Mensagem</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="footer" style={{ background: '#B0BEC5', color: '#2C2C2C', padding: '24px 0', marginTop: 32 }}>
        <div className="social" style={{ marginBottom: 12 }}>
          <a href="https://facebook.com" style={{ margin: '0 12px', color: '#2C2C2C', fontWeight: 500 }}>Facebook</a>
          <a href="https://instagram.com" style={{ margin: '0 12px', color: '#2C2C2C', fontWeight: 500 }}>Instagram</a>
          <a href="mailto:fransnuunes1987@gmail.com?subject=Orçamento%20do%20site&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20site." style={{ margin: '0 12px', color: '#2C2C2C', fontWeight: 500 }}>E-mail</a>
          <a href="/privacidade" style={{ margin: '0 12px', color: '#2C2C2C', fontWeight: 500 }}>Privacidade</a>
        </div>
        <div className="selos-seguranca" style={{ marginTop: 24, display: 'flex', justifyContent: 'center', gap: 24, flexWrap: 'wrap', alignItems: 'center' }}>
          <div style={{ textAlign: 'center' }}>
            {/* Ícone SSL */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2C8.13 2 5 5.13 5 9v4H4a2 2 0 0 0-2 2v5a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-5a2 2 0 0 0-2-2h-1V9c0-3.87-3.13-7-7-7zm0 2c3.31 0 6 2.69 6 6v4H6V9c0-3.31 2.69-6 6-6zm-8 13v5h16v-5H4zm8 2a2 2 0 1 1 0-4 2 2 0 0 1 0 4z" fill="#4CAF50"/></svg>
            <div style={{ fontSize: '0.9rem', color: '#444' }}>Site Seguro SSL</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            {/* Ícone proteção de dados */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2l7 4v6c0 5.25-3.75 10-7 10s-7-4.75-7-10V6l7-4zm0 2.18L6 6.09v5.91c0 4.42 2.97 8.36 6 8.36s6-3.94 6-8.36V6.09l-6-1.91z" fill="#2196F3"/></svg>
            <div style={{ fontSize: '0.9rem', color: '#444' }}>Proteção de Dados</div>
          </div>
          <div style={{ textAlign: 'center' }}>
            {/* Ícone site confiável */}
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none"><path d="M12 2a10 10 0 1 0 0 20 10 10 0 0 0 0-20zm-1 15l-5-5 1.41-1.41L11 14.17l6.59-6.59L19 9l-8 8z" fill="#FFC107"/></svg>
            <div style={{ fontSize: '0.9rem', color: '#444' }}>Site Confiável</div>
          </div>
        </div>
        <div style={{ textAlign: 'center', marginTop: 8, fontSize: '0.95rem', color: '#666' }}>
          Compromisso com sua privacidade e segurança. Seus dados são protegidos e o site utiliza criptografia SSL.
        </div>
        <p style={{ fontSize: '0.95rem', color: '#444', margin: 0 }}>© 2025 Eco Sagrado. Todos os direitos reservados.</p>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default App;
