import React, {Component} from 'react';
import TodoListItems from './TodoListItems';

// export default class TodoList extends Component{
//
//     constructor(props){
//         super(props)
//         this.state = {
//             todo:''
//         }
//     }
//
//     render(){
//         return(
//            <ul>
//
//            </ul>
//         );
//     }
//
// }

export const TodoList = (props)=>{
    const{items,removeFromItems} = props;
    return(
        <ul className="list-group">
            {items.map((item, index)=>(
                <TodoListItems key={index} index={index} item={item} removeFromItems = {removeFromItems}/>
            ))}

        </ul>
    );
}