import React, {Component} from "react";
import {Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import UserRepo from "../repository/UserRepo";
import {Button} from "@material-ui/core";


class ForgotPassword extends Component{
    constructor(props) {
        super(props);

        this.state = {
            modal: false,
            email: "",
        }

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
        e.preventDefault()
        const email = this.state.email;
        console.log(email);
        try {
            await UserRepo.forgotPassword(email)
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
                    Забыли пароль
                </Button>
                <Modal style={{width: "360px"}}
                       isOpen={this.state.modal}
                       toggle={this.toggle}>
                    <ModalHeader style={{width: "330px"}} toggle={this.toggle}>
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    Укажите email и следуйте инструкциям из письма
                                    <Label style={{marginTop: '2rem'}} for="email">Email</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="Example@mail.com"
                                        onChange={this.onChange}
                                        required
                                    />
                                    <br/>
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Отправить сообщение</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default ForgotPassword;
