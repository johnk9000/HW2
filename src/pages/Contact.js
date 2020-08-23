import React, { useReducer, useRef } from "react";
import "./style.css"

function Contact() {
  const inputRef = useRef();

  const [contacts, dispatch] = useReducer((state, action) => { 
    switch (action.type) {
    case 'add':
          return [
              ...state,
        {
            id: Math.random(),
            name: action.name,
            person: "",
            role: "",
            image: "",
        }
          ]
        default:
            return state;
        }
}, [])
  
  const handleInputChange = e => {
    e.preventDefault();
    dispatch({
        type: 'add',
        name: inputRef.current.value
      });
      inputRef.current.value = '';
    }
  
    const handleSubmit = e => {
      e.preventDefault()
        console.log("submitting...")
      var nameField = document.querySelector(".name-input")
      var emailField = document.querySelector(".email-input")
      var gitField = document.querySelector(".git-input")
      nameField.value = ""
      emailField.value = ""
      gitField.value = ""
      // Add note that I will return their message
    }

  return(
    <div class="cardCont">
    <div class="row cardHead">
        <div class="col-md-12 contentCol" >
            <h1>Contact</h1>
        </div>
      </div>
      <div class="row cardBody">
      <div class="profiles">
      <a class="github-button" href="https://github.com/johnk9000" aria-label="Follow @johnk9000 on GitHub">Follow @</a>
      </div>
          <div class="col-md-12 formGroup">
            <form className="form">
              <input className="name-input"
                  name="person"
                  type="text"
                  placeholder="Name"
                  ref={inputRef}
                  value={contacts.name} 
                  onChange={handleInputChange}
              />
              <br></br>
              <input className="email-input"
                  name="email"
                  type="text"
                  placeholder="e-mail"
                  ref={inputRef}
                  value={contacts.name} 
                  onChange={handleInputChange}
              />
              <br></br>
              <input className="git-input"
                  name="image"
                  type="url"
                  placeholder="Github User"
                  ref={inputRef}
                  value={contacts.name} 
                  onChange={handleInputChange}
              />
              <br></br>
              <button onClick={handleSubmit}>Submit</button>
            </form>
          </div>
      </div>
  </div>
      )
  }

export default Contact;
