import React, {Component} from 'react';
import {SideBar} from "../common/SideBar";
import {setUpSideBar} from "./PrivateArea";
import Footer from "../common/Footer";

class License extends Component{

    render() {

        const sideBarItems = setUpSideBar();

        return (
            <div className="feed">
                <SideBar menuItems={sideBarItems}/>
                <div className="content-customer">
                    <h1 className="LicenseProve">Ваша лицензия </h1>
                    <h3 className="ExpirationDate">Дата окончания : </h3>
                    <h4>Параметры лицензии </h4>
                    <h4>Количество машин</h4>
                    <h4>Имя организации (владельца)</h4>
                    <h4>Отслеживаемые параметры</h4>
                </div>
                <Footer/>
            </div>
        );
    }

}

export default License;



