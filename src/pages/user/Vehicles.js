import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";
import {AutoPark} from "../../components/customer/AutoPark";

export function Vehicles (){
    const sideBarItems = setUpSideBar();
    return (
        <div className="feed">
            <SideBar menuItems = {sideBarItems}/>
            <div className= 'content-customer'>
                <AutoPark/>
            </div>
        </div>
    )
}



