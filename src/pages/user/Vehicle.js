import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function Vehicle (){
    const sideBarItems = setUpSideBar();
    return (
        <div className="feed">
            <SideBar menuItems = {sideBarItems}/>
            <div className="content-customer">
                Hi
            </div>
        </div>
    )
}



