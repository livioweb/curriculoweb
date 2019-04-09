import React, {Component} from 'react';

export default class TodoListItems extends Component{

    constructor(props){
        super(props)

    }

    onRemove = () =>{
        //const {index} = this.props
        this.props.removeFromItems(this.props.index);
    }

    render(){
        const {item} = this.props;
        return(
           <li className="list-group-item">
               <p><button className="btn btn-danger" type="button" onClick={this.onRemove} >x</button>
               {item}</p>
           </li>
        );
    }

}
