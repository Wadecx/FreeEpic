import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Fetcher from './Components/Fetcher'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Fetcher/>
    </>
  )
}

export default App
