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
           <li> {item}
            <button type="button" onClick={this.onRemove} >x</button>
           </li>
        );
    }

}
