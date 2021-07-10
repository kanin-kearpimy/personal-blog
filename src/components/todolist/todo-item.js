import * as React from 'react'
import { todoItem, todoItemActionDelete, todoItemActionUpdate, todoItemActionUpdating } from '../layout.module.css'

class TodoItem extends React.Component {
    constructor (props) {
        super(props)
        
        this.state = {
            title: this.props.title,
            editing: false
        }
    }

    onUpdate = () => {
        this.setState({
            editing: true
        })
    }

    handleChange = (prop_name, value) => {
        this.setState({
            [prop_name]: value,
        })
    }

    render () {
        const {id, deleteFunction, updateFunction} = this.props
        if(!this.state.editing){
            return (
                <li className={todoItem} key={id}>
                    <h5>{this.state.title}</h5>
                    <div>
                        <span className={todoItemActionUpdate}
                            onClick={this.onUpdate}>edit</span>
                        <span className={todoItemActionDelete} 
                            onClick={() => { deleteFunction(id) }}>del</span>
                    </div>
                </li> 
            )
        }else{
            return (
                <li className={todoItem} key={id}>
                    <input type='text' value={this.state.title} onChange={(event) => { this.handleChange('title', event.target.value) }} />
                    <div>
                        <span 
                            className={`${todoItemActionUpdate} ${todoItemActionUpdating}`}
                            onClick={() => { this.setState({editing: false}); updateFunction(id, this.state.title) } }
                            >edit</span>
                    </div>
                </li> 
            )
        }
    }
}

export default TodoItem