import React, {Component} from 'react';
import {Link} from "react-router-dom";


//это один парк (всмысле маленк)
class ParkLabel extends Component {

    constructor(props) {
        super(props);

    }

    render() {

        return (<div>
            <div>{this.props.park.name}</div>
            <div className="car-body">
                <Link to={'park/' + this.props.park.id} className="btn btn-primary">перейти к парку</Link>
            </div>
        </div>);

    }
}


export default ParkLabel