
import React, { Component } from 'react';

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
        
        console.log('Creando Instrumento...');
        // Consumir API adicionar instrumento

        // Simular Crear Instrumento en component Lista
        this.props.crearInstrumento({
            nombre: this.state.nombre,
            tipo: this.state.tipo,
        })
        const errorCreando = false;

        this.setState({
            nombre: '',
            tipo: '',
            error: errorCreando ? 'Error creando Instrumento' : 'Nuevo Instrumento',
        })
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
