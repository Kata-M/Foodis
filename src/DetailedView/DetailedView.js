import React, { Component } from 'react';
import './DetailedView.css';
import Sidebar from '../Sidebar/Sidebar';
import {Link} from "react-router-dom";
import Slider from "../DiscreteSlider/Slider";


class DetailedView extends Component {

    constructor(props) {
        super(props)

        // we put on state the properties we want to use and modify in the component
        this.state = {
            sliderValue: this.props.model.getSliderValue()
        }
    }

    componentDidMount() {
        this.props.model.addObserver(this)
    }

    // this is called when component is removed from the DOM
    // good place to remove observer
    componentWillUnmount() {
        this.props.model.removeObserver(this)
    }

    update() {
        this.setState({
            sliderValue: this.props.model.getSliderValue()
        })
    }

  render() {

    return (
      <div className="DetailedView">
<<<<<<< HEAD
<<<<<<< Updated upstream
        <h2>This is the Detailed View :D</h2>
        
        {/* We pass the model as property to the Sidebar component */}
        <Sidebar model={this.props.model}/>

=======
=======
>>>>>>> 6382d061d014e07571e1b952185c89ef614adb13
          <Link to="/">
              <button>Go back</button>
          </Link>
          <h1> Item Name </h1>
          <h2> How much did you waste? </h2>
<<<<<<< HEAD
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
=======
        {/*<Sidebar model={this.props.model}/>*/}
        <Slider model={this.props.model} color="#ff6902"/>
          {/*<div>{this.props.model.getSliderValue()} </div>*/}
          <div> {this.state.sliderValue}</div>
>>>>>>> 6382d061d014e07571e1b952185c89ef614adb13
      </div>
    );
  }
}

export default DetailedView;
