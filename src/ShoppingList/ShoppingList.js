import React, { Component } from 'react';
import './ShoppingList.css';
import Sidebar from '../Sidebar/Sidebar';

class ShoppingList extends Component {
  render() {
    return (
      <div className="DetailedView">
        <h2>This is the Shopping List view</h2>
        
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>
      </div>
    );
  }
}

export default ShoppingList;
