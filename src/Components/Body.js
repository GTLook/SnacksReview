import React, {Component} from 'react'



import Banner from './Banner'
import SnackBasket from '../Containers/SnackBasket'
import SnackPage from '../Containers/SnackPage'
import {Col, Row, Modal, Button} from 'react-materialize'
import {BrowserRouter, Switch, Route} from 'react-router-dom'

class Body extends Component {
  render = () => (
    <div>
      <Banner />
      <BrowserRouter>
         <Switch>
           <Route exact path='/:snackId' component={ SnackPage } />
           <Route exact path='/' component={ SnackBasket } />
         </Switch>
       </BrowserRouter>
  </div>
  )
}


export default Body
