import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import ParkRepo from "../repository/ParkRepo";

class ModalRenamePark extends Component {

    state = {
        modal: false,
        name: "",
        cars:[],
        parkId: ""
    }

    async componentDidMount() {
        const parkId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1)

        await ParkRepo
            .getParkById(parkId)
            .then((resp) => (
                this.setState({
                    cars: resp.data.cars,
                    name: resp.data.name,
                    parkId: parkId})
            ))
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
        let park = {
            id: window.location.href.substring(window.location.href.lastIndexOf('/') + 1),
            name: this.state.name,
            owner: localStorage.getItem("userId"),
            cars: this.state.cars
        }
        try {
            await ParkRepo.updatePark(park);
            alert("Парк переименован!");
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
                    Редактировать
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        <ModalBody  >
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="name">Название</Label>
                                    <br/>
                                    <Input
                                        type="text"
                                        name="name"
                                        placeholder="Парк Иванова"
                                        onChange={this.onChange}
                                    />
                                    <br/>
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Отправить</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalRenamePark;