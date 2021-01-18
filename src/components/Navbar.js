import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../style/components/Navbar.css';

class Navbar extends Component {

    render() {

        const items = new Map(JSON.parse(this.props.items));
        let htmlItems = [];

        for (const [key, value] of items.entries()) {
            htmlItems.push(<li className='nav-item'>
                <Link className='nav-link' to={key}>{value}</Link>
            </li>);
        }
        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-info clearfix" style={{padding: '.5rem'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto align-self-end">
                        {htmlItems}
                    </ul>
                    <ul className="navbar-nav align-self-start">
                        <Link className='nav-link' to={'/login'}>Войти</Link>
                        <Link className='nav-link' to={'/login'}>Регистрация</Link>
                    </ul>
                </div>
            </nav>
        );

    }

}

export default Navbar