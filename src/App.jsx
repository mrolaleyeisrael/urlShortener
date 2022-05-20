import { useState } from 'react'
import Header from './components/Header'
import Footer from './components/Footer'
import './App.css'
import Boost from './components/Boost'
import Advanced from './components/Advanced'
import Showcase from './components/Showcase'
import Shortener from './components/Shortener'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header />
      <Showcase />
      <Shortener />
      <Advanced />
      <Boost />
      <Footer />

    </>
  )
}

export default App
