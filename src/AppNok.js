
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
import Registro from "./components/Registro";
import Lista from "./components/Lista";
import Nuevo from "./components/Nuevo";
import Editar from "./components/Editar";
import Borrar from "./components/Borrar";


// 
class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          {/* <Container> */}
          <Switch>
            {/* <Container> */}
              <Route path="/" exact component={Login} />
              <Route path="/registro" component={Registro} />
            {/* </Container> */}
            <div>
              <header className="App-header">
                <Navbar bg="dark" variant="dark">
                  <Container>
                    <Navbar.Brand>
                      <Link to={"/lista"} className="nav-link pb-0">
                        Event Horizon
                      </Link>
                    </Navbar.Brand>

                    <Nav className="justify-content-end">
                      {/* <Nav>
                              <Link to={"/nuevo"} className="nav-link">
                                Nuevo
                              </Link>
                            </Nav> */}
                    </Nav>
                  </Container>
                </Navbar>
              </header>
              <Container>
                <Row>
                  <Col md={12}>
                    <div className="wrapper pt-2 px-0 mx-0">
                      <Route path="/lista" component={Lista} />
                      <Route path="/nuevo" component={Nuevo} />
                      <Route path="/editar/:id" component={Editar} />
                      <Route path="/borrar/:id" component={Borrar} />
                    </div>
                  </Col>
                </Row>
              </Container>
            </div>
          </Switch>
          {/* </Container> */}
        </div>
      </Router>
    );
  }
}

export default App;
