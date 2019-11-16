import React, { Component } from 'react';
import './DetailedView.css';
import {Link} from "react-router-dom";
import Slider from "../Slider/Slider";


class DetailedView extends Component {

    constructor(props) {
        super(props)

        // we put on state the properties we want to use and modify in the component
        this.state = {
            sliderValue: this.props.model.getSliderValue(),
            itemId: this.props.match.params.id
        }
    }

    componentDidMount() {
        this.props.model.addObserver(this)
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this)
    }

    update() {
        this.setState({
            sliderValue: this.props.model.getSliderValue()
        })
    }
    
  render() {

        let itemName = this.props.model.getItemName(this.state.itemId);
        let itemPrice = this.props.model.getItemPrice(this.state.itemId);
    return (
      <div className="DetailedView">
          <Link to="/">
              <button>Go back</button>
          </Link>
          <h1> {itemName} </h1>
          <h2> How much did you waste? </h2>
            <Slider model={this.props.model} color="#ff6902"/>
            <div className="total">
                <p> You have thrown away: </p>
                <div className="total_value">
                    {itemPrice * this.state.sliderValue / 100 + '\u20AC'}
                </div>
            </div>
      </div>
    );
  }
}

export default DetailedView;
