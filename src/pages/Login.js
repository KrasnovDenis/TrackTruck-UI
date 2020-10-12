import React from 'react';
import '../style/login.css';
import {Link} from "react-router-dom";
import '../configurations/config.json';
import $ from 'jquery';

export const Login = () => {

    return (

        <div className="limiter">
            <div className="container-login100">
                <div className="wrap-login100 p-l-110 p-r-110 p-t-62 p-b-33">
                    <form className="login100-form validate-form flex-sb flex-w">
					<span className="login100-form-title p-b-53">
						Sign In With
                          <Link href="#" className="btn-google m-b-20" id="GoogleButton">
                                Google
                        </Link>
					</span>
                        <div className="p-t-31 p-b-9">
						<span className="txt1">
							Username
						</span>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Username is required">
                            <input className="input100" type="text" name="username"/>
                            <span className="focus-input100"/>
                        </div>

                        <div className="p-t-13 p-b-9">
						<span className="txt1">
							Password
						</span>

                            <Link to={'#'} className="txt2 bo1 m-l-5">
                                Forgot?
                            </Link>
                        </div>
                        <div className="wrap-input100 validate-input" data-validate="Password is required">
                            <input className="input100" type="password" name="pass"/>
                            <span className="focus-input100"/>

                        </div>
                        <form method="post" action="http://localhost:8080/login">
                            <div className="container-login100-form-btn m-t-17">
                                <button onClick={saveCredentials()} className="login100-form-btn">
                                    Sign In
                                </button>
                            </div>
                        </form>
                        <div className="w-full text-center p-t-55">
						<span className="txt2">
							Not a member?
						</span>

                            <Link to={"/registration"} className="txt2 bo1">
                                Sign up now
                            </Link>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    )
};

function registration() {

}

function saveCredentials() {

}

function loginInternal() {
    const login = sessionStorage.getItem('login');
    const password = sessionStorage.getItem('password');

    var settings = {
        "url": "http://localhost:8080/",
        "method": "POST",
        "timeout": 0,
        "headers": {
            "Content-Type": "application/json"
        },
        "data": JSON.stringify({"user": "denis", "password": "123"}),
    };


}