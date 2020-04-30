import PropTypes from "prop-types"
import React from "react"
import { Link } from "gatsby"

import HeadlineIndex from "./images/HeadlineIndex"
import HeadlineBotschafter from "./images/HeadlineBotschafter"
import HeadlineGrundeinkommen from "./images/HeadlineGrundeinkommen"
import HeadlineGrundeinkommenJetzt from "./images/HeadlineGrundeinkommenJetzt"
import Logo from "./images/Logo"

const renderSwitch = (url) => {
  switch(url) {
    case '/':
      return <HeadlineIndex/>;
    case 'wie-unterstuetzen':
      return <HeadlineBotschafter/>;
    case '/warum-grundeinkommen':
      return <HeadlineGrundeinkommen/>;
    case '/impressum':
      return <h1 className="mb-md-5 mt-md-5 px-md-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light"> Impressum </h1>
    case '/datenschutz':
      return <h1 className="mb-md-5 mt-md-5 px-md-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light"> Datenschutz </h1>
    case '/wer-wir-sind':
      return <h1 className="mt-md-5 px-md-4 ml-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light "> Wer Wir Sind </h1>
    case '/wir-sind-viele':
      return <h1 className="mt-md-5 px-md-4 ml-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light "> Wir sind viele </h1>
    case '/grundeinkommen-jetzt':
      return <HeadlineGrundeinkommenJetzt/>
    case '/404':
      return <h1 className="mb-5 mt-3 px-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light mx-auto"> 404: Not Found </h1>
    default:
      return <HeadlineIndex/>;
  }
}

const Header = ({ url }) => (
  <header className="mt-3">
    <div className="row">
      <div className="col-12 col-md-8 order-2 order-md-1 my-5 my-lg-0 header-container">
        {renderSwitch(url)}
      </div>
      <div className="col-12 col-md-3 order-1 order-md-2 mx-auto logo-container">
        <Link to="/">
          <Logo/>
        </Link>
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
