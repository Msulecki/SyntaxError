import React, { useState } from 'react'
import { Content } from './Content'
import { Footer } from './Footer'
import { ThemeToggle } from './ThemeToggle'
import { Logo } from './Logo'
import '../styles/App.scss'

function App() {
  const [darkTheme, setDarkTheme] = useState<Boolean>(
    localStorage.getItem('darkTheme') === 'true'
  )
  return (
    <div className={`app ${darkTheme ? 'dark' : ''}`}>
      <ThemeToggle darkTheme={darkTheme} setDarkTheme={setDarkTheme} />
      <Logo />
      <Content />
      <Footer />
    </div>
  )
}

export default App
