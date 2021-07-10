import * as React from 'react'
import { todoContainerAdd } from '../layout.module.css'

const TodoAdd = ({ title, handleChange, addItem }) => {
    return (
        <div className={todoContainerAdd}>
        <input type="text" 
            value={title} 
            onChange={(event) => { handleChange('new_todo', event.target.value) }}
        />
        <button onClick={addItem}>Add</button>
    </div>
    )
}

export default TodoAdd