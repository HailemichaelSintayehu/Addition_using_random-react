
import React,{Component} from 'react';


const users = [
        {id:'1',firstname:"Robin",lastname:"weiruch"},
        {id:'2',secondname:"Dennis",lastname:"weiruch"}
];
class Application extends Component{
    render(){
        return(
            <div>
                <h1>Conditional rendering</h1>
                <List list = {users}/>
    
            </div>
        );
    }
}  
class List extends Component{
    render(){
        if(!this.props.list){
            return null;
        }
        if(!this.props.list.length){
            return <p>Sorry, the list in empty</p>
        }
        else{
            return (
                <div>
                    {this.props.list.map(item =>(
                        <Item key = {item.id} item = {item}/>
                    ))}
                </div>
            );
        }
     
    }

}

class Item extends Component{
    render(){
        return (
            <div>
          

    <li>{this.props.item.firstname} {this.props.item.secondname}</li>
             
            </div>
        );
    }
}

// const Item = ({item}) => <div>
//     <li>{item.firstname} {item.secondname}</li>

// </div>
    


export default Application;