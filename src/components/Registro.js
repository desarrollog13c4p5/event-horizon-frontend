
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Registro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            password: '',
            password2: '',
            error: 'Registro',
        }

        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="row pt-3">
                    <div className="col-sm-1 col-md-2 col-lg-4"></div>
                    <div className="col">
                        <h3 className="row">{this.state.error}</h3>
                        <form onSubmit={this.onSubmit}>
                            <div className="row pb-3">
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
                            <div className="row pb-1">
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
                            <div className="row pb-2">
                                <div className="input-group px-0">
                                    <span className="input-group-text ps-2 col-3">
                                        <strong>Verificar:</strong>
                                    </span>
                                    <input
                                        type="password"
                                        className="form-control"
                                        value={this.state.password2}
                                        onChange={this.onChangePassword2}
                                        required
                                    />
                                </div>
                            </div>
                            <div className="row pt-2">
                                <div className="col"></div>
                                <div className="col"></div>
                                <Link to={"/"} className="col">
                                    <button className="btn btn-secondary">
                                        Cancelar
                                    </button>
                                </Link>
                                <button className="col btn btn-primary" type="submit">
                                    Registrarse
                                </button>
                            </div>
                        </form>
                    </div>
                    <div className="col-sm-1 col-md-2 col-lg-4"></div>
                </div>
            </div >
        )
    }

    componentDidMount() {
        console.log(this.props);
    }

    onChangeUsuario(e) { this.setState({ usuario: e.target.value }) }
    onChangePassword(e) { this.setState({ password: e.target.value }) }
    onChangePassword2(e) { this.setState({ password2: e.target.value }) }

    onSubmit(e) {
        e.preventDefault();

        if (this.state.password === this.state.password2) {

            // Consumir API Registrar Usuario
            console.log('Registrando Usuario...');
            const errorRegistrando = false;

            if (errorRegistrando) {
                this.setState({
                    error: 'Error registrando usuario!'
                })
            } else {
                this.props.history.push('/login');
            }
        } else {
            this.setState({
                error: 'Password y verificar deben ser iguales!'
            })
        }
    }
}
