import PropTypes from "prop-types"
import React from "react"

import HeadlineIndex from "../components/images/headline-index"
import Logo from "../components/images/logo"

const Header = ({ siteTitle }) => (
  <header>
    <div className="row">
      <div className="col-lg-8">
        <HeadlineIndex/>
      </div>
      <div className="col-lg-3">
        <Logo/>
      </div>
    </div>
  </header>
)

Header.propTypes = {
  siteTitle: PropTypes.string,
}

Header.defaultProps = {
  siteTitle: ``,
}

export default Header
