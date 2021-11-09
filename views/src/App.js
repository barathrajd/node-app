import React, {Component} from 'react';
import axios from "axios";
import url from "./server";

class App extends Component {

  constructor(props) {
    super(props);
    this.state = {
      data: ""
    }
  }

  componentDidMount() {
    axios.get(url).then(res => {
      console.log(res)
      this.setState({data: res.data.welcome})
    })
  }

  render() {
    return (
        <div>
          {this.state.data}
        </div>
    );
  }
}

export default App;