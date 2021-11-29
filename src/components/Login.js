
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Login extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            password: '',
            error: 'Bienvenido',
        }

        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="col-sm-2 col-lg-4"></div>
                <div className="col-sm-8 col-lg-4">
                    <h3 className="row">{this.state.error}</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="row pb-2">
                            <input type="text"
                                className="form-control"
                                value={this.state.usuario}
                                onChange={this.onChangeUsuario}
                                placeholder='Usuario'
                                required
                            />
                        </div>
                        <div className="row pb-3">
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                placeholder="Password"
                                required
                            />
                        </div>
                        <div className="row">
                            <Link to={"/registro"} className="col ps-0">
                                <button className="btn btn-outline-secondary">
                                    Registrarse
                                </button>
                            </Link>
                            <div className="col"></div>
                            <button className="col btn btn-primary px-0" type="submit">
                                Ingresar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-2 col-lg-4"></div>
            </div >
        )
    }

    onChangeUsuario(e) { this.setState({ usuario: e.target.value }); }
    onChangePassword(e) { this.setState({ password: e.target.value }); }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ error: 'Ingresando...' })

        // Validacion de Credenciales
        if (this.state.password === '1234') {
            // // Reset State
            // this.setState = {
            //     usuario: '',
            //     password: '',
            //     error: 'Bienvenido a eventHorizont',
            // }

            // Redireccionar al componente Lista
            this.props.history.push('/lista');

        } else {    // Pass Invalido
            this.setState({ error: 'Usuario o password invalido!' })
        }
    }
}
