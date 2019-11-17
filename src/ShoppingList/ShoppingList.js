import React, { Component } from 'react';
import './ShoppingList.css';
import Sidebar from '../Sidebar/Sidebar';
import Checkbox from '../Components/Checkbox'
import Row from 'react-bootstrap/Row'
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';


class ShoppingList extends Component {
  constructor(props) {
    super(props)
    // we put on state the properties we want to use and modify in the component
    this.state = {
      // menu :  ["My Story", "Programming", "Prototyping & Design", "Art", "CV"]
        // checked: [ false, false, false, false],
         list: this.props.model.getShoppingList()

    }
  }
    // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.state =  { 
      // menu : ["My Story", "Programming", "Prototyping & Design", "Art", "CV"]
      list: this.props.model.getlistOfFoodItems()
    }
  }

  // this is called when component is removed from the DOM
  // good place to remove observer
  componentWillUnmount() {

  }


  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      list: this.props.model.getlistOfFoodItems()
    })
  }  
  
  render() {

    const rows = this.state.list.map((tab) =>
    <tr key={tab.id}>
        <td className="tableRows"  id={tab}>
                {tab.name}   
        </td>
        <td className="tableRows"  id={tab}> {tab.quantity}</td>
        <td className="tableRows"  id={tab}> {tab.price*tab.quantity} €</td>
        
      </tr>
    )
    return (
      <div className="DetailedView">
        <Navbar bg="light" expand="lg">
                <Nav.Link href="/">Overview</Nav.Link>
                <Nav.Link href="ShoppingList">Shopping List</Nav.Link>
          </Navbar>
          
          <h2 class="ostoslista">Shopping List</h2> 
          <hr/>
          <table id="simple-board">
                    <tbody>
                    <tr key={1.0}>
                    </tr>
                   
                      <tr key={1.0}>
                        <td>
                          <p>Amount </p> 
                          </td>
                          <td>
                          <p class="price">Price </p> 
                          </td>
                      </tr>
                        
                        {rows}

                    </tbody>
          </table>
          <div style={{ fontFamily: 'system-ui' }}>
        
      </div>


      </div>
    );
  }
}   


export default ShoppingList;
