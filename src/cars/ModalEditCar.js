import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import ParkRepo from "../repository/ParkRepo";

class ModalAddPark extends Component {
    //todo: props as default value
    state = {
        modal: false,
        model: "",
        year: "",
        img: []
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
        let car = {
            name: this.state.name,
            owner: localStorage.getItem("userId")
        }
        try {
            await ParkRepo.createPark(car);
            alert("Машина добавлена!");
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Добавить машину
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        <ModalBody  >
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="model">Модель</Label>

                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Газ-66"
                                        pattern="^[a-zA-Z0-9_ ]{3,50}"
                                        onChange={this.onChange}
                                    />
                                    <Label style={{marginTop: '2rem'}} for="description">Описание</Label>

                                    <Input
                                        type="text"
                                        name="description"
                                        placeholder="Описание (необязательно)"
                                        pattern="^[a-zA-Z0-9_ ]{3,50}"
                                        onChange={this.onChange}
                                    />
                                    <Label style={{marginTop: '2rem'}} for="image">Картинка</Label>
                                    <Input
                                        type="file"
                                        name="image"
                                        onChange={this.onChange}
                                    />
                                    <br/>
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Добавить машину</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalAddPark;