import React from "react";
import Card from "../components/Card"
import "./style.css"

function Proj() {
  
  function expand(e) {
    e.prevent.default()
    const expand = document.querySelector("#expand")
  }

  return(
    <div class="cardProj">
    <div class="row cardHead">
        <div class="col-md-12 contentCol" >
            <h1>Portfolio</h1>
        </div>
      </div>
      <div class="row cardBody">
            <div class="col-md-12">
              <div class="project-pane windy-weather">
              <img src="https://drive.google.com/uc?id=1Zz1mIRAfdLKT0EcR1yDbj2QboE6I_9k9"/>
              <h2>Windy Weather Dashboard</h2>
            <p>This weather dashboard features an interactive map (with wind current data) that is powered by <a href="https://api.windy.com/map-forecast/docs">Windy</a>.<br></br> Future revisions will allow semi-transparent overlays from <a href="https://webapiv2.navionics.com/">Navionics</a> to extend the utility of the app for off-shore fishing.</p>
            <a class="github-button proj-btn" href="https://github.com/johnk9000/HW6_Digital-Dash_JK" aria-label="Go to @johnk9000's repo on GitHub">See Repo</a>
             <br></br>
              <a href="https://johnk9000.github.io/HW6_Digital-Dash_JK/">Demo Weather Dashboard</a>
               </div>
               <div class="project-pane quiz">
                 <img id="intro" src="https://drive.google.com/uc?id=19wRX7GJB7gZntxnUqpsk9Lx1qvnYHeND"/>
                 <h2>Math & Medical Terms Quizzes</h2>
            <p>Try either of the two quizzes featured!<br></br> The <strong>Pell's (Diophantine) Equation quiz</strong> is a great way to hone your geometric intuition while the <strong>medical terms quiz</strong> is great for healthcare workers needing to memorize the hundreds of acronyms that are commonly used in the industry.</p>
            <a class="github-button proj-btn" href="https://github.com/johnk9000/HW4-Quizzle-JK" aria-label="Go to @johnk9000's repo on GitHub">See Repo</a>
            <br></br>
              <a href="https://johnk9000.github.io/Diophantine-Eqn-Quiz">Try the Diophantine Quiz</a> <br></br>
              <a href="https://johnk9000.github.io/kates-quiz">or a Medical Terminology Quiz</a>
               </div>
               <div class="project-pane employee-tracker">
                <div class="construction"><h3>UNDER CONSTRUCTION</h3>
               <iframe src="https://giphy.com/embed/l0HlxToy3VhOg0DRe"></iframe></div>
               <h2>Gardening App</h2>
               <p>A bunch of my friends picked up gardening so I bought a bunch of <a href="https://www.arduino.cc/">Arduinos</a> and various sensors off e-bay for gardening. Going to build a dashboard to keep track of things like soil pH, sunshine, etc. </p>
              <a href="#">Plant Tracking App</a>
               </div>
               <div class="project-pane simple">
                 <h3> Applets </h3><br></br>
                  <a href="johnk9000.github.io/HW5-Planner-JK/">Simple Planner</a>
                  <a href="https://note-taker-johnk9000.herokuapp.com/">Simple Note Taker</a>
                  <a href="https://budget-tracker-jk.herokuapp.com/">Simple Budget Tracker</a>
                  <br></br>
               </div>
            </div>
        </div>
  </div>

      )
  }

export default Proj;
