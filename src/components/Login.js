
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
                <div className="row pt-3">
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                    <div className="col">
                        <h3 className="row">{this.state.error}</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="row pb-2">
                                <div className="input-group px-0">
                                    <span className="input-group-text ps-2 col-3">
                                        <strong>Usuario:</strong>
                                    </span>
                                    <input
                                        type="text"
                                        className="form-control"
                                        value={this.state.usuario}
                                        onChange={this.onChangeUsuario}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row pb-2">
                                <div className="input-group px-0">
                                    <span className="input-group-text ps-2 col-3">
                                        <strong>Password:</strong>
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={this.state.password}
                                        onChange={this.onChangePassword}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col"></div>
                                <div className="col"></div>
                                <Link to={"/registro"} className="col">
                                    <button className="btn btn-secondary">
                                        Registrarse
                                    </button>
                                </Link>
                                <button className="col btn btn-primary" type="submit">
                                    Ingresar
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-3"></div>
                </div>
            </div >
        )
    }

    componentDidMount() {
        console.log(this.props);
    }

    onChangeUsuario(e) { this.setState({ usuario: e.target.value }) }
    onChangePassword(e) { this.setState({ password: e.target.value }) }

    onSubmit(e) {
        e.preventDefault();

        // Consumir API Login Usuario
        console.log('Logeando Usuario...');
        const errorLogin = false;

        if (errorLogin) {
            this.setState({
                error: 'Usuario o password invalido!'
            })
        } else {
            // Guardar el Token
            localStorage.setItem("token", 'simulacionDeToken_' + this.state.usuario);
            localStorage.setItem("expire_at", Date.now() + 60);

            this.props.history.push('/lista');
        }
    }
}
