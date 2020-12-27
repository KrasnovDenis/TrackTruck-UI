import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

class Vehicle extends Component {
    render() {
        const sideBarItems = setUpSideBar();
        return (
            <div className="feed">
                <SideBar menuItems={
                    sideBarItems
                }

                />
                <div className="content-customer">
                    Hi
                </div>
            </div>
        )
    }
}

export default Vehicle

