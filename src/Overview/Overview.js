import React, { Component } from 'react';
import './Overview.css';
import {Link, Route} from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.css' ;
import Col from 'react-bootstrap/Col'
import Row from 'react-bootstrap/Row'
import Container from 'react-bootstrap/Container' 

import { Button, Navbar, Nav, NavItem, NavDropdown, MenuItem, Form, FormControl } from 'react-bootstrap';

//material-ui
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
//import Link from '@material-ui/core/Link';
import Typography from '@material-ui/core/Typography';
import Checkbox from '../Components/Checkbox'
import DetailedView from "../DetailedView/DetailedView";
import {modelInstance} from "../data/DataModel";
import ShoppingList from "../ShoppingList/ShoppingList";

//import { StickyContainer, Sticky } from 'react-sticky';


class Overview extends Component {
  constructor(props) {
    super(props)


    // we put on state the properties we want to use and modify in the component
    this.state = {
      // menu :  ["My Story", "Programming", "Prototyping & Design", "Art", "CV"]
        // checked: [ false, false, false, false],
         list: this.props.model.getlistOfFoodItems()
    }
    this.deleteItem = this.deleteItem.bind(this);
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
	  this.props.model.removeObserver(this);
  }


  // in our update function we modify the state which will
  // cause the component to re-render
  update() {
    this.setState({
      list: this.props.model.getlistOfFoodItems()
    })
  }

  deleteItem(id){
    {console.log("Im in the delete")}
    {console.log(id)}
   //{this.props.model.deleteItem(id)}
   {this.setState({list: this.props.model.deleteItemUsed(id)})}
   {console.log(this.state.list)}

  }

  handleClick() {
    this.setState(state => ({
      isToggleOn: !state.isToggleOn,
    }));
  }


  render() {
  	 let totalWastedMoney = this.props.model.getTotalWastedMoney();

     const rows = this.state.list.map((tab) =>

     <tr key={tab.id}>
        <td className="tableRows"  id={tab}> 
                {tab.name}   

                <Link to={"/DetailedView/" + tab.id}>
                        <button class="wasted">Wasted</button>
                </Link>          
                <h>
                </h> 
                <button class="delete" type="submit" onClick={() => {this.deleteItem(tab.id)}}>
                    Used
                </button>     
        </td>
      </tr>
    )
    return (
      <div className="Overview">
          <Navbar bg="light" expand="lg">
                <Nav.Link href="/">Overview</Nav.Link>
                <Nav.Link href="ShoppingList">Shopping List</Nav.Link>
          </Navbar>
          <table id="simple-board">
                    <thead>       
                        <td className="tableCell">
                          <h4>Money wasted:</h4>
							<h1 id="saldo">  {-totalWastedMoney + '\u20AC'}</h1>
                          <h5>                       
                                 Recently bought items
                          </h5>  
                        </td> 
                    </thead>
                    <tbody>
                      <hr/>
                        {rows}

                    </tbody>
          </table>
          <div style={{ fontFamily: 'system-ui' }}>

        
        

      </div>


      </div>
    );
  }
}

export default Overview;
