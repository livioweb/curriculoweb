import React, {Component} from 'react';

export default class Todolist extends Component{

    constructor(props){
        super(props);
        this.state = {
            items:[],
            todo:''
        }
    }


    onChange = (event) => {
        this.setState({todo: event.target.value})
    }

    pushTodoItens = (event) =>{
            event.preventDefault();
            this.setState({
                items:[...this.state.items, this.state.todo],
                todo:''
            });
    }

    render(){

        const {items} = this.state;

        return(
            <div>
                <input type="text" name="todo" onChange={this.onChange} placehosder="Entes Todo" />
                <button type="button" onClick={this.pushTodoItens} > create </button>
                <hr/>
                <ul>
                    {items.map((item,index)=>(

                        <li key={index}>{item}</li>
                    ))}

                </ul>
            </div>
        );
    }
}