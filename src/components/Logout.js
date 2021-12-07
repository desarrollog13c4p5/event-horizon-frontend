
import { Component } from 'react';

export default class Logout extends Component {
    constructor(props) {
        super(props)

        this.state = {
            usuario: '',
        }
    }

    render() {
        return ('')
    }

    componentDidMount() {
        console.log(this.props);

        // Si existe token, lo borra
        if (localStorage.getItem('token')) {

            console.log('Borrando Token...');

            localStorage.removeItem('token');
            localStorage.removeItem('usuario');

            // Consumir API Logout
            console.log('Realizando Logout...');

            // Actualizar Usuario en NavBar
            this.props.clearUser();

        } else {
            console.log('No hay Token!');
        }

        this.props.history.push('/');
    }
}
