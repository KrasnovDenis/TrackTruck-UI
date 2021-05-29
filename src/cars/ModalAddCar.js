import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import CarRepo from "../repository/CarRepo";
import ParkRepo from "../repository/ParkRepo";
import {Button} from "@material-ui/core";

class ModalAddPark extends Component {


    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            model: "",
            year: "",
            description: "",
            park: [],
            img: [],
            userId: localStorage.getItem("userId"),
            parkId: window.location.href.substring(window.location.href.lastIndexOf('/') + 1)
        }

    }

    async componentDidMount() {
        await ParkRepo
            .getParkById(this.state.parkId)
            .then((resp) => (
                this.setState({
                    park: resp.data
                })
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
        let car = {
            model: this.state.model,
            description: this.state.description,
            park: this.state.park.id,
            stateNumber: this.state.stateNumber,
            torqueId: this.state.torqueId,
            image: this.state.image
        }
        try {
            await CarRepo.createCar(car);
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div>
                <Button
                    color="secondary"
                    variant="outlined"
                    onClick={this.toggle}>
                    Добавить машину
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="model">Модель</Label>
                                    <Input
                                        type="text"
                                        name="model"
                                        placeholder="Газ-66"
                                        onChange={this.onChange}
                                        required
                                    />

                                    <Label style={{marginTop: '2rem'}} for="year">Год выпуска</Label>
                                    <Input
                                        type="date"
                                        name="year"
                                        onChange={this.onChange}
                                        required
                                    />

                                    <Label style={{marginTop: '2rem'}} for="description">Описание</Label>
                                    <Input
                                        type="text"
                                        name="description"
                                        placeholder="Описание (необязательно)"
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="stateNumber">Номерной знак</Label>
                                    <Input
                                        type="text"
                                        name="stateNumber"
                                        placeholder="в777ор77"
                                        pattern="[а-я][0-9]{3}[а-я]{2}[0-9]{2-3}"
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="torqueId">Torque ID </Label>
                                    <Input
                                        type="text"
                                        name="torqueId"
                                        placeholder="находится в приложении"
                                        pattern="[a-z0-9]{32}"
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