import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      isShow: true,
    };
  }

  toggleShow = () => {
    this.setState(state => ({ isShow: !state.isShow }));
  };

  render() {
    const greeting = 'Welcome to React';

    return (
      <div>
        {this.state.isShow ? <Greeting greeting={greeting} /> : null}

        <Button onClick={this.toggleShow} />
      </div>
    );
  }
}
class Button extends Component {
    render(){
       return <button onClick = {this.props.onClick}> Toggle show</button>
    }
}
const Greeting =props => <h1>{props.greeting}</h1>;

export default App;