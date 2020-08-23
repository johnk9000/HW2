import React from "react"

function Header(props) {
    return(
        <div class="row cardHead">
        <div class="col-md-12 contentCol" >
            <h1>{props.header}</h1>
        </div>
        </div>
    )
}

export default Header