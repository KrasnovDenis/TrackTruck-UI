import React from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';
import {setUpSideBar} from "./Admin";

export function Customers(){
    let sideBarItems;
    sideBarItems =setUpSideBar();

    return (
        <div>
            <SideBar menuItems = {sideBarItems}/>
            <div className="content-admin">
                <div className="dsf">

                </div>
            </div>
        </div>
    );
}


