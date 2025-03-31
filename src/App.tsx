import "./styles/App.css";
import Header from "./components/Header";
import background_loop_vid from "./assets/background_loop_vid.mp4";

function App() {
  return (
    <body className="body-global-styling">
      <video className="background" autoPlay loop muted playsInline>
        <source src={background_loop_vid} type="video/mp4" />
      </video>
      <div className="main-container">
        <Header />
        <div className="content-container">
          <div className="content-section grid glassmorphism" id="aPropos">
            <h1 className="section-title">À propos</h1>
            <p className="section-text">
              Passionnée par la logique, les systèmes et les technologies, j’ai
              fait le saut de la sexologie vers le développement logiciel.
              Certifiée Scrum Master, j’ai d’abord exploré la programmation en
              autodidacte avant de formaliser mes connaissances avec un
              certificat en informatique à l’Université Laval. Mon parcours
              atypique m’a permis d’acquérir une solide capacité d’analyse, une
              approche méthodique de la résolution de problèmes et d’excellentes
              compétences en collaboration et en communication. Aujourd’hui, je
              mets ces atouts au service du développement logiciel, avec
              l’ambition de créer des solutions efficaces et bien pensées.
            </p>
          </div>
          <div className="content-section grid glassmorphism" id="formations">
            <h1 className="section-title">Formations</h1>
            <ul className="section-text">
              <li>
                <h2>Certificat en informatique</h2>
                <p>Université Laval</p>
                <p>2024</p>
              </li>
              <li>
                <h2>Certification Professional Scrum Master I (PSM I)</h2>
                <p>Scrum.org</p>
                <p>2023</p>
                <img></img>
              </li>
              <li>
                <h2>Bootcamp en développement Web</h2>
                <p>Udemy</p>
                <p>2023</p>
              </li>
            </ul>
          </div>
          <div className="content-section grid glassmorphism" id="projects">
            <h1 className="section-title">Mes Projets</h1>
            <div className="section-text">
              <h2>Gentle Reminder</h2>
              <p>
                {" "}
                Une application mobile de gestion de listes de rappels en React
                Native avec Typescript. Développement en cours
              </p>
            </div>
          </div>
          <div className="content-section grid glassmorphism" id="contact">
            <h1 className="section-title">Contact</h1>
          </div>
        </div>
      </div>
      <a
        className="background-credit"
        href="https://www.vecteezy.com/free-videos/background"
      >
        Background Stock Videos by Vecteezy
      </a>
    </body>
  );
}

export default App;
