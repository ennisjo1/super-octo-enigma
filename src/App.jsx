import { useState } from 'react'
import reactLogo from './assets/star.svg'
import viteLogo from './assets/panda.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
      <a href="https://www.youtube.com/watch?v=ZN5PoW7_kdA" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
        <a href="https://www.youtube.com/watch?v=ZN5PoW7_kdA" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>

        <a href="https://www.youtube.com/watch?v=ZN5PoW7_kdA" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Welcome to JCE Week 9 Assignment, Click to Support</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1000)}>
          Satisfaction Units = {count}
        </button>
        <p>
          I'm glad to see your Satisfied
        </p>
      </div>
      <p className="read-the-docs">
        To support the channel feel free to hit that like and subscribe
      </p>
    </>
  )
}

export default App
