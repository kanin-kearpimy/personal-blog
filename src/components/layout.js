import * as React from 'react'
import { Link } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText
} from './layout.module.css'

const routes = [{src: '/', name: 'Home'}, {src: '/about', name: 'About'}]

const Layout = ({ pageTitle, children }) => {
  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <nav>
        <ul className={navLinks}>
          {routes.map(({src, name}, index) => {
            return (
              <li key={index} className={navLinkItem}>
                <Link className={navLinkText} to={src}>{name}</Link>
              </li>
            )
          })}
        </ul>
      </nav>
      <h1 className={heading}>{pageTitle}</h1>
      {children}
    </main>
  )
}

export default Layout