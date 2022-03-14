import React from 'react'
import Projects from '../Projects/Projects'
import pdf from "../../assets/pdf/laura-bowman-resume.pdf";
import './Home.css';

export default function Home() {
  return (
    <div className='homepage'>
      <h2 className='hi'>Hi, I'm Laura</h2>
      <p className='brand'><span className='brand-statement'>I am a fullstack software engineer, musician, former bakery owner, and a dog mom. I am a compassionate and hard working person who brings passion to every project. I approach problems with empathy, creativity, and a drive to overcome any obstacle. With enthusiasm and passion, I work hard and always strive to learn new languages and methods. I bring a positive attitude to any workplace. I am reliable, goal-driven, and show grace under pressure.</span><br /><span className='email'>Email me at: laurabowman1024@gmail.com</span></p>
      <div className='resume-div'>
        <a
          href={pdf}
          target="_blank"
          rel="noreferrer">
          Download my Resume
        </a>
      </div>
      <Projects />
      <div className='skills-container'>
        <h2 className='skills-title'>Skills</h2>
        <div className='skills'>
          <p><strong>Languages: </strong></p>
          <p>JavaScript, Ruby, Node.js, HTML, CSS</p>
        </div>
        <br />
        <div className='skills'>
          <p><strong>Frameworks: </strong></p>
          <p>React, Ruby on Rails, Express, Node.js</p>
        </div>
        <br />
        <div className='skills'>
          <p><strong>Databases: </strong></p>
          <p>PostgreSQL, SQL, RESTful APIs, MongoDB</p>
        </div>
        <br />
        <div className='skills'>
          <p><strong>Tools: </strong></p>
          <p>GitHub, Git, Heroku</p>
        </div>
      </div>
      
    </div>
  )
}
