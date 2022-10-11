import React from 'react'
// import { Link } from 'react-router-dom';
import { D20 } from '../../assets/index.js';
import './Projects.css';

export default function Projects() {
  return (
    <div>
      <h2>Projects</h2>
      <div className='card-container'>
        <div className='card'>
          <h4>Party Finder</h4>
          <div className='link-div'>
            <a
              href='https://github.com/laurabow/party-finder'
              target="_blank"
              rel='noopener noreferrer'>Github Repo</a>
            <a
              href='https://ttrpg-party-finder.netlify.app/'
              target="_blank"
              rel='noopener noreferrer'>Deployed Link</a>
          </div>
          <br />
          <p className='language'>React | Ruby on Rails | Material-UI</p>
          <br />
          <p className='description'>Party Finder is an online platform for table top roleplaying game players to find games to play in and for game masters to find players for their games.</p>
        </div>
        <div className='card'>
          <h4>Caves and Wyverns</h4>
          <div className='link-div'>
            <a
              href='https://github.com/laurabow/P2-Caves-Wyverns'
              target="_blank"
              rel='noopener noreferrer'>Github Repo</a>
            <a
              href='https://caves-and-wyverns.netlify.app/'
              target="_blank"
              rel='noopener noreferrer'>Deployed Link</a>
            </div>
          <br />
          <p className='language'>JavaScript | React</p>
          <br />
          <p className='description'>Cave and Wyverns is a dice game made with react. Users roll a dice and if they win, points get taken from the health points of the monster, if they lose the roll they lose health points.</p>
        </div>
        {/* <div className='card'>
          <h4>Volunteer App</h4>
          <div className='link-div'>
            <a
              href='https://github.com/laurabow/VolunteerApp'
              target="_blank"
              rel='noopener noreferrer'>Front End Github Repo</a>
            <a
              href='https://github.com/laurabow/VolunteerAppBackend'
              target="_blank"
              rel='noopener noreferrer'>Back End Github Repo</a>
            <a
              href='https://hungry-borg-6b9f04.netlify.app/'
              target="_blank"
              rel='noopener noreferrer'>Deployed Link</a>
            </div>
          <br />
          <p className='language'>React | Express | Bootstrap</p>
          <br />
          <p className='description'>The Volunteer App is an app where non-profit organizations can post events that need volunteers. It is also a place for volunteers to sign up to help out at those events. This was a group project.</p>
        </div> */}
        <div className='card'>
          <h4>Recipe App</h4>
          <div className='link-div'>
            <a
              href='https://github.com/laurabow/placeholder-p1'
              target="_blank"
              rel='noopener noreferrer'>Github Repo</a>
            <a
              href='https://laurabow.github.io/placeholder-p1/ '
              target="_blank"
              rel='noopener noreferrer'>Deployed Link</a>
            </div>
          <br />
          <p className='language'>JavaScript | HTML | CSS</p>
          <br />
          <p className='description'>The Recipe App is an app that gives you a random recipe at the click of a button!</p>
        </div>
      </div>
    </div>
  )
}
