import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';

// import App from './App';
import HomeView from './views/HomeView'
import RenderGroceryById from './components/RenderGroceryById/RenderGroceryById';

import AntdLayout from './layouts/GroceryList/AntdLayout'

class Router extends Component {
  render(){
    return (
      <BrowserRouter>
        <Switch>

          {/*}<Route path="/" exact component={App}/> */}
          <Route path="/" exact component={HomeView}/>
          <Route path="/grocery/:id" component={RenderGroceryById}/>

          <Route path="/design/grocery/:id" component={AntdLayout}/>
          
          {/*<Route path="/grocery/all" component={GroceriesView}/> */}

        </Switch>
      </BrowserRouter>
    )
  }
}

export default Router;
