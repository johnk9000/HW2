import React from "react"
import "./style.css"

function Card(props) {
    return(
        <div class="row cardBody">
            <div class="col-md-3">
             <img src="Images\portrait.jpg" />
            </div>
            <div class="col-md-7">
            <p>
                {props.body}
              </p>
            </div>
        </div>
    )
}

export default Card