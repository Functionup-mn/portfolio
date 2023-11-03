import React from 'react'
import NavBar from './components/NavBar'
import Home from './components/Home'
import SocialLink from './components/SocialLink'
import About from './components/About'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Contact from './components/Contact'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Home/>
      <SocialLink/>
      <About/>
      <Projects/>
      <Skills/>
      <Contact/>
    </div>
  )
}

export default App
