import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function Vehicles (){
    const sideBarItems = setUpSideBar();
    return (
        <dev className="feed">
            <SideBar menuItems = {sideBarItems}/>
            <div className= 'content-customer'>
                Vehicles
            </div>
        </dev>
    )
}



