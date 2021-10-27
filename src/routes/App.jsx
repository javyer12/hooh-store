import React from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { Home, Checkouts, Information, Payments, Success, NotFound } from '../container';
import AppContext from '../context/AppContext';
import useInitialState from '../hooks/useInitialState';

import Layout from '../components/Layout';

const App = ()=> {
        const initialState = useInitialState();
        return (
                <AppContext.Provider value={initialState}>
                <BrowserRouter>
                <Layout> 
                <Switch>
                        <Route exact path='/' component= {Home} />
                        <Route exact path='/checkout' component= {Checkouts} />
                        <Route exact path='/checkout/information' component= {Information} />
                        <Route exact path='/payments' component= {Payments} />
                        <Route exact path='/checkout/success' component= {Success} />
                        <Route component= {NotFound} />
                </Switch>
                </Layout>
                </BrowserRouter>
                </AppContext.Provider>
        )
}
export default App;

