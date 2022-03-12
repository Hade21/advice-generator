import axios from "axios";
import React from "react";
import Card from "../card/card";

class Main extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      advice: [],
    };
    this.handleLoad = this.handleLoad.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }
  componentDidMount() {
    this.handleLoad();
  }
  handleLoad() {
    axios.get(`https://api.adviceslip.com/advice`).then((data) => {
      const advice = data.data.slip;
      this.setState({ advice });
    });
  }
  handleClick() {
    this.handleLoad();
  }

  render() {
    return (
      <div className="main font-manrope bg-dark-blue w-screen h-screen absolute">
        <Card
          adid={this.state.advice.id}
          advice={this.state.advice.advice}
          click={this.handleClick}
        />
      </div>
    );
  }
}

export default Main;
