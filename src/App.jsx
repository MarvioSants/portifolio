import './App.css'
import LogoLoop from './LogoLoop';

// Pegamos o HTML, JS, TS, React, MySQL e Postgres daqui:
import { 
  SiHtml5, SiJavascript, SiTypescript, 
  SiReact, SiMysql, SiPostgresql
} from 'react-icons/si';

// E pegamos o Java, CSS e ícones de contato daqui:
import { FaJava, FaCss3Alt, FaDatabase, FaLinkedin, FaGithub, FaEnvelope } from 'react-icons/fa';

// Montando a sua lista de tecnologias com os ícones corrigidos!
const techLogos = [
  { node: <SiHtml5 />, title: "HTML5" },
  { node: <FaCss3Alt />, title: "CSS3" },
  { node: <SiJavascript />, title: "JavaScript" },
  { node: <SiTypescript />, title: "TypeScript" },
  { node: <SiReact />, title: "React" },
  { node: <FaJava />, title: "Java" },
  { node: <SiMysql />, title: "MySQL" },
  { node: <SiPostgresql />, title: "PostgreSQL" },
  { node: <FaDatabase />, title: "SQL Server" },
];

function App() {
  return (
    <div className="portfolio-container">
            <header className="hero">
        <div className="foto-container">
          {/* Troque a URL abaixo pela sua foto! */}
          <img src="./portifolio.jpeg" alt="Foto do Marcio" className="perfil-foto" />
        </div>
        <h1>Olá, sou o Marcio Santos 👋</h1>
        <h2>Desenvolvedor Full Stack</h2>
        <p>Criando desde interfaces incríveis até bancos de dados robustos.</p>
      </header>

      <main>
        <section id="sobre" className="section">
          <h2>Sobre mim</h2>
          <p>
            Sou apaixonado por tecnologia e focado em criar soluções completas. 
            Tenho experiência tanto na criação visual quanto na estruturação de dados.
          </p>
        </section>

        <section id="habilidades" className="section">
          <h2>Minhas Habilidades</h2>
          <div style={{ marginTop: '1rem', width: '100%' }}>
            <LogoLoop logos={techLogos} speed={20} fadeOutColor="#0f172a" />
          </div>
        </section>

                <section id="projetos" className="section">
          <h2>Meus Projetos</h2>
          <div className="projetos-grid">

            {/* Projeto 1 */}
            <div className="projeto-card">
              <h3>Nome do Projeto 1</h3>
              <p>Landing Page para uma equipe de Robótica da Escola SESI ARACAGI. O intuito era criar um espaço digital para apresentar os projetos e conquistas da equipe.</p>
              
              <div className="projeto-links">
                {/* Link para o código no GitHub */}
                <a 
                  href="https://github.com/wawal2312/site-cortex.git" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-projeto"
                >
                  GitHub
                </a>

                {/* Link para o site funcionando no ar */}
                <a 
                  href="https://wawal2312.github.io/site-cortex/" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-projeto btn-destaque"
                >
                  Acessar ↗
                </a>
              </div>
            </div>

            {/* Projeto 2 */}
            <div className="projeto-card">
              <h3>Nome do Projeto 2</h3>
              <p>Descrição do segundo projeto.</p>
              
              <div className="projeto-links">
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-projeto"
                >
                  GitHub
                </a>
                <a 
                  href="#" 
                  target="_blank" 
                  rel="noreferrer" 
                  className="btn-projeto btn-destaque"
                >
                  Acessar ↗
                </a>
              </div>
            </div>

          </div>
        </section>

        {/* Seção de Contato com Links e Ícones */}
        <section id="contato" className="section">
          <h2>Contato</h2>
          <p>Vamos conversar? Me mande uma mensagem:</p>
          <ul>
            <li>
              <a href="https://www.linkedin.com/in/marciosantosdev" target="_blank" rel="noreferrer">
                <FaLinkedin style={{ verticalAlign: 'middle', marginRight: '8px' }} /> LinkedIn
              </a>
            </li>
            <li>
              <a href="https://github.com/MarcioSantss" target="_blank" rel="noreferrer">
                <FaGithub style={{ verticalAlign: 'middle', marginRight: '8px' }} /> GitHub
              </a>
            </li>
            <li>
              <a href="mailto:marciosantsff@gmail.com?subject=Olá, vamos conversar!">
                <FaEnvelope style={{ verticalAlign: 'middle', marginRight: '8px' }} /> E-mail
              </a>
            </li>
          </ul>
        </section>
      </main>

      <footer>
        <p>© 2026 Marcio Santos. Todos os direitos reservados.</p>
      </footer>
    </div>
  )
}

export default App