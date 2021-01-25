import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import Home from './common/Home';
import About from './common/About';
import PrivateArea from "./user/PrivateArea";
import Registration from "./pages/Registration";
import Login from "./pages/Login";
import Admin from "./admin/Admin";
import Customers from "./admin/Customers";
import Employees from "./admin/Employees";
import Messages from "./admin/Messages";
import Vehicles from "./cars/Vehicles";
import Statistics from "./user/Statistics";
import License from "./user/License";
import Feedback from "./user/Feedback";
import {NotFound} from "./common/NotFound";
import Vehicle from "./cars/Vehicle";
import Parks from "./parks/Parks";
import Park from "./parks/Park";
import Navbar from "./common/Navbar";

function App() {
    setUpMenu();

    return (
        <BrowserRouter>
            <Navbar items={sessionStorage.getItem('menu-items')}/>
               <Switch>
                   <Route path={'/'} exact component={Home}/>
                   <Route path={'/about'} exact component={About}/>
                   <Route path={'/login'} exact component={Login}/>
                   <Route path={'/registration'} exact component={Registration}/>

                   <Route path={'/admin'} exact component={Admin}/>
                   <Route path={'/admin/customers'} exact component={Customers}/>
                   <Route path={'/admin/employees'} exact component={Employees}/>
                   <Route path={'/admin/messages'} exact component={Messages}/>

                   <Route path={'/customer'} exact component={PrivateArea}/>
                   <Route path={'/customer/vehicles'} exact component={Vehicles}/>
                   <Route path={'/customer/vehicles/:id'} exact component={Vehicle}/>
                   <Route path={'/customer/statistics'} exact component={Statistics}/>
                   <Route path={'/customer/license'} exact component={License}/>
                   <Route path={'/customer/feedback'} exact component={Feedback}/>
                   <Route path={'/customer/parks'} exact component={Parks}/>
                   <Route path={'/customer/parks/:id'} exact component={Park}/>
                   <Route component={NotFound} />
               </Switch>
        </BrowserRouter>
    );
}

function setUpMenu() {
    const items = new Map();
    items.set('/', 'Главная');
    items.set('/about', 'О нас');

    sessionStorage.setItem('menu-items', JSON.stringify(Array.from(items.entries())));

}
export default App;
