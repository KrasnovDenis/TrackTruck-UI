import React, {Component} from 'react';
import {Button, Form, FormGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import CarRepo from "../repository/CarRepo";

class ModalDeleteCar extends Component {

    //todo: id from props
    state = {
        modal: false,
        id: ""
    }

    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }


    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});

    }

    onSubmit = async (e) => {
        e.preventDefault();
        const carId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        try {
            await CarRepo.deleteCarById(carId);
            alert("Машина удалена!");
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div>
                <Button
                    color="danger"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Удалить машину
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        Вы уверены?
                        <ModalBody  >
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>

                                    <br/>
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Удалить</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalDeleteCar;