import React, {Component, Fragment} from 'react';
import '../style/pages/login.css';
import {Link} from "react-router-dom";
import LoginRepo from "../repository/LoginRepo";
import Registration from "./Registration";
import {Button} from "reactstrap";

class Login extends Component {

    constructor(props) {
        super(props);
        this.state = {
            email: "",
            password: ""
        }
    }

    onChange = (e) => {
        const {name, value} = e.target;
        this.setState({[name]: value});
    }

    onLogin = async () => {
        try {
            const email = this.state.email
            const password = this.state.password
            const response = await LoginRepo.login(email, password)
            localStorage.setItem('Authorization', "Basic " + btoa(email + ':' + password))
            localStorage.setItem('firstName',response.data.firstName)
            localStorage.setItem('lastName',response.data.lastName)
            localStorage.setItem('picture',response.data.picture)
            localStorage.setItem('email',response.data.email)
            localStorage.setItem('userId',response.data.id)
            window.location.href="/customer";
        } catch (rejectedValue) {
            alert("Неверные логин или пароль");
        }
    }

    render() {
        return (
                <div className="container-login100">
                    <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                        <div className="login100-form validate-form flex-sb flex-w">
                            <div className="p-t-31 p-b-9">
						<span className="txt1">
							Email
						</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Email is required">
                                <input className="input100" onChange={this.onChange} type="text" name="email"/>
                                <span className="focus-input100"/>
                            </div>

                            <div className="p-t-13 p-b-9">
						<span className="txt1">
							Пароль
						</span>
                            </div>
                            <div className="wrap-input100 validate-input" data-validate="Password is required">
                                <input className="input100" onChange={this.onChange} type="password" name="password"/>
                                <span className="focus-input100"/>

                            </div>
                            <Button
                                color="dark"
                                style={{marginBottom: '2rem'}}
                                onClick={this.onLogin}>
                                Войти
                            </Button>
                        </div>

                        <Fragment>
                            <Registration/>
                        </Fragment>

                        <div className="w-full text-center p-t-55">

                            <br/>
                            <Link to={'#'} className="txt2 bo1 m-l-5">
                                Забыли пароль?
                            </Link>
                        </div>

                    </div>
                </div>

        )
    }
}

export default Login
