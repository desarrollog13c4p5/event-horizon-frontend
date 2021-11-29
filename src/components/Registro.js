
import React, { Component } from 'react';

export default class Registro extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            password: '',
            password2: '',
            error: 'Registrarse en eventHorizont'
        }

        this.onChangeUsuario = this.onChangeUsuario.bind(this);
        this.onChangePassword = this.onChangePassword.bind(this);
        this.onChangePassword2 = this.onChangePassword2.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    render() {
        return (
            <div className="container">
                <div className="colsm-2 col-lg-4"></div>
                <div className="col-sm-8 col-lg-4">
                    <br></br>
                    <h3>{this.state.error}</h3>
                    <form onSubmit={this.onSubmit}>
                        <div className="form-group">
                            <label>Usuario: </label>
                            <input type="text"
                                className="form-control"
                                value={this.state.usuario}
                                onChange={this.onChangeUsuario}
                                required
                            />
                        </div>
                        <div className="form-group">
                            <label>Password: </label>
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.password}
                                onChange={this.onChangePassword}
                                required
                            />
                            <label>Repetir password: </label>
                            <input
                                type="password"
                                className="form-control"
                                value={this.state.password2}
                                onChange={this.onChangePassword2}
                                required
                            />
                        </div>
                        <br></br>
                        <div className="container">
                            <div className="row from-group">
                                <button className="col btn btn-primary" type="submit">
                                    Registrarse
                                </button>
                                <div className="col"></div>
                                <a className="col btn btn-outline-secondary" href="/">
                                    Inicio
                                </a>
                            </div>
                        </div>
                    </form>
                </div>
                <div className="col-sm-2 col-lg-4"></div>
            </div >
        )
    }

    onChangeUsuario(e) { this.setState({ usuario: e.target.value }); }
    onChangePassword(e) { this.setState({ password: e.target.value }); }
    onChangePassword2(e) { this.setState({ password2: e.target.value }); }

    onSubmit(e) {
        e.preventDefault();

        this.setState({ error: 'Registrando...' })

        // Validacion de Credenciales
        if (this.state.password === this.state.password2) {
            this.props.history.push('/lista');  // Redireccionar al componente Lista

        } else {    // Pass Invalido
            this.setState({ error: 'Los passwords deben ser iguales!' })
        }
    }
}
