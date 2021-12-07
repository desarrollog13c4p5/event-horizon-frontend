
// View Framework
import React, { Component } from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

// Estilos
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css"

// Componentes
import Login from "./components/Login";
import Logout from "./components/Logout";
import Registro from "./components/Registro";
import Lista from "./components/Lista";
import Editar from "./components/Editar";
import Borrar from "./components/Borrar";


class App extends Component {

  setUser() {
    const user = localStorage.getItem('usuario');

    console.log(user);
    const userText = user.toLocaleUpperCase() + ' [ Logout ]';
    document.getElementById("user").innerHTML = userText;
  }

  clearUser() {
    document.getElementById("user").innerHTML = '';
  }

  render() {
    return (
      <Router>
        <div className="App">
          <header className="App-header">
            <Navbar bg="dark" variant="dark">
              <Container>
                <Navbar.Brand className="pt-0 pb-0">
                  <h5>Event Horizon</h5>
                </Navbar.Brand>
                <Nav className="justify-content-end pb-0">
                  <Link to={'/logout'} className="nav-link">
                    <span id="user"></span>
                  </Link>
                </Nav>
              </Container>
            </Navbar>
          </header>

          <Container>
            <Row>
              <Col md={12}>
                <div className="wrapper pt-2">
                  <Switch>
                    <Route path="/" exact render={
                      props => <Login {...props} setUser={this.setUser} />
                    } />
                    <Route path="/registro" render={
                      props => <Registro {...props} setUser={this.setUser} />
                    } />
                    <Route path="/logout" render={
                      props => <Logout {...props} clearUser={this.clearUser} />
                    } />
                    <Route path="/lista" render={
                      props => <Lista {...props} setUser={this.setUser} />
                    } />
                    <Route path="/editar/:id" render={
                      props => <Editar {...props} setUser={this.setUser} />
                    } />
                    <Route path="/borrar/:id" render={
                      props => <Borrar {...props} setUser={this.setUser} />
                    } />
                  </Switch>
                </div>
              </Col>
            </Row>
          </Container>
        </div>
      </Router>
    );
  }
}

export default App;
