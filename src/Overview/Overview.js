import React, { Component } from 'react';
import './Overview.css';
import { Link } from 'react-router-dom';

class Overview extends Component {
  render() {
    return (
      <div className="Overview">
        <p>
            Welcome to the dinner planner React Startup code!
        </p>
        
        <Link to="/DetailedView">
            <button>DetailedView</button>
        </Link>
         <Link to="/ShoppingList">
            <button>ShoppingList</button>
        </Link>
      </div>
    );
  }
}

export default Overview;
