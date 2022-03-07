import React from 'react'
import Projects from '../Projects/Projects'
import './Home.css';

export default function Home() {
  return (
    <div>
      <h2>Hi, I'm Laura</h2>
      <p><span>I am a fullstack software engineer, musician, former bakery owner, and a dog mom. I am a compassionate and hard working person who brings passion to every project. I approach problems with empathy, creativity, and a drive to overcome any obstacle. With enthusiasm and passion, I work hard and always strive to learn new languages and methods. I bring a positive attitude to any workplace. I am reliable, goal-driven, and show grace under pressure.</span><br /><span>Email me at: laurabowman1024@gmail.com</span></p>
      <Projects />
      <div>
        <h3>Skills</h3>
        <h5>Languages: </h5>
        <p>JavaScript, Ruby, Node.js, HTML, CSS</p>
        <br />
        <h5>Frameworks: </h5>
        <p>React, Ruby on Rails, Express, Node.js</p>
        <br />
        <h5>Databases: </h5>
        <p>PostgreSQL, SQL, RESTful APIs, MongoDB</p>
        <br />
        <h5>Tools: </h5>
        <p>GitHub, Git, Heroku</p>
      </div>
      <div>
        <h3>Download my resume</h3>
      </div>
    </div>
  )
}
