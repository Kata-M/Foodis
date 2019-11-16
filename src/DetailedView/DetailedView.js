import React, { Component } from 'react';
import './DetailedView.css';
import Sidebar from '../Sidebar/Sidebar';


class DetailedView extends Component {
  render() {
    return (
      <div className="DetailedView">
<<<<<<< Updated upstream
        <h2>This is the Detailed View :D</h2>
        
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>

=======
          <Link to="/">
              <button>Go back</button>
          </Link>
          <h1> Item Name </h1>
          <h2> How much did you waste? </h2>
            {/*<Sidebar model={this.props.model}/>*/}
            <Slider model={this.props.model} color="#ff6902"/>
          {/*<div>{this.props.model.getSliderValue()} </div>*/}
            <div class="total"> 
                <p> You have thrown away euros worth of: </p>
                <div class="total_value">   
                    {this.state.sliderValue}
                </div>
            </div>
>>>>>>> Stashed changes
      </div>
    );
  }
}

export default DetailedView;
