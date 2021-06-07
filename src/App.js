import React from 'react'
import './App.css';
import About from './components/About'
import Header from './components/Header'
import Projects from './components/Projects'
import Skills from './components/Skills'
import Fun from './components/JustForFun'
import Credits from './components/Credits'
// import FadeIn from 'react-fade-in';

export default function App() {
  return (
    <div class="app">
      <div class="sidebar">
        <Header></Header>
      </div>
      <div class="page-content">
        <About></About>
        {/* <FadeIn delay="5400"> */}
        <div>
          <Skills></Skills>
          <Projects></Projects>
          <Fun></Fun>
          <Credits></Credits>
        </div>
        {/* </FadeIn> */}
      </div>
    </div>

  )
}