import React, { Component } from "react";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      email: "",
      textarea: "",
      dropdown: "React",
    };
  }
  handleUsername = (event) => {
    this.setState({
      username: event.target.value,
    });
  };
  handleEmail = (event) => {
    this.setState({
      email: event.target.value,
    });
  };
  handleComments = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };
  handleDropdown = (event) => {
    this.setState({
      textarea: event.target.value,
    });
  };
  handleSubmit = (event) => {
    this.setState({
       
      
    });
  };

  

  render() {
      
    return (
      <form onSubmit={this.handleSubmit}>
        <div>
          <label>Username:</label>
          <input
            type="text"
            value={this.state.username}
            onChange={this.handleUsername}
          />
        </div>
        <div>
          <label>email:</label>
          <input
            type="text"
            value={this.state.email}
            onChange={this.handleEmail}
          />
        </div>
        <div>
          <label>comments:</label>'
          <input
            type="text"
            value={this.state.comments}
            onChange={this.handleComments}
          />
        </div>
        <div>
          <label>Dropdown Menu</label>
          <select value={this.state.dropdown} onChange={this.handleDropdown}>
            <option>React</option>
            <option>Vue.js</option>
            <option>Angular</option>
          </select>
        </div>
        <button>Submit</button>
      </form>
    );
  }
}

export default Login;
