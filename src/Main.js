import React, { Component } from 'react';
import ReactDOM from 'react-dom'
import { render } from '@testing-library/react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faGithub } from '@fortawesome/free-brands-svg-icons'
import { faFileAlt } from '@fortawesome/free-solid-svg-icons'
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, Button, FormControl } from 'react-bootstrap';
import Resume from './Resume.pdf'
import Picture from './Picture.JPG'
import './index.css';



class Main extends Component {
    render() {
        return (
            <div>
     
            
            <div class="text">
                            
                <img id="pic" src={Picture} alt="Smiley Della!" />
                <h1>Hi! I'm Della. 👋</h1>
                <p>I'm a developer and a student studying Computer Science + Economics at <a href="" target="_blank"><span id="blue">Duke University</span></a>.</p>
                <p>I'm interested in building impactful technology within finance, e-commerce, and education.</p>
                <p>Currently seeking a Software Engineering Internship in Jakarta, Indonesia. </p>
                <p>Reach out to me at <a href="mailto:della.sihite@duke.edu"><span id="purple">della.sihite@duke.edu</span></a>!</p>
                <a href="https://www.linkedin.com/in/dellasihite/" target="_blank"><FontAwesomeIcon icon={faLinkedin} size="2x" />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href="https://github.com/della2001" target="_blank"><FontAwesomeIcon icon={faGithub} size="2x"/>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</a>
                <a href={Resume} target="_blank"><FontAwesomeIcon icon={faFileAlt} size="2x"/></a>




                <br></br><br></br><br></br><br></br>
                <h2>// currently:</h2>
                <ul>
                    <li>Analyzing healthcare data with machine learning at <a href="https://mydrugcosts.com/" target="_blank"><span id="green">myDrugCosts</span></a></li>
                    <li>Business development, marketing, and product design at <a href="https://www.capriforgirls.com/" target="_blank" ><span id="yellow">Capri for Girls</span></a></li>
                    <li>Creating a website for an optimization algorithm to help businesses reopen during COVID</li>
                    <li>Tech Lead at <a href="https://storeopenspace.com/" target="_blank"><span id="blue">OpenSpace Inc.</span></a>, a student-founded storage platform startup </li>
                    <li><a href="https://studentaffairs.duke.edu/ihouse/intl-undergraduate-students/your-ihops" target="_blank"><span id="red">Mentoring</span></a> and (virtually) welcoming international freshmen to Duke!</li>
                </ul>
                <br></br><br></br>
                <h2>// what I've done:</h2>
                <ul>
                    <li>pro-bono strategy consulting for <a href="https://smartsentry.ai/" target="_blank"><span id="yellow">Sentry AI</span></a></li>
                    <li>tech support for Duke students and faculty at the Link Service Desk</li>
                    <li>computer science + astrophysics research at the <a href="https://summerscience.org/" target="_blank"><span id="blue">Summer Science Program</span></a></li>
                </ul>
                <br></br><br></br>
                <h2>// ongoing + past projects</h2>
                <h3>WakeCareZ (ongoing)</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;Gen Z initiative furthering community and education in Wake County, NC.<br></br>
                    &nbsp;&nbsp;&nbsp;Built website in React, using Airtable API as a database.
                </p>
                <a href="https://howcanihelp.netlify.app/" target="_blank"><h3>Tech Volunteer Website</h3></a>
                <p>
                    &nbsp;&nbsp;&nbsp;Connecting 50+ nonprofit organizations and initiatives with tech volunteers.
                </p>
                <h3>Percolation Algorithm</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;Algorithm in Java estimating value of percolation threshold via Monte Carlo Simulation.
                </p>
                <h3>Orbital Determination</h3>
                <p>
                    &nbsp;&nbsp;&nbsp;Python program to calculate the orbital elements of asteroid 1627 Ivar.<br></br>
                    &nbsp;&nbsp;&nbsp;Published results in the Harvard-Smithsonian Minor Planet Center.
                </p>
                <br></br><br></br>
                <h2>🚧 full website under construction 🚧</h2>
            </div>
            </div>
            );
    }
}

export default Main;