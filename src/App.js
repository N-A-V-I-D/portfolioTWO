import './App.css';
import './bounce.css';
import './contact.css'
import './circles.css'
import Sidebar from './Navbar';
import Skateboard from './Skateboard';
// import TemporaryDrawer from './MobileNav.tsx';
import { MuiDrawer } from './MobileNav.tsx';
import React, {Component, useEffect, useState, useRef} from 'react';
import Typewriter from "typewriter-effect";
import $ from 'jquery'
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import SkateboardingIcon from '@mui/icons-material/Skateboarding';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import Button from '@mui/material/Button';
import { TextField } from '@material-ui/core';
import Aos from "aos";
import { send} from 'emailjs-com'
import "aos/dist/aos.css";
import emailjs from '@emailjs/browser'
import kbd from 'keyboard-css'
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import configData from './config.json'

function App() {
  useEffect(() =>{
    Aos.init(); 
  }, [])
  const form = useRef();
  const firstName = useRef(null);
  const lastName = useRef(null);
  const email = useRef(null);
  const phone = useRef(null);
  const message = useRef(null);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm(configData.one, configData.two, form.current, configData.three)
      .then((result) => {
          console.log(result.text);
          firstName.current.value = '';
          lastName.current.value = '';
          email.current.value = '';
          phone.current.value = '';
          message.current.value = '';




      }, (error) => {
          console.log(error.text);
      });
  };

return (
<>
<link rel="stylesheet" href="https://unpkg.com/aos@next/dist/aos.css" />

<div id='everything'>
<div class="area" >
            <ul class="circles">
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
                    <li></li>
            </ul>
    </div >
  <div> <Sidebar/></div>
  {/* <div><MuiDrawer/></div> */}
  <div id='everything2'>
  <div id='intro'>
    <div id='name'>
      <div className="bouncing-text">
        <div className="b">h</div>
        <div className="o">i</div>
        <div className="u">,</div>
      </div>
      <div className="bouncing-text">
        <div className="b">i</div>
        <div className="o">'</div>
        <div className="u">m</div>
        <div className="n"></div>
        <div className="c">N</div>
        <div className="e">a</div>
        <div className="f">v</div>
        <div className="g">i</div>
        <div className="h">d</div>
      </div>
    </div>

    
  </div>


  <div id='aboutMe' >
    <div id='left'>
    <div id='background'>
      <div id='content'>Me</div>
    </div>
    <div id='type'>
    <Typewriter 
    onInit={(typewriter)=> {
    typewriter
    .typeString("Who Am I?")
    .start();
    }
    }
    />
    </div>
    <div id='thing'>
      <div id='text' data-aos="fade-down " data-aos-delay="100">
        <h3>I'm Navid, an undergraduate Computer Science & Web Development student at NYU. My hobbies include staying up late playing games, watching shows and anime, and skateboarding.</h3>
      </div>

      
    </div>
  
    </div>
    <div id='pics'>
        <div>
          <button data-aos="fade-down " data-aos-delay="200" id='button' class="kbc-button kbc-button-lg">W</button>
        </div>
        <div>
          <button  data-aos="fade-down " data-aos-delay="300" class="kbc-button kbc-button-lg">A</button>
          <button  data-aos="fade-down " data-aos-delay="400" class="kbc-button kbc-button-lg">S</button>
          <button  data-aos="fade-down " data-aos-delay="500" class="kbc-button kbc-button-lg">D</button>
        </div>
      </div>
  </div>


  <div  id='skills' >
  <div id='background'>
    <div id='content2'>Skills</div>
    </div>
    <div id='type'>
    <Typewriter
    onInit={(typewriter)=> {
    typewriter
    .typeString("Some Things I Know")
    .start();
    }
    }
    />
    </div>
    <div id='skillsList'>
      <div id='coding'>
        <div data-aos="fade-down " data-aos-delay="300">Python</div> 
        <div data-aos="fade-down" data-aos-delay="400">Java</div>
        <div data-aos="fade-down" data-aos-delay="500">Javascript</div>
        <div data-aos="fade-down" data-aos-delay="600">NodeJS</div>
        <div data-aos="fade-down" data-aos-delay="700">React</div>
        <div data-aos="fade-down" data-aos-delay="800">HTML</div>
        <div data-aos="fade-down" data-aos-delay="900">CSS</div>
        <div data-aos="fade-down" data-aos-delay="1000">Swift</div>
        <div data-aos="fade-down" data-aos-delay="1100">LaTex</div>
      </div>
      <div id='cloud' data-aos="fade-right">
        {/* <Button variant="contained" fontSize="5px" startIcon={<KeyboardArrowDownIcon />}></Button> */}
        <div data-aos="fade-down " data-aos-delay="300">AWS</div>
        <div data-aos="fade-down" data-aos-delay="400">DynamoDB</div>
        <div data-aos="fade-down" data-aos-delay="500">Lambda</div>
        <div data-aos="fade-down" data-aos-delay="600">Cloudwatch</div>
        <div data-aos="fade-down" data-aos-delay="700">S3</div>
        <div data-aos="fade-down" data-aos-delay="800">API Gateway</div>
        <div data-aos="fade-down" data-aos-delay="900">AWS Amplify</div>
        <div data-aos="fade-down" data-aos-delay="1000">EC2</div>
        <div data-aos="fade-down" data-aos-delay="1100">ECR</div>
        <div data-aos="fade-down" data-aos-delay="1200">ECS</div>
      </div>
      <div id='other' data-aos="fade-right" >
        <div data-aos="fade-down " data-aos-delay="300">Squarespace</div>
        <div data-aos="fade-down " data-aos-delay="400">Xcode</div>
        <div data-aos="fade-down " data-aos-delay="500">Overleaf</div>
        <div data-aos="fade-down " data-aos-delay="600">Autodesk Inventor</div>
        <div data-aos="fade-down " data-aos-delay="700">Adobe Photoshop</div>
        <div data-aos="fade-down " data-aos-delay="800">Adobe Illustrator</div>
        <div data-aos="fade-down " data-aos-delay="900">Adobe InDesign</div>
      </div> 
    </div>
  </div>

  <div id='contactMe' >
  <div id='background'>
    <div id='content3'>Contact Me</div>
    </div>
    <div id='zind'>
    <div id='type'>
    <Typewriter
    onInit={(typewriter)=> {
    typewriter
    .typeString("Let's Connect!")
    .start();
    }
    }
    />
  </div>
    
      <div id='contactForm'>
        <form id='form2' ref={form} onSubmit={sendEmail}>
        <div data-aos="fade-down " data-aos-delay="200">
          <input  type='text' id='firstName' ref={firstName} placeholder='First Name' required></input>
        </div>
        <div data-aos="fade-down " data-aos-delay="300">
          <input type='text' id='lastName' ref={lastName} placeholder='Last Name'   required></input>
        </div>
        <div data-aos="fade-down " data-aos-delay="400">
          <input type='email' id='email' ref={email} placeholder='Email'  required></input>
        </div>
        <div data-aos="fade-down " data-aos-delay="500">
          <input type='text' id='phone' ref={phone} placeholder='Phone Number'  required></input>
        </div>
        <div data-aos="fade-down " data-aos-delay="600">
          <textarea id='message' ref={message} placeholder='Message'  required></textarea>
        </div>
        <div data-aos="fade-down " data-aos-delay="700">
          <button id='butt' type='submit' value='send'>Send</button>
        </div>
        </form>
      </div>

  </div>
  </div>
  <div id='importantLinks'>
  <Button id='things3'
        variant="link"
        color=""
        startIcon={< LinkedInIcon style={{ fontSize: 40 }}/>}
        href="https://www.linkedin.com/in/navid-c/"
        target="_blank" rel="noopener noreferrer"
      />
      <Button id='things3'
        variant="link"
        color=""
        startIcon={< GitHubIcon style={{ fontSize: 40 }}/>}
        href="https://github.com/N-A-V-I-D"
        target="_blank" rel="noopener noreferrer"
      />
  </div>
  </div>
  </div>
</>
  
  );

}




export default App;




