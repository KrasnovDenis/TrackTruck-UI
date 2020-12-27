import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';
import {setUpSideBar} from "./Admin";

class Customers extends Component {
    render() {
        let sideBarItems;
        sideBarItems = setUpSideBar();

        return (
            <div>
                <SideBar menuItems={sideBarItems}/>
                <div className="content-admin">
                    <div className="dsf">
                        Наши клиенты
                    </div>
                </div>
            </div>
        );
    }
}


export default Customers

