import React, {Component} from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';
import {setUpSideBar} from "./Admin";

class Messages extends Component {

    render() {
        let sideBarItems;
        sideBarItems = setUpSideBar();

        return (
            <div>
                <SideBar menuItems={sideBarItems}/>
                <div className="content-admin">
                    <div className="dsf">
                        Message stub
                    </div>
                </div>
            </div>
        );
    }
}

export default Messages
