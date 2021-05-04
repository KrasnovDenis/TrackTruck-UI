import React, {Component} from "react";
import {Button, Form, FormGroup, Modal, ModalBody, ModalHeader} from "reactstrap";
import ParkRepo from "../repository/ParkRepo";
import DeleteIcon from "@material-ui/icons/Delete";

class ModalDeletePark extends Component {

    constructor(props) {
        super(props);
        this.state = {
            modal: false
        }
    }


    toggle = () => {
        this.setState({
            modal: !this.state.modal
        });
    }

    onSubmit = async (e) => {
        e.preventDefault();
        try {
            await ParkRepo.deletePark(this.props.parkId);
            alert("Парк удален!");
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    render() {
        return (
            <div>
                <DeleteIcon onClick={this.toggle}/>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <h3>Вы уверены?</h3>
                                    <br/>
                                    <Button
                                        type="submit"
                                        color="danger"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Удалить парк</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ModalDeletePark;