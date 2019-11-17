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
            itemId: this.props.match.params.id,
            wastedMoney: 0
        }
    }

    componentDidMount() {
        this.props.model.addObserver(this);
        this.setState({
            sliderValue: 0
        });
    }

    componentWillUnmount() {
        this.props.model.removeObserver(this);
    }

    update() {
        this.setState({
            sliderValue: this.props.model.getSliderValue()
        })
    }

  setWasted(wasted, itemID) {
      this.props.model.setWastedMoney(wasted);
      this.props.model.deleteItem(itemID);
  }

  render() {

    let itemName = this.props.model.getItemName(this.state.itemId);
    let itemPrice = this.props.model.getItemPrice(this.state.itemId);
    let itemID = this.state.itemId;
    let wastedMoney = Math.round(itemPrice * this.state.sliderValue) / 100;

    //this.props.model.setWastedMoney(wastedMoney);

    return (
      <div className="DetailedView">
          {/*<Link className="backButton" to="/">*/}
          {/*  <button> Back </button>*/}
          {/*</Link>*/}
          <h1> {itemName} </h1>
          <h2> How much did you waste? </h2>
            <Slider model={this.props.model} color="#ff6902"/>
            <div className="total">
                <p> You have thrown away: </p>
                <div className="total_value">
                    {wastedMoney + '\u20AC'}
                </div>
            </div>
          <Link to="/">
              {console.log(wastedMoney)}
              <button className="saveButton" onClick={() => {this.setWasted(wastedMoney, itemID)}}>Save</button>
          </Link>
      </div>
    );
  }
}

export default DetailedView;
