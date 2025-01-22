import './styles/App.css'
import Header from './components/Header'

function App() {
  return (
    <>
      <video className='background' autoPlay loop muted playsInline >
        <source src="/background_loop_vid.mp4" type="video/mp4" />
      </video>
      <div className='mainContainer'>
        <Header/>
        <div className='contentContainer'>
          <h1>Patate</h1>
          <h2>Patate</h2>
        </div>
      </div>
      <a className='backgroundCredit' href="https://www.vecteezy.com/free-videos/background">Background Stock Videos by Vecteezy</a>

    </>
  )
}

export default App
