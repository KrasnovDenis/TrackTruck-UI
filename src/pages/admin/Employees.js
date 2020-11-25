import React from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';
import {setUpSideBar} from "./Admin";

export function Employees(){
    let sideBarItems;
    sideBarItems =setUpSideBar();

    return (
        <div>
            <SideBar menuItems = {sideBarItems}/>
            <div className="content-admin">
                <div className="dsf">
                    Список сотрудников
                </div>
            </div>
        </div>
    );
}


