import React from 'react';
import { Switch, Route } from 'react-router-dom'
import Header from 'ui/header';
import ListingsContainer from 'containers/listings';
import UpdateContainer from 'containers/update';
import ViewListingContainer from 'containers/view-listing';

// Expire listings

const App = () => (
    <div className="app">
        <Header />
        <div className="app__container">
            <Switch>
                <Route exact path='/' component={ListingsContainer}/>
                <Route path='/add' component={UpdateContainer}/>
                <Route path='/update/:number' component={UpdateContainer}/>
                <Route exact path='/listings' component={ListingsContainer}/>
                <Route exact path='/listings/:number' component={ViewListingContainer}/>
            </Switch>
        </div>
    </div>
);

export default App;
