import {Component} from "react";

class Logout extends Component {
    constructor() {
        super();
        localStorage.clear();
        window.location.href = "/";
    }
}

export default Logout;