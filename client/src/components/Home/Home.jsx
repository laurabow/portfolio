import React from 'react'
import Projects from '../Projects/Projects'
import './Home.css';

export default function Home() {
  return (
    <div className='homepage'>
      <h2 className='hi'>Hi, I'm Laura</h2>
      <p className='brand'><span className='brand-statement'>I am a fullstack software engineer, musician, former bakery owner, and a dog mom. I am a compassionate and hard working person who brings passion to every project. I approach problems with empathy, creativity, and a drive to overcome any obstacle. With enthusiasm and passion, I work hard and always strive to learn new languages and methods. I bring a positive attitude to any workplace. I am reliable, goal-driven, and show grace under pressure.</span><br /><span className='email'>Email me at: laurabowman1024@gmail.com</span></p>
      <Projects />
      <div className='skills-container'>
        <h2>Skills</h2>
        <div className='skills'>
          <h4>Languages: </h4>
          <p>JavaScript, Ruby, Node.js, HTML, CSS</p>
        </div>
        <br />
        <div className='skills'>
          <h4>Frameworks: </h4>
          <p>React, Ruby on Rails, Express, Node.js</p>
        </div>
        <br />
        <div className='skills'>
          <h4>Databases: </h4>
          <p>PostgreSQL, SQL, RESTful APIs, MongoDB</p>
        </div>
        <br />
        <div className='skills'>
          <h4>Tools: </h4>
          <p>GitHub, Git, Heroku</p>
        </div>
      </div>
      <div>
        <h3>Download my resume</h3>
      </div>
    </div>
  )
}
