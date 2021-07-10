import * as React from 'react'
import todoContainer from '../layout.module.css'

const Layout = ({ children }) => {
    return (
        <ul className={todoContainer}>
            {children}
        </ul>
    )
}

export default Layout