import React, {Component} from 'react';
import {Button, Form, FormGroup, Input, Label, Modal, ModalBody, ModalHeader} from "reactstrap";
import LoginRepo from "../repository/LoginRepo";

class Registration extends Component {

    state = {
        modal: false,
        firstName: "",
        lastName: "",
        email: "",
        password: ""
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

    onSubmit = (e) => {
        e.preventDefault();
        let user = {
            email: this.state.email,
            password: this.state.password,
            firstName: this.state.firstName,
            lastName: this.state.lastName,
            createTime: Date.now().toString(10)
        }

        LoginRepo.registration(user).then(r => function () {
            if (r.status === 200) {
                alert("Регистрация прошла успешно!");
                window.location.href = '/login';
            } else {
                alert("Проверьте введенные параметры");
            }
        })
    }

    render() {
        return (
            <div>
                <Button
                    color="dark"
                    style={{marginBottom: '2rem'}}
                    onClick={this.toggle}>
                    Регистрация
                </Button>
                <Modal
                    isOpen={this.state.modal}
                    toggle={this.toggle}>
                    <ModalHeader toggle={this.toggle}>
                        Поля помеченные * обязательны
                        <ModalBody>
                            <Form
                                onSubmit={this.onSubmit}>
                                <FormGroup>
                                    <Label style={{marginTop: '2rem'}} for="firstName">Имя*</Label>
                                    <Input
                                        type="text"
                                        name="firstName"
                                        placeholder="Иван"
                                        onChange={this.onChange}
                                    />
                                    <Label style={{marginTop: '2rem'}} for="lastName">Фамилия*</Label>
                                    <Input
                                        type="text"
                                        name="lastName"
                                        placeholder="Иванов"
                                        onChange={this.onChange}
                                    />
                                    <Label style={{marginTop: '2rem'}} for="email">Email*</Label>
                                    <Input
                                        type="email"
                                        name="email"
                                        placeholder="example@mail.ru"
                                        onChange={this.onChange}
                                    />
                                    <Label style={{marginTop: '2rem'}} for="password">Пароль*</Label>
                                    <Input
                                        type="password"
                                        name="password"
                                        placeholder="password"
                                        onChange={this.onChange}
                                    />
                                    <Button
                                        type="submit"
                                        isOpen={this.state.modal}
                                        toggle={this.toggle}
                                        block
                                    >Зарегистрироваться</Button>
                                </FormGroup>
                            </Form>
                        </ModalBody>
                    </ModalHeader>
                </Modal>
            </div>
        );
    }
}

export default Registration;