import React, { Component } from "react";
import Title from "./components/Title";
import Search from "./components/Search";
import Time from "./components/Time";
import axios from "axios";
class App extends Component {
  state = {
    times: []
  };
  onSubmit = fields => {
    // console.log("got:", fields);
    const url = `http://api.aladhan.com/v1/calendarByCity?city=${
      fields.city
    }&country=${fields.country}
    &method=${fields.date.slice(8, 10)}&month=${fields.date.slice(
      5,
      7
    )}&year=${fields.date.slice(0, 4)}`;

    axios.get(url).then(time => {
      this.setState({
        times: time.data.data
      });
    });
  };

  render() {
    // console.log("Passing", this.state);
    return (
      <div className="App">
        <div className="upper">
          <Title />
          <Search onSubmit={this.onSubmit} />
        </div>
        <div className="lower">
          <Time times={this.state.times} />
        </div>
      </div>
    );
  }
}

export default App;
