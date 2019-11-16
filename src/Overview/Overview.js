import React, { Component } from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';

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

//import { StickyContainer, Sticky } from 'react-sticky';


class Overview extends Component {
  constructor(props) {
    super(props)

    // we put on state the properties we want to use and modify in the component
    this.state = {
      // menu :  ["My Story", "Programming", "Prototyping & Design", "Art", "CV"]
         menu :  [ "Milk", "Bread", "Sugar", "Cucumber"]
    }
  }

    // this methods is called by React lifecycle when the 
  // component is actually shown to the user (mounted to DOM)
  // that's a good place to setup model observer
  componentDidMount() {
    this.state =  { 
      // menu : ["My Story", "Programming", "Prototyping & Design", "Art", "CV"]
      menu :  [ "Programming", "Prototyping & Design", "Art", "CV"]
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
      menu : ["My Story", "Programming", "Prototyping & Design","Art", "CV"]
    })
  }


  render() {
     const rows = this.state.menu.map((tab) =>
   
     <tr>
        <td className="tableRows" id={tab}> 
                {tab}    
                <Link to="/DetailedView">
                        <button>DetailedView</button>
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
          <p>
              Welcome to the dinner planner React Startup code!
          </p>

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


      </div>
    );
  }
}

export default Overview;
