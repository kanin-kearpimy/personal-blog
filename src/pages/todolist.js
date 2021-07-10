import * as React from 'react'
import Layout from '../components/layout'
import TodoGrid from '../components/todolist/todo-grid'
import TodoItem from '../components/todolist/todo-item'
import TodoAdd from '../components/todolist/todo-add'

class TodoList extends React.Component {
    constructor (props) {
        super(props)
        this.state = {
            todos: [],
            new_todo: {
                title: null
            }
        }
    }

    componentDidMount () {
        this.setState({
            todos: [
                {
                    id: 0,
                    title: 'Title 1'
                },
                {
                    id: 1,
                    title: 'Title 2'
                },
                {
                    id: 2,
                    title: 'Title 3'
                }
            ]
        })
    }

    deleteItem = (id) => {
        var new_todo = this.state.todos.filter(item => item.id !== id)
        this.setState({
            todos: new_todo,
        })
    }
    
    addItem = () => {
        let title = this.state.new_todo.title
        var new_id = this.state.todos.length
        new_id++
        var new_item = {
            id: new_id,
            title: title
        }
        var current_todo = this.state.todos
        current_todo.push(new_item)
        this.setState({
            todos: current_todo
        })
    }

    update = (id, value) => {
        let new_update_item = {
            id: id,
            title: value
        }
        var current_todo = this.state.todos.map(item => {
            if(item.id === id){
                return new_update_item
            }
            return item
        })
        this.setState({
            todos: current_todo
        })
    }

    handleChange = (prop_name, value) => {
        var new_todo = {...this.state.new_todo}
        new_todo.title = value
        this.setState({
            [prop_name]: new_todo
        })
    }

    render () {
        return (
            <Layout pageTitle="To Do List">
                <TodoAdd 
                    title={this.state.new_todo.title} 
                    handleChange={this.handleChange}
                    addItem={this.addItem}
                />
                <TodoGrid>
                    {this.state.todos.map(({id, title}) => {
                        return (
                            <TodoItem 
                            id={id}
                            title={title}
                            deleteFunction={this.deleteItem} 
                            updateFunction={this.update}
                            />
                        )
                    })}
                </TodoGrid>
            </Layout>
        )
    }
}

export default TodoList