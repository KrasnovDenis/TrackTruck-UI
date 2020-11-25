import React from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';
import {setUpSideBar} from "./Admin";

export function Messages(props){
    let sideBarItems;
    sideBarItems =setUpSideBar();

    return (
        <div>
            <SideBar menuItems = {sideBarItems}/>
            <div className="content-admin">
                <div className="dsf">
                    Message stub
                </div>
            </div>
        </div>
    );
}


