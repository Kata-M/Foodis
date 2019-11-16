import React, { Component } from 'react';
import './App.css';
import { Route } from 'react-router-dom';
import Overview from './Overview/Overview';
import { modelInstance } from './data/DataModel'
import DetailedView from "./DetailedView/DetailedView";
import ShoppingList from "./ShoppingList/ShoppingList";

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      title: 'Foodis NOT waste',
    }
  }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1 className="App-title">{this.state.title}</h1>
          
          {/* We rended diffrent component based on the path */}
          <Route exact path="/" render={() => <Overview model={modelInstance}/>}/>
          <Route path="/DetailedView" render={() => <DetailedView model={modelInstance}/>}/>
          <Route path="/ShoppingList" render={() => <ShoppingList model={modelInstance}/>}/>
        </header>
      </div>
    );
  }
}

export default App;
