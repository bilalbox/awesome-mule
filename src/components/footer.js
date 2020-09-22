import PropTypes from "prop-types"
import React from "react"

const Footer = ({ author }) => (
  <footer>
    © {new Date().getFullYear()} {author}, Built with
    {` `}
    <a className="footer" href="https://www.gatsbyjs.com">
      Gatsby
    </a>
  </footer>
)

Footer.propTypes = {
  author: PropTypes.string,
}

Footer.defaultProps = {
  author: ``,
}

export default Footer
