import * as React from 'react'
import { Link, useStaticQuery, graphql } from 'gatsby'
import { 
  container,
  heading,
  navLinks,
  navLinkItem,
  navLinkText,
  siteTitle
} from './layout.module.css'

const routes = [
  {src: '/', name: 'Home'}, 
  {src: '/about', name: 'About'}, 
  {src: '/blog', name: 'Blog'},
  {src: '/todolist', name: 'Todo List'}
]

const Layout = ({ pageTitle, children }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <main className={container}>
      <title>{pageTitle}</title>
      <p className={siteTitle}>{data.site.siteMetadata.title}</p>
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