import React, { Component } from 'react';


class  extends Component {
    constructor(props) {
        super(props);
    
    this.state = {
        count:0,
      }
    }
    increment(){
        
            this.state.count = this.state.count + 1
            console.log(this.state.count)
    } ;
    }
    render() { 
        return (  
            <div>
                Count -{this.state.count}
                <button onClick={this.increment}>Dicrement</button>
            </div>

        );
    }
}
 
export default Counter ;