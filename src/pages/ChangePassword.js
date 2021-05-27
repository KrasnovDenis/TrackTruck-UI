import React, {Component} from "react";

import '../style/pages/login.css';
import UserRepo from "../repository/UserRepo";
import {Button} from "@material-ui/core";


class ChangePassword extends Component {

    constructor(props) {
        super(props);
        this.state = {
            password: "",
            confirmPassword: ""
        }
    }

    onSubmit = async () => {
        if (this.state.password !== this.state.confirmPassword) {
            alert("Пароли не совпадают")
        }

        if (!this.state.password) {
            alert("Пароль пустой")
        }

        const url = new URL(window.location.href);
        const token = url.searchParams.get("token");
        const email = url.searchParams.get("email");
        const time = url.searchParams.get("time");


        try {
            await UserRepo.updatePassword(token, time, email, this.state.password);
            window.location.reload();
        } catch (rejectedValue) {
            alert("Проверьте введенные параметры");
        }
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    render() {
        return (
            <div className="container-login100">
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <div className="login100-form validate-form flex-sb flex-w">
                        <div className="p-t-31 p-b-9">
						<span className="txt1">
							Пароль
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Email is required">
                            <input className="input100" onChange={this.onChange} type="password" name="password"/>
                            <span className="focus-input100"/>
                        </div>

                        <div className="p-t-13 p-b-9">
						<span className="txt1">
							Подтвердите пароль
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" onChange={this.onChange} type="password" name="confirmPassword"/>
                            <span className="focus-input100"/>
                        </div>
                        <Button
                            color="primary"
                            style={{marginBottom: '2rem'}}
                            onClick={this.onSubmit}>
                            Войти
                        </Button>
                    </div>
                </div>
            </div>
        )
    }
}

export default ChangePassword