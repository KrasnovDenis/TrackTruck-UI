import React from 'react';
import {SideBar} from "../../components/SideBar";
import {setUpSideBar} from "./PrivateArea";

export function License() {
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
        </div>
    );
}



