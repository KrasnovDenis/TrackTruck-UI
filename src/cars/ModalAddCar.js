import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import CarRepo from "../repository/CarRepo";
import ParkRepo from "../repository/ParkRepo";


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
            year: this.state.year,
            description: this.state.description,
            park: this.state.park.id,
            image: this.state.image
        }
        try {
            await CarRepo.createCar(car);
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
                    color="primary"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Добавить
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