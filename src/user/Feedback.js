import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";

class Feedback extends Component {
    render() {
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
}

export default Feedback



