import React, {Component} from 'react';
import {Modal, ModalBody, ModalHeader} from "reactstrap";
import {Button} from "@material-ui/core";
import UserRepo from "../repository/UserRepo";

export default class DeleteUserModal extends Component {
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
        try {
            await UserRepo.deleteCurrentUser()
            window.location.href = '/'
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
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Удалить аккаунт
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        Вы уверены?
                        <ModalBody>
                                    <br/>
                                    <Button
                                        color="secondary"
                                        variant="outlined"
                                        onSubmit={false}
                                        onClick={this.onSubmit}
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Удалить</Button>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}
