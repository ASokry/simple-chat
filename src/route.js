import React from 'react';
import { HashRouter as Router, Route, Switch } from 'react-router-dom';

//import pages
import Home from './pages/Home'
import AlyssonD from './pages/Alysson-D';
import CARAYCI from './pages/CARAYCI';
import Catson from './pages/Catson';
import CharlesXTyler from './pages/Charles_x_Tyler';
import DeaLy from './pages/DeaLy';
import MrandMrAP from './pages/Mr_and_MrAP';
import SoNice from './pages/SoNice';
import Vandy from './pages/Vandy';
import Yabrinaaa from './pages/Yabrinaaa';

export default function Routes(props) {

    const URL = process.env.PUBLIC_URL

    //Adding route-path to components
    const routes = [
        {
            path: '/Alysson-D',
            component: AlyssonD
        },{
            path: '/CARAYCI',
            component: CARAYCI
        },{
            path: '/Catson',
            component: Catson
        },{
            path: '/Charles-x-Tyler',
            component: CharlesXTyler
        },{
            path: '/DeaLy',
            component: DeaLy
        },{
            path: '/Mr-and-MrAP',
            component: MrandMrAP
        },{
            path: '/SoNice',
            component: SoNice
        },{
            path: '/Vandy',
            component: Vandy
        },{
            path: '/Yabrinaaa',
            component: Yabrinaaa
        }
    ]
    // console.log(URL);
    return (
        <Router>
            <Switch>
                {routes.map((route, index) => {
                    return <Route exact key={index}
                        path={route.path} component={route.component} />
                })}
                <Route component={Home} />
            </Switch>
        </Router>
    )
}