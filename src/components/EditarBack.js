
import React, { Component } from 'react';
// import { Link } from "react-router-dom";

export default class Nuevo extends Component {
    constructor(props) {
        super(props)

        console.log(props);

        this.state = {
            usuario: '',
            auth: '',
            nombre: '',
            tipo: '',
            error: 'Editar Instrumento'
        }

        this.onChangeInstNombre = this.onChangeInstNombre.bind(this);
        this.onChangeInstTipo = this.onChangeInstTipo.bind(this);
        this.onSubmit = this.onSubmit.bind(this);
    }

    // Trae el Instrumento
    componentDidMount() {
        console.log('Trayendo Instrumento...');
        // Consumir API traer Instrumento

        // Simular traer elementos
        this.setState({
            nombre: 'test',
            tipo: '2'
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        console.log('Actualizando Instrumento...');
        // Consumir API adicionar instrumento

        // Simular Actualizar Instrumento en component Lista
        // this.props.crearInstrumento({
        //     nombre: this.state.nombre,
        //     tipo: this.state.tipo,
        // })
        const errorActualizando = false;

        this.setState({
            error: errorActualizando ? 'Error actualizando Instrumento!' : 'Editar Instrumento',
        })

        this.props.history.push('/');
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
                                // placeholder="Nombre"
                                required
                            />
                        </div>
                        <div className="col-5">
                            <input type="text"
                                className="form-control"
                                value={this.state.tipo}
                                onChange={this.onChangeInstTipo}
                                // placeholder="Tipo"
                                required
                            />
                        </div>
                        <div className="col-2 form-group p-0">
                            <button className="btn btn-primary" type="submit">
                                Actualizar
                            </button>
                        </div>
                    </div>
                </form>
            </div >
        )
    }

}