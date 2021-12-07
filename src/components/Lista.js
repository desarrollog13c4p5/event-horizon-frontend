
import React, { Component } from 'react';
import { Link } from "react-router-dom";
import axios from 'axios';

// Components
import Nuevo from "./Nuevo"

// Funcion q devuelve un instrumento a la lista
const Instrumento = props => (
    <tr>
        <td>{props.instrumento.nombre}</td>
        <td>{props.instrumento.tipo}</td>
        <td>
            <Link
                to={{
                    pathname: "/editar/" + props.instrumento._id,
                    state: {
                        nombre: props.instrumento.nombre,
                        tipo: props.instrumento.tipo,
                    }
                }}
            >
                <button className="btn btn-outline-secondary btn-sm">
                    Editar
                </button>
            </Link>
            <span> </span>
            <Link
                to={{
                    pathname: "/borrar/" + props.instrumento._id,
                    state: {
                        nombre: props.instrumento.nombre,
                        tipo: props.instrumento.tipo,
                    }
                }}
            >
                <button className="btn btn-outline-danger btn-sm">
                    Borrar
                </button>
            </Link>
        </td>
    </tr>
)

export default class Lista extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
            token: null,
            instrumentos: [],
            error: '',
        }
    }

    componentDidMount() {
        // Traer token
        const token = localStorage.getItem('token');
        console.log(token);

        if (token) {
            this.setState({ token: token });

            // Actualizar Usuario en NavBar
            this.props.setUser();
            this.traerLista();

        } else {
            console.log('Token no encontrado, redireccionando a Login...');
            this.props.history.push('/');
        }
    }

    actualizarLista() {
        console.log('actualizando lista...');
        console.log(this.state.instrumentos);
        return (
            this.state.instrumentos.map((instrumento, i) => (
                <Instrumento instrumento={instrumento} key={i} />
            ))
        )
    }

    traerLista() {
        // Consumir API traer lista de instrumentos
        console.log('trayendo lista...');
        axios
            // .get('http://localhost:4000/instrumentos/')
            .get('https://fierce-falls-83084.herokuapp.com/instrumentos/')
            .then((res) => {
                console.log(res.data);
                this.setState({
                    instrumentos: res.data,
                    error: 'Lista de instrumentos'
                })
            })
            .catch((error) => {
                console.log(error);
                this.setState({
                    error: 'Error obteniendo instrumentos!'
                })
            });
    }

    render() {
        return (
            <div className="container">
                <div className="row pb-3">
                    <Nuevo
                        error={'Nuevo Instrumento'}
                        traerLista={() => this.traerLista()}
                    />
                </div>
                <h5>Lista de Instrumentos</h5>
                <table className="table">
                    <thead>
                        <tr>
                            <th>Nombre</th>
                            <th>Tipo</th>
                            <th>Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.actualizarLista()}
                    </tbody>
                </table>
            </div >
        )
    }

}
