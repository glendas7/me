import React from 'react'
import './App.css';
import About from './components/About.js'
import Resume from './components/Resume.js'
import Header from './components/Header.js'
import Projects from './components/Projects.js'
import Skills from './components/Skills.js'
import FadeIn from 'react-fade-in';

export default function App() {

  return (
    <div class="app">
      <div class="sidebar">
        <Header></Header>
      </div>
      <div class="page-content">
        <About></About>
        <FadeIn delay="5400">
          <div>
            <Skills></Skills>
            <Projects></Projects>
            <Resume></Resume>
          </div>
        </FadeIn>
      </div>
    </div>

  )
}