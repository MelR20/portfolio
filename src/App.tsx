import './App.css'

function App() {
  return (
    <>
      <video className='background' autoPlay loop muted playsInline >
        <source src="./public/background_loop_vid.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
      <h1>Patate</h1>
      <a className='BackgroundCredit' href="https://www.vecteezy.com/free-videos/background">Background Stock Videos by Vecteezy</a>

    </>
  )
}

export default App
