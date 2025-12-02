import React from 'react';
import { useNavigate } from 'react-router-dom';

function Privacidade() {
  const navigate = useNavigate();
  return (
    <div className="privacidade" style={{ maxWidth: 800, margin: '40px auto', background: '#fff', borderRadius: 12, boxShadow: '0 2px 8px rgba(0,0,0,0.04)', padding: 32 }}>
      <button
        onClick={() => navigate('/')}
        style={{
          background: 'linear-gradient(90deg,#4CAF50,#B0BEC5)',
          color: '#fff',
          border: 'none',
          borderRadius: '8px',
          padding: '10px 24px',
          fontWeight: 600,
          fontSize: '1rem',
          marginBottom: 24,
          cursor: 'pointer',
          boxShadow: '0 2px 8px rgba(76,175,80,0.12)'
        }}
      >
        ← Voltar para a página inicial
      </button>
      <h1 style={{ color: '#2C2C2C', fontWeight: 700, marginBottom: 24 }}>Política de Privacidade</h1>
      <p>Esta Política de Privacidade descreve como coletamos, usamos e protegemos suas informações ao utilizar nosso site Eco Sagrado.</p>
      <h2>1. Coleta de Informações</h2>
      <p>Coletamos informações fornecidas por você, como nome, e-mail, telefone e dados para criação de homenagens. Também coletamos dados automaticamente, como endereço IP, tipo de navegador e páginas acessadas, por meio de cookies e tecnologias similares.</p>
      <h2>2. Uso das Informações</h2>
      <p>Utilizamos suas informações para:
        <ul>
          <li>Prestar e melhorar nossos serviços;</li>
          <li>Personalizar sua experiência;</li>
          <li>Entrar em contato para suporte ou dúvidas;</li>
          <li>Cumprir obrigações legais.</li>
        </ul>
      </p>
      <h2>3. Cookies</h2>
      <p>Utilizamos cookies para melhorar a navegação, analisar o uso do site e personalizar conteúdo. Você pode desativar os cookies nas configurações do seu navegador, mas isso pode afetar algumas funcionalidades.</p>
      <h2>4. Compartilhamento de Dados</h2>
      <p>Não compartilhamos suas informações pessoais com terceiros, exceto quando necessário para prestação do serviço, cumprimento de obrigações legais ou mediante seu consentimento.</p>
      <h2>5. Segurança</h2>
      <p>Adotamos medidas de segurança para proteger suas informações contra acesso não autorizado, alteração ou divulgação. No entanto, nenhum sistema é totalmente seguro.</p>
      <h2>6. Direitos do Usuário</h2>
      <p>Você pode solicitar acesso, correção ou exclusão de seus dados pessoais a qualquer momento. Para isso, entre em contato conosco.</p>
      <h2>7. Alterações na Política</h2>
      <p>Podemos atualizar esta Política de Privacidade periodicamente. Recomendamos que você revise esta página regularmente.</p>
      <h2>8. Contato</h2>
      <p>Em caso de dúvidas sobre esta política, entre em contato pelo e-mail: <a href="mailto:fransnuunes1987@gmail.com">fransnuunes1987@gmail.com</a></p>
      <p style={{ marginTop: 32, color: '#888', fontSize: '0.95rem' }}>Última atualização: 2 de dezembro de 2025</p>
    </div>
  );
}

export default Privacidade;
