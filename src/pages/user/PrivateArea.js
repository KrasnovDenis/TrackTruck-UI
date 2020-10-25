import React from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Customer.css';

export function PrivateArea (){
    const sideBarItems = setUpSideBar();
    return (
        <dev className="feed">
            <SideBar menuItems = {sideBarItems}/>
        </dev>
    )
}


export function setUpSideBar(){
    const items = new Map();
    items.set('/customer/vehicles', 'Автопарк');
    items.set('/customer/statistics', 'Статистика по парку');
    items.set('/customer/license', 'Лицензия');
    items.set('/customer/feedback', 'Связь с администрацией');
    return items;
}

