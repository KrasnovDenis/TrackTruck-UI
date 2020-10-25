import React from 'react';
import {Link} from "react-router-dom";
import '../style/components/SideBar.css';

export function SideBar(props) {

    const sideBarItems =  new Map(props.menuItems);
    var htmlSideBarItems = [];

    for (const [key, value] of sideBarItems.entries()) {
        htmlSideBarItems.push(<li className='nav-item'>
            <Link className='nav-link' to={key}>{value}</Link>
        </li>);
    }


    return (

        <div className="sidenav">
            {htmlSideBarItems}
        </div>
    );

}
