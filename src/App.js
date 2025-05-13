import React, { useState } from 'react';
import './App.css';

function App() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="App">
      {/* Imagem no topo */}
      <div className="topo" style={{ textAlign: 'center', marginBottom: '10px' }}>
        <h1 className="eco-sagrado">
          Eco Sagrado
        </h1>
        <p className="eco-sagrado-frase">
          Preservando memórias, conectando histórias.
        </p>
        <img 
          src="/imagens/header.jpeg" 
          alt="Topo do site" 
          style={{
            width: '100%',
            height: 'auto',
            display: 'block'
          }}
        />
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
        <h2>Preserve a memória de quem você ama com um memorial digital acessível por QR Code.</h2>
        <a 
          href="https://wa.me/5588999344202" 
          target="_blank" 
          rel="noopener noreferrer" 
          className="btn-primary"
        >
          Criar Homenagem
        </a>
      </section>

      {/* Como Funciona */}
      <section id="como-funciona" className="how-it-works">
        <h2>Como Funciona</h2>
        <ol>
          <li>Preencha um formulário com informações do ente querido.</li>
          <li>Nós criamos uma página exclusiva e bonita com essas memórias.</li>
          <li>Receba um QR Code para fixar no túmulo ou memorial.</li>
          <li>Qualquer pessoa pode escanear e acessar a homenagem.</li>
        </ol>
      </section>

      {/* Exemplos */}
      <section id="exemplos" className="examples">
        <h2>Exemplos de Páginas de Homenagem</h2>
        <div className="example">
          <h3>Joaquim Almeida da Silva</h3>
          <p>Uma vida dedicada à família e à arte.</p>
          {/* Foto clicável que redireciona para um link externo */}
          <a 
            href="https://memorial-hesite.vercel.app"
            target="_blank" 
            rel="noopener noreferrer"
          >
            <img 
              src="/imagens/pagina-exemplo.png" 
              alt="Exemplo de homenagem" 
              style={{
                width: '100%', // Ajusta a largura para ocupar todo o espaço disponível
                maxWidth: '600px', // Define um limite máximo para a largura
                height: 'auto', // Mantém a proporção da imagem
                display: 'block', // Remove espaços extras ao redor da imagem
                margin: '0 auto' // Centraliza a imagem
              }}
            />
          </a>
        </div>
      </section>

      {/* Planos e Preços */}
      <section id="planos" className="pricing">
        <h2>Planos e Preços</h2>
        <table>
          <thead>
            <tr>
              <th>Plano</th>
              <th>Conteúdo</th>
              <th>QR Code</th>
              <th>Preço</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Simples</td>
              <td>Texto + foto</td>
              <td>Simples (adesivo)</td>
              <td>R$XX</td>
            </tr>
            <tr>
              <td>Completo</td>
              <td>Biografia, fotos, vídeo</td>
              <td>Placa personalizada</td>
              <td>R$XX</td>
            </tr>
            <tr>
              <td>Premium</td>
              <td>Página completa + manutenção anual</td>
              <td>QR Code vitalício</td>
              <td>R$XX</td>
            </tr>
          </tbody>
        </table>
      </section>

      {/* Depoimentos */}
      <section id="depoimentos" className="testimonials">
        <h2>Depoimentos:</h2>
        <blockquote>
          <p>"O serviço foi incrível e trouxe muita emoção para nossa família."</p>
          <cite>- João Silva</cite>
        </blockquote>
        <blockquote>
          <p>"A página criada foi linda e cheia de detalhes que nos fizeram reviver momentos especiais."</p>
          <cite>- Maria Oliveira</cite>
        </blockquote>
        <blockquote>
          <p>"Recomendo a todos! O QR Code é prático e a homenagem ficou perfeita."</p>
          <cite>- Carlos Pereira</cite>
        </blockquote>
      </section>

      {/* Formulário de Contato */}
      <section id="contato" className="contact">
        <h2>Contato</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault(); // Evita o recarregamento da página
            const nome = e.target.nome.value;
            const email = e.target.email.value;
            const telefone = e.target.telefone.value;
            const mensagem = e.target.mensagem.value;

            // Cria a mensagem para o WhatsApp
            const textoWhatsApp = `Olá, meu nome é ${nome}. Meu e-mail é ${email} e meu telefone é ${telefone}. Gostaria de entrar em contato. Mensagem: ${mensagem}`;

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
          <button type="submit">Enviar pelo WhatsApp</button>
        </form>
      </section>

      {/* Rodapé */}
      <footer className="footer">
        <p>© 2025 Eco Sagrado. Todos os direitos reservados.</p>
        <div className="social">
          <a href="https://facebook.com">Facebook</a>
          <a href="https://instagram.com">Instagram</a>
          <a href="mailto:fransnuunes1987@gmail.com?subject=Orçamento%20do%20site&body=Olá,%20gostaria%20de%20mais%20informações%20sobre%20o%20site.">E-mail</a>
        </div>
      </footer>
    </div>
  );
}

export default App;
