import React from 'react'
import {Router,Route,hashHistory,browserHistory,Redirect,IndexRoute} from "react-router"

import App from "./app.js"



class Routers extends React.Component{
  render(){
    return(
      <Router history={hashHistory}>
        <Route path="/" component={App}>
          <IndexRoute/>


        </Route>
      </Router>
    )
  }
}


export default Routers
