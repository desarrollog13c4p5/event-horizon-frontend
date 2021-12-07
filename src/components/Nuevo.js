
import React, { Component } from 'react';
import axios from 'axios';

export default class Nuevo extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            auth: '',
            nombre: '',
            tipo: '',
            error: 'Nuevo Instrumento'
        }

        this.onChangeInstNombre = this.onChangeInstNombre.bind(this);
        this.onChangeInstTipo = this.onChangeInstTipo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    onSubmit(e) {
        e.preventDefault();
        
        // Consumir API crear instrumento
        console.log('Creando Instrumento...');
        axios
            // .post('http://localhost:4000/instrumentos/crear', {
            .post('https://fierce-falls-83084.herokuapp.com/instrumentos/crear', {
                nombre: this.state.nombre,
                tipo: this.state.tipo,
            })
            .then((res) => {
                this.setState({
                    error: 'Nuevo Instrumento',
                    nombre: '',
                    tipo: '',
                });
                this.props.traerLista();
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: 'Error creando Instrumento!'
                });
            });
    }

    onChangeInstNombre(e) { this.setState({ nombre: e.target.value }) }
    onChangeInstTipo(e) { this.setState({ tipo: e.target.value }) }

    render() {
        return (
            <div className="container">
                <h5>{this.state.error}</h5>
                <form onSubmit={this.onSubmit}>
                    <div className="row">
                        <div className="col-5">
                            <input type="text"
                                className="form-control"
                                value={this.state.nombre}
                                onChange={this.onChangeInstNombre}
                                placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="col-5">
                            <input type="text"
                                className="form-control"
                                value={this.state.tipo}
                                onChange={this.onChangeInstTipo}
                                placeholder="Tipo"
                                required
                            />
                        </div>
                        <div className="col-2 form-group p-0">
                            <button className="btn btn-primary" type="submit">
                                Crear
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }

}
