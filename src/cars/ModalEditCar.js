import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import CarRepo from "../repository/CarRepo";
import ParkRepo from "../repository/ParkRepo";

const carId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

class ModalEditCar extends Component {
    //todo: props as default value

    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            model: "",
            year: "",
            description: "",
            park: [],
            image: [],
            allUsersParks: [],
            userId: localStorage.getItem("userId")
        }
    }

    async componentDidMount() {
        await ParkRepo
            .getAllParksByOwner(this.state.userId)
            .then((resp) => (
                this.setState({
                    allUsersParks: resp.data
                })
            ))

        await CarRepo
            .getCarById(carId)
            .then((resp) => (
                this.setState({
                    model: resp.data.model,
                    description: resp.data.description,
                    park: resp.data.park,
                    year: resp.data.year,
                    image: resp.data.image
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

        console.log(e.target);

    }

    onSubmit = async (e) => {
        e.preventDefault();
        let car = {
            id: carId,
            model: this.state.model,
            year: this.state.year,
            description: this.state.description,
            park: this.state.park,
            image: this.state.image
        }
        try {
            await CarRepo.updateCar(car);
            alert("Машина изменена!");
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        const parkList = this.state.allUsersParks.map(park => {
            return park.name === this.state.park
                ? (<option value={park.id} selected="selected"> {park.name}</option>)
                : (<option value={park.id}> {park.name}</option>);
        });

        return (
            <div>
                <Button
                    color="primary"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Редактировать машину
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        Редактирование
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="model">Модель</Label>
                                    <Input
                                        type="text"
                                        name="model"
                                        defaultValue={this.state.model}
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="year">Год выпуска</Label>
                                    <Input
                                        type="date"
                                        name="year"
                                        defaultValue={this.state.year}
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="description">Описание</Label>
                                    <Input
                                        type="text"
                                        name="description"
                                        defaultValue={this.state.description}
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="description">Выберите парк</Label>
                                    <Input
                                        type="select"
                                        name="park"
                                        onChange={this.onChange}>
                                        {
                                            parkList
                                        }
                                    </Input>

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
                                    >Редактировать</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalEditCar;