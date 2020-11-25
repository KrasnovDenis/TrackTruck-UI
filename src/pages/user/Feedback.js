import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function Feedback() {
    const sideBarItems = setUpSideBar();
    return (

        <div className="feed">
            <SideBar menuItems={sideBarItems}/>
            <div className="content-customer">
                Связаться с администрацией
                <form>

                </form>
            </div>
        </div>
)
}



