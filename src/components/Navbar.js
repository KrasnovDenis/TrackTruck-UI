import React from 'react';
import {Link} from "react-router-dom";
import '../style/components/Navbar.css';

export function Navbar(props) {

    const items =  new Map(JSON.parse(props.items));
    var htmlItems = [];

    for (const [key, value] of items.entries()) {
        htmlItems.push(<li className='nav-item'>
            <Link className='nav-link' to={key}>{value}</Link>
        </li>);
    }

    return (
        <nav className="navbar navbar-dark navbar-expand-lg bg-primary">
            <div className="navbar-nav mr-auto navbar-brand active col-1">
                <Link to="/">Диплом</Link>
            </div>

            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto align-self-end">
                    {htmlItems}
                </ul>
            </div>
        </nav>
    );

}
