import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {PrivateArea} from "./pages/user/PrivateArea";
import {Registration} from "./pages/Registration";
import {Login} from "./pages/Login";
import {Admin} from "./pages/admin/Admin";
import {Customers} from "./pages/admin/Customers";
import {Employees} from "./pages/admin/Employees";
import {Messages} from "./pages/admin/Messages";
import {Vehicles} from "./pages/user/Vehicles";
import {Statistics} from "./pages/user/Statistics";
import {License} from "./pages/user/License";
import {Feedback} from "./pages/user/Feedback";
import {NotFound} from "./components/NotFound";
import {Vehicle} from "./pages/user/Vehicle";

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
                   <Route path={'/customer/vehicle/:id'} exact component={Vehicle}/>
                   <Route path={'/customer/statistics'} exact component={Statistics}/>
                   <Route path={'/customer/license'} exact component={License}/>
                   <Route path={'/customer/feedback'} exact component={Feedback}/>

                   <Route component={NotFound} />
               </Switch>
        </BrowserRouter>
    );
}

function setUpMenu() {
    const items = new Map();
    items.set('/', 'Home');
    items.set('/about', 'About us');
    items.set('/login', 'Login');

    sessionStorage.setItem('menu-items', JSON.stringify(Array.from(items.entries())));

}
export default App;
