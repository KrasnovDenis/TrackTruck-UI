import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import ParkRepo from "../repository/ParkRepo";
import EditIcon from '@material-ui/icons/Edit';

class ModalRenamePark extends Component {

    state = {
        modal: false,
        name: "",
        cars:[],
        parkId: ""
    }

    async componentDidMount() {
        const parkId = this.props.park.id

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
            id: this.props.park.id,
            name: this.state.name,
            owner: localStorage.getItem("userId"),
            cars: this.state.cars
        }
        try {
            await ParkRepo.updatePark(park);
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div style={{display:"inline"}}>
                <EditIcon onClick={this.toggle}/>
                <Modal style={{width: "370px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "350px", height:"250px"}} toggle={this.toggle}>
                        <ModalBody>
                            <Form
                                style={{width: "280px"}}
                                onSubmit={this.onSubmit}>
                                <FormGroup >
                                    <Label style={{marginTop: '2rem'}} for="name">Название</Label>
                                    <br/>
                                    <Input
                                        type="text"
                                        name="name"
                                        defaultValue={this.props.park.name}
                                        onChange={this.onChange}
                                    />
                                    <br/>
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Переименовать</Button>
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