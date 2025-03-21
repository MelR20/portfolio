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
        <div className="grid content-container">
          <div className="left-column">
            <h1>À propos</h1>
            <p>
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
