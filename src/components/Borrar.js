
import React, { Component } from 'react';
import { Link } from "react-router-dom";

export default class Borrar extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            token: null,
            error: 'Borrar Instrumento',
        }

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
                            <div className="input-group px-0">
                                <span className="input-group-text ps-2 col-3">
                                    <strong>Nombre:</strong>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.props.location.state.nombre}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row pb-2">
                            <div className="input-group px-0">
                                <span className="input-group-text ps-2 col-3">
                                    <strong>Tipo:</strong>
                                </span>
                                <input
                                    type="text"
                                    className="form-control"
                                    value={this.props.location.state.tipo}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div className="row pt-2">
                            <div className="col"></div>
                            <div className="col"></div>
                            <Link to={"/lista"} className="col">
                                <button className="btn btn-secondary">
                                    Cancelar
                                </button>
                            </Link>
                            <button className="col btn btn-danger" type="submit">
                                Borrar
                            </button>
                        </div>
                    </form>
                </div>
                <div className="col-sm-2 col-lg-4"></div>
            </div >
        )
    }

    componentDidMount() {
        console.log(this.props);

        // Traer token
        const token = localStorage.getItem('token');
        this.setState({ token: token });
    }

    onSubmit(e) {
        e.preventDefault();

        // Consumir API Borrar instrumento
        console.log('Borrando Instrumento...');
        const errorBorrando = false;

        if (errorBorrando && this.state.token) {
            this.setState({
                error: 'Error Borrando Instrumento!'
            })
        } else {
            this.props.history.push('/lista');
        }
    }
}
