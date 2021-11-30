
import React, { Component } from 'react';
import { Link } from "react-router-dom";

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
                    pathname: "/editar/" + props.instrumento.id,
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
                    pathname: "/borrar/" + props.instrumento.id,
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
        this.setState({ token: token });

        // Consumir API traer lista de instrumentos
        console.log('trayendo lista...');
        // axios
        //     .get('ruta_al_backend')
        //     .then((res) => {
        //         console.log(res.data);
        //         this.setState({
        //             instrumentos: res.data
        //         })
        //     })
        //     .catch((error) => {
        //         console.log(error);
        //         this.setState({
        //             error: 'Error obteniendo la lista'
        //         })
        //     });

        // Simular traer elementos
        this.setState({
            instrumentos: [
                { id: 1, nombre: 'test1', tipo: '1' },
                { id: 1, nombre: 'test2', tipo: '2' },
            ],
        })
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

    // Unicamente para pruebas
    crearInstrumento(instrumento) {
        const id = this.state.instrumentos.slice(-1)[0].id;
        const instrumentos = this.state.instrumentos.slice();

        this.setState({
            instrumentos: instrumentos.concat({
                id: id + 1,
                nombre: instrumento.nombre,
                tipo: instrumento.tipo,
            }),
        })
    }

    render() {
        return (
            <div className="container">
                <div className="row pb-3">
                    <Nuevo
                        error={'Nuevo Instrumento'}
                        crearInstrumento={(inst) => this.crearInstrumento(inst)}
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
