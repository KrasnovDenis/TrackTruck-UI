import React, {Component} from 'react';
import '../style/pages/login.css';
import {Link} from "react-router-dom";
import LoginRepo from "../repository/LoginRepo";

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

    onLogin = () =>{
        alert("Login");
        LoginRepo.login(this.state.email, this.state.password)
            .then(r =>alert(r.status) )
    }

    render() {
        return (
            <div className="limiter">
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

                            <div className="container-login100-form-btn m-t-17">
                                <button type="button" onClick={this.onLogin} className="login100-form-btn">
                                    Войти
                                </button>
                            </div>
                        </div>
                        <div className="container-login100-form-btn m-t-17">
                            <Link to={"/registration"}>
                                <button className="login100-form-btn">
                                    Зарегистрироваться
                                </button>
                            </Link>
                        </div>
                            <div className="w-full text-center p-t-55">

                                <br/>
                                <Link to={'#'} className="txt2 bo1 m-l-5">
                                    Забыли пароль?
                                </Link>
                            </div>

                    </div>
                </div>
            </div>

        )
    }
}

export default Login
