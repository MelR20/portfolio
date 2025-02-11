import "./styles/App.css";
import Header from "./components/Header";

function App() {
  return (
    <body className="body-global-styling">
      <video className="background" autoPlay loop muted playsInline>
        <source src="/background_loop_vid.mp4" type="video/mp4" />
      </video>
      <div className="main-container">
        <Header />
        <div className="grid content-container">
          <div className="left-column">
            <h1>Patate</h1>
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
