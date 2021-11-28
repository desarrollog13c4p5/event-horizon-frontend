import React from "react";

//Importación de funcionalidades Boostrap
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";    
import "bootstrap/dist/css/bootstrap.css";

import "./App.css";


import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";


import CreateFormulario from "./components/formularioInicial.component.js";


function App() {

  return (
  <Router>  
    <div className="App">
      <header className="App-header">
        <Navbar bg="dark" variant="dark">
          <Container>
            <Navbar.Brand>
              <Link to={"/"} className="nav-link">
                React MERN Stack App    
              </Link> 
            </Navbar.Brand>

            <Nav className="justify-content-end">
              <Nav>

                <Link to={"/create-formulario"} className="nav-link"> 
                  Ejemplo Formulario
                </Link> 
                
              </Nav>

              {/* <Nav>
                <Link to={"/edit-student/:id"} className="navlink">
                  Edit Student
                    </Link>
              </Nav> */}
            </Nav>
          </Container>
        </Navbar>
      </header>
            

              
      <Container>
        <Row>
          <Col md={12}>
            <div className="wrapper">
              <Switch>
                
                <Route exact path='/' />
                <Route path="/create-formulario" component={CreateFormulario} />

              </Switch>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  
  </Router>)

}
export default App; 