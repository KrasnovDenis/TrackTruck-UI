import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";

class Statistics extends Component{

    render(){
        const sideBarItems = setUpSideBar();
        return (
            <div className="feed">
                <SideBar menuItems = {sideBarItems}/>
                <div>
                    Hello
                </div>
            </div>

        );
    }

}


export default Statistics
