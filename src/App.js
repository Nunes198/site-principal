import React, { useState } from 'react';
import './App.css';
import WhatsAppButton from './WhatsAppButton';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [showModal, setShowModal] = useState(false);

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
        <h1 className="eco-sagrado" style={{ fontFamily: 'Merriweather, serif', fontWeight: 700, fontSize: '2.8rem', color: '#2C2C2C', marginTop: 10 }}>
          Eco Sagrado
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
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="how-it-works">
        <h2 style={{ color: '#2C2C2C', fontWeight: 600 }}>Como Funciona</h2>
        <ol style={{ fontSize: '1.15rem', color: '#444', maxWidth: 520, margin: '0 auto', background: '#fff', borderRadius: 10, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 20 }}>
          <li>✉️ Envie informações e fotos do ente querido.</li>
          <li>🖼️ Receba uma página personalizada, elegante e sensível.</li>
          <li>🔗 Receba o QR Code em cerâmica para fixar no túmulo ou memorial.</li>
          <li>📲 Qualquer pessoa pode escanear e acessar a homenagem digital.</li>
        </ol>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="examples">
        <h2 style={{ color: '#2C2C2C', fontWeight: 600 }}>Exemplos de Homenagem</h2>
        <div className="example" style={{ background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 20, marginBottom: 24 }}>
          <h3 style={{ color: '#4CAF50', fontWeight: 500 }}>Memória que vive para sempre</h3>
          <p style={{ color: '#555', fontSize: '1rem' }}>Homenagem digital eterna, acessível por QR Code em cerâmica. Memorial online com fotos, textos e vídeos, criado com respeito e carinho.</p>
          <a
            href="https://memorial-hesite.vercel.app"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img
              src="/imagens/pagina-exemplo.png"
              alt="Exemplo de homenagem"
              style={{
                width: '100%',
                maxWidth: '600px',
                height: 'auto',
                display: 'block',
                margin: '0 auto',
                borderRadius: '10px',
                boxShadow: '0 2px 8px rgba(0,0,0,0.08)'
              }}
            />
          </a>
        </div>
        <div className="example" style={{ marginTop: '30px', textAlign: 'center', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 20 }}>
          <h3 style={{ color: '#4CAF50', fontWeight: 500 }}>Lembrança física com QR Code</h3>
          <p style={{ color: '#555', fontSize: '1rem' }}>Exemplo de lembrança em cerâmica para túmulo, com QR Code que leva à homenagem digital. Clique na imagem para ampliar.</p>
          <img
            src="/imagens/lembranca.jpeg"
            alt="Exemplo de lembrança com QR Code"
            className="lembranca-img"
            style={{
              width: '100%',
              maxWidth: '400px',
              height: 'auto',
              cursor: 'pointer',
              borderRadius: '8px',
              boxShadow: '0 2px 8px rgba(0,0,0,0.2)'
            }}
            onClick={() => setShowModal(true)}
          />
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
                src="/imagens/lembranca.jpeg"
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
        <blockquote style={{ background: '#F5F5F5', borderLeft: '4px solid #4CAF50', padding: '16px 24px', borderRadius: 8, margin: '16px auto', maxWidth: 520, color: '#444' }}>
          <p>“O serviço foi incrível e trouxe muita emoção para nossa família.”</p>
          <cite style={{ fontWeight: 500, color: '#2C2C2C' }}>João Silva</cite>
        </blockquote>
        <blockquote style={{ background: '#F5F5F5', borderLeft: '4px solid #4CAF50', padding: '16px 24px', borderRadius: 8, margin: '16px auto', maxWidth: 520, color: '#444' }}>
          <p>“A página criada foi linda e cheia de detalhes que nos fizeram reviver momentos especiais.”</p>
          <cite style={{ fontWeight: 500, color: '#2C2C2C' }}>Maria Oliveira</cite>
        </blockquote>
        <blockquote style={{ background: '#F5F5F5', borderLeft: '4px solid #4CAF50', padding: '16px 24px', borderRadius: 8, margin: '16px auto', maxWidth: 520, color: '#444' }}>
          <p>“Recomendo a todos! O QR Code é prático e a homenagem ficou perfeita.”</p>
          <cite style={{ fontWeight: 500, color: '#2C2C2C' }}>Carlos Pereira</cite>
        </blockquote>
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
        <p style={{ fontSize: '0.95rem', color: '#444', margin: 0 }}>© 2025 Eco Sagrado. Todos os direitos reservados.</p>
      </footer>
      <WhatsAppButton />
    </div>
  );
}

export default App;
