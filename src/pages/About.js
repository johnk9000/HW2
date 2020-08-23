import React from "react";
import "./style.css"

function About(props) {
  
  
  return(
  <div class="wrapper">
      <div class="cardCont">
      <div class="row cardHead">
            <h1>About</h1>
      </div>
      <div class="row cardBody">
            <div class="col-md-3">
             <img src="Images\portrait.jpg" />
             <a class="github-button" href="https://github.com/johnk9000" aria-label="Follow @johnk9000 on GitHub">Follow @johnk9000</a>
            </div>
            <div class="col-md-8">
            <p> Freshly minted full-stack developer with five years industry experience in Solutions Architecture! UT Austin Alumni <br></br><br></br>Feel free to visit my github and linked in or send me an <a href="mailto:johnk9000@gmail.com">e-mail</a> to learn more about me.</p>
            </div>
        </div>
      </div>
  </div>
    )
}

export default About;