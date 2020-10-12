import React from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import {Home} from './pages/Home';
import {About} from './pages/About';
import {Navbar} from './components/Navbar';
import {PrivateArea} from "./pages/PrivateArea";
import {Registration} from "./pages/Registration";
import {Login} from "./pages/Login";

function App() {
    setUpMenu();

    return (
        <BrowserRouter>
            <Navbar items={sessionStorage.getItem('menu-items')}/>
               <Switch>
                   <Route path={'/'} exact component={Home}/>
                   <Route path={'/about'} exact component={About}/>
                   <Route path={'/login'} exact component={Login}/>
                   <Route path={'/registration'} exact component={Registration}/>d
                   <Route path={'/feed'} exact component={PrivateArea}/>d
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
