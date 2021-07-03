import React from 'react'
import './App.css';
import About from './components/About'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Fun from './components/JustForFun'
import Credits from './components/Credits'

// import FadeIn from 'react-fade-in';

export default function App() {
  return (

    <div class="app">
      <div class="sidebar">
        <Sidebar></Sidebar>
      </div>
      <div class="page-content">
        <About></About>
        {/* <FadeIn delay="5400"> */}
        <Skills></Skills>
        <Projects></Projects>
        <Fun></Fun>
        <Credits></Credits>
      </div>
      {/* </FadeIn> */}
    </div>
  )
}