import React, { Component } from "react";
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button';
import axios from 'axios';



//multer

let fileStorageEngine = multer.diskStorage({
    destination: (req, file, cb) =>{
     cb(null, "defaultPublic/img/uploads")
    },
    filename:(req, file, cb) => {
        cb(null, Date.now() + "--" +file.originalname);
    },
    });



export default class CreateFormulario extends Component {

    constructor(props) {
        super(props)
        // Setting up functions

        this.onChangeInstrumentName = this.onChangeInstrumentName.bind(this);

        this.onChangeInstrumentPic = this.onChangeInstrumentPic.bind(this);

        this.onChangeStudentRollno = this.onChangeStudentRollno.bind(this);

        this.onSubmit = this.onSubmit.bind(this);

        // Setting up state
        this.state = {
            name: '',
            pic: '',
            rollno: ''
        }
    }

    onChangeInstrumentName(e) {
        this.setState({ name: e.target.value })
    }
    onChangeInstrumentPic(e) {
        this.setState({ pic: e.target.value })
    }
    onChangeStudentRollno(e) {
        this.setState({ rollno: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const instrumentoObject = {
            name: this.state.name,
            pic: this.state.pic,
            rollno: this.state.rollno
        };
             axios.post('http://localhost:4000/instrumentos/crear-instrumento', instrumentoObject)
            .then(res => console.log(res.data));

        this.setState({
            name: '',
            pic : '',
            rollno: ''
        });
    }

    render() {
        return (<div className="form-wrapper">
            <Form onSubmit={this.onSubmit} className="formulario-lista">
                
                <Form.Group controlId="Name">

                    <Form.Label>Name</Form.Label>

                    <Form.Control type="text" value={this.state.name} onChange={this.onChangeInstrumentName} />

                </Form.Group>

                <Form.Group controlId="Email" className="formulario2">

                    <Form.Label>Imagen</Form.Label>

                    <Form.Control type="file" value={this.state.pic} onChange={this.onChangeInstrumentPic} />
             

                </Form.Group>

                <Form.Group controlId="Name">
                    <Form.Label>Roll No</Form.Label>
                    
                    <Form.Control type="text" value={this.state.rollno} onChange={this.onChangeStudentRollno} />
                </Form.Group>

                <Button variant="danger" size="lg" block="block" type="submit" className="Boton">
                    Create Student
                </Button>
            </Form>
        </div>);
    }
}
