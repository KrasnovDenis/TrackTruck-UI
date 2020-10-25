import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function Statistics (){
    const sideBarItems = setUpSideBar();
    return (
        <dev className="feed">
            <SideBar menuItems = {sideBarItems}/>
            <div>
                Hello
            </div>
        </dev>

    );
}



