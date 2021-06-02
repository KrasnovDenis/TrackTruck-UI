import React, {Component} from 'react';
import {Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import CarRepo from "../repository/CarRepo";
import ParkRepo from "../repository/ParkRepo";
import {Button} from "@material-ui/core";

const carId = window.location.href.substring(window.location.href.lastIndexOf('/') + 1);

class ModalEditCar extends Component {
    constructor(props) {
        super(props);
        this.state = {
            modal: false,
            model: "",
            year: "",
            description: "",
            park: [],
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
                    torqueId: resp.data.torqueId,
                    stateNumber: resp.data.stateNumber,
                })
            ))
    }

    getParkIdByName(parkName) {
        for (let i = 0; i < this.state.allUsersParks.length; i++) {

            console.log(this.state.allUsersParks[i])
            if (this.state.allUsersParks[i].name === parkName) {
                return this.state.allUsersParks[i].id
            }
        }

        return parkName
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
        let parkId = this.getParkIdByName(this.state.park)
        let car = {
            id: carId,
            model: this.state.model,
            description: this.state.description,
            park: parkId,
            torqueId: this.state.torqueId,
            stateNumber: this.state.stateNumber,
        }
        try {
            await CarRepo.updateCar(car);
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {

        const parkList = this.state.allUsersParks.map(park => {
            return park.name === this.state.park.name
                ? (<option value={park.id} selected="selected"> {park.name}</option>)
                : (<option value={park.id}> {park.name}</option>);
        });

        return (
            <div>
                <Button
                    color="primary"
                    variant="outlined"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Редактировать
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



                                    <Label style={{marginTop: '2rem'}} for="torqueId">Torque ID (см в приложении
                                        Torque)</Label>
                                    <Input
                                        type="text"
                                        name="torqueId"
                                        defaultValue={this.state.torqueId}
                                        pattern="[a-z0-9]{32}"
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="description">Описание</Label>
                                    <Input
                                        type="text"
                                        name="description"
                                        defaultValue={this.state.description}
                                        pattern="[а-я][0-9]{3}[а-я]{2}[0-9]{2-3}"
                                        onChange={this.onChange}
                                    />

                                    <Label style={{marginTop: '2rem'}} for="stateNumber">Номерной знак</Label>
                                    <Input
                                        type="text"
                                        name="stateNumber"
                                        defaultValue={this.state.stateNumber}
                                        pattern="[а-я][0-9]{3}[а-я]{2}[0-9]{2-3}"
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

                                    <br/>
                                    <Button
                                        type="submit"
                                        color="primary"
                                        variant="outlined"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
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