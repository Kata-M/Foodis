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
  }

  handleCheckboxChange = event => {
    this.setState({ checked: event.target.checked })
    this.props.model.toggleUsed(event.target.checked)
  }

  handleCheckboxChange2(tab) {
    this.props.model.toggleUsed(tab)
    //this.props.model.toggleUsed(event.target.checked)
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
                 <Checkbox
                    checked={tab.used}
                    onChange={this.handleCheckboxChange}
                  /> 
                
                <h>
                </h>
                <Link to={"/DetailedView/" + tab.id}>
                        <button>Wasted</button>
                </Link>   
        </td>
      </tr>
    )
    return (
      <div className="Overview">
          <Navbar bg="light" expand="lg">
              

                <Nav.Link href="OverView">Overview</Nav.Link>
                <Nav.Link href="ShoppingList">Shopping List</Nav.Link>


          
          </Navbar>


          <table id="simple-board">
                    <thead>       
                        <td className="tableCell">
                          <Typography>                          
                                 Recently bought items
                          </Typography>  
                        </td> 
                    </thead>
                    <tbody>
                      <hr/>
                        {rows}

                    </tbody>
          </table>
          <div style={{ fontFamily: 'system-ui' }}>
        <label>
          <Checkbox
            checked={this.state.checked}
            onChange={this.handleCheckboxChange}
          />
          <span style={{ marginLeft: 8 }}>Label Text</span>
        </label>
      </div>


      </div>
    );
  }
}

export default Overview;
