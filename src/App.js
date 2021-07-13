import React from 'react'
import './App.css';
import Intro from './components/Intro'
import Sidebar from './components/Sidebar'
import Projects from './components/Projects'
import Education from './components/Education'
import Skills from './components/Skills'
import Fun from './components/JustForFun'
import Credits from './components/Credits'
// import FadeIn from 'react-fade-in';

export default function App() {
  return (

    <>
      <div class="sidebar">
        <Sidebar />
      </div>
      <div class="page-content">
        <Intro />
        {/* <FadeIn delay="5400"> */}
        <Skills />
        <Projects />
        <Education />
        <Fun />
        <Credits />
      </div>
      {/* </FadeIn> */}
    </>
  )
}