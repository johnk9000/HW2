import './App.css';
import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Nav from "./components/Nav";
import Wrapper from "./components/Wrapper"
import About from "./pages/About"
import Contact from "./pages/Contact"
import Proj from "./pages/Proj"

function App() {
    return (
      <Router>
    <Wrapper>
        <Nav/>
        <Route exact path="/" component={About} />
        <Route exact path="/about" component={About} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/proj" component={Proj} />
    </Wrapper>
    </Router>
    )
}

export default App;