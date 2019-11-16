import React, { Component } from 'react';
import './ShoppingList.css';
import Sidebar from '../Sidebar/Sidebar';
import Checkbox from '../Components/Checkbox'
import Row from 'react-bootstrap/Row'
import Typography from '@material-ui/core/Typography';
import {Link} from "react-router-dom";

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
                <h>
                </h>
        </td>
      </tr>
    )
    
    return (
      <div className="DetailedView">

          <table class="ostoslista">
                    <thead>       
                        <td className="tableCell">
                          <h1>                          
                                 Shopping List
                          </h1>  
                        </td> 
                    </thead>
                    <tbody>
                      <hr/>
                        {rows}

                    </tbody>
          </table>
          <Link to="/">
              <button>Go back</button>
          </Link>
          <div style={{ fontFamily: 'system-ui' }}>
        
      </div>


      </div>
    );
  }
}   


export default ShoppingList;
