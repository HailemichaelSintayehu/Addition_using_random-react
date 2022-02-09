import React, { Component } from "react";

import ReactDom from "react-dom";

import "./index.css";
import "bootstrap/dist/css/bootstrap.css";

class App extends Component {
    constructor(props) {
        super(props);
        this.state={
            tasks:["task1","task2","task3"],
            input:""
        };
    }
    render(){
        return(
            <div className="li">
                <h1>Tasks</h1>
                <ul className="ul">
                    {this.state.tasks.map((task) =>
                       <li >
                           {task}
                       </li>
                        
                        
                        )}
                </ul>
            </div>
        );
    }
     
           
}        

ReactDom.render(<App />, document.getElementById("root"));