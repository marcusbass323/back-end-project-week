import React, { Component } from 'react';
import { NavLink, Route } from 'react-router-dom';
import './App.css';

import Notes from './components/Notes'
import NewNote from './components/NewNote';
import EditNote from './components/EditNote';

export default class App extends Component {
  render() {
          
    return (
      <div>
       <div>    
      <nav>
        <NavLink to='/Customers' exact>
          Notes
            </NavLink>
              
        &nbsp;|&nbsp;
       
            <NavLink to='/NewCustomer' exact>
          Create New Note
            </NavLink>
              
        &nbsp;|&nbsp;
        
            <NavLink to='/EditCustomer' exact>
          Edit Note
            </NavLink>
      </nav>
         </div>    
      <div>
              <main>
        <Route path='/customers' component={Notes} exact></Route>
        <Route path='/newcustomer' component={NewNote} exact></Route>
        <Route path='/editcustomer' component={EditNote} exact></Route>

          </main>
          
</div>
            

            

      </div>

      
            );
  }
    
}