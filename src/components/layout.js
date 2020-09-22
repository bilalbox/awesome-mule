import React from "react"
import PropTypes from "prop-types"
import { useStaticQuery, graphql } from "gatsby"
import Header from "./header"
import Footer from "./footer"
import { useDarkMode } from "./useDarkMode"
import { lightTheme, darkTheme } from "./theme"
import { GlobalStyles } from "./global"
import Toggle from "./toggle"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query MyQuery {
      site {
        siteMetadata {
          author
          title
        }
      }
    }
  `)
  const [theme, setTheme, componentMounted] = useDarkMode()
  const toggleTheme = () => {
    if (theme === "light") {
      setTheme("dark")
    } else {
      setTheme("light")
    }
  }

  if (!componentMounted) {
    return <div />
  }

  return (
    <>
      <GlobalStyles theme={theme === "light" ? lightTheme : darkTheme} />
      <Header siteTitle={data.site.siteMetadata.title || `Title`} />
      <div className="wrap">
        <Toggle theme={theme} toggleTheme={toggleTheme} />
        <main>{children}</main>
      </div>
      <Footer author={data.site.siteMetadata.author || `Author`} />
    </>
  )
}

Layout.propTypes = {
  children: PropTypes.node.isRequired,
}

export default Layout
