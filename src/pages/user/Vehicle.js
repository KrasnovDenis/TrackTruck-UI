import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function Vehicle (){
    const sideBarItems = setUpSideBar();
    return (
        <dev className="feed">
            <SideBar menuItems = {sideBarItems}/>
        </dev>
    )
}



