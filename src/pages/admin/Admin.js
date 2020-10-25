import React from 'react';
import {SideBar} from "../../components/SideBar";
import '../../style/pages/Admin.css';

export function Admin(){
    let sideBarItems;
    sideBarItems =setUpSideBar();

    return (
        <div>
            <SideBar menuItems = {sideBarItems}/>
            <div className="content-admin">
                <div className="admin-info">
                    <h1>Кабинет администратора</h1>
                    <hr/>

                </div>
            </div>
        </div>
    );
}

export function setUpSideBar(){
    const items = new Map();
    items.set('/admin/', 'Мои задачи');
    items.set('/admin/customers', 'Клиенты');
    items.set('/admin/employees', 'Сотрудники');
    items.set('/admin/messages', 'Обращения');
    return items;
}

