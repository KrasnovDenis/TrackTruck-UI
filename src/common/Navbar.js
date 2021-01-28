import React, {Component} from 'react';
import {Link} from "react-router-dom";
import '../style/components/Navbar.css';
import {menuItems} from "../App";

class Navbar extends Component {

    render() {
        const isAuthenticated = localStorage.getItem("Authorization") || false;
        const button = !isAuthenticated ?
            (<li className='nav-item'>
                <Link className='nav-link'
                      to={menuItems.rightItems.Login.link}>
                    {menuItems.rightItems.Login.name}</Link>
            </li>)
            : (<li className='nav-item'>
                <Link className='nav-link'
                      to={menuItems.rightItems.Logout.link}>
                    {menuItems.rightItems.Logout.name}</Link>
            </li>)
        const privateArea = isAuthenticated ? (<li className='nav-item'>
            <Link className='nav-link' to={"/customer"}>{"Личный кабинет"}</Link>
        </li>) : (<div/>)

        return (
            <nav className="navbar navbar-dark navbar-expand-lg bg-info clearfix" style={{padding: '.5rem'}}>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav mr-auto align-self-end">

                        {
                            menuItems.leftItems.map(item => <li className='nav-item'>
                                <Link className='nav-link' to={item.link}>{item.name}</Link>
                            </li>)
                        }
                    </ul>
                    <ul className="navbar-nav align-self-start">
                        {privateArea}
                        {button}
                    </ul>
                </div>
            </nav>
        );

    }

}

export default Navbar