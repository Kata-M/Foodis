import React, { Component } from 'react';
import './DetailedView.css';
import Sidebar from '../Sidebar/Sidebar';


class DetailedView extends Component {
  render() {
    return (
      <div className="DetailedView">
        <h2>This is the Detailed View :D</h2>
        
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>

      </div>
    );
  }
}

export default DetailedView;
