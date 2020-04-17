import PropTypes from "prop-types"
import React from "react"

import HeadlineIndex from "../components/images/headline-index"
import HeadlineBotschafter from "../components/images/headline-botschaft"
import HeadlineGrundeinkommen from "../components/images/headline-grundeinkommen"
import Logo from "../components/images/logo"

const renderSwitch = (url) => {
  switch(url) {
    case '/':
      return <HeadlineIndex/>;
    case '/werde-botschafter':
      return <HeadlineBotschafter/>;
    case '/alles-zum-grundeinkommen':
      return <HeadlineGrundeinkommen/>;
    case '/impressum':
      return <h1 className="mb-5 mt-3 px-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light mx-auto"> Impressum </h1>
    case '/datenschutz':
      return <h1 className="mb-5 mt-3 px-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light mx-auto"> Datenschutz </h1>
    case '/wer-wir-sind':
      return <h1 className="mb-5 mt-3 px-4 headline font-oswald text-uppercase font-weight-bold text-center text-primary bg-light mx-auto"> Wer Wir Sind </h1>
    default:
      return <HeadlineIndex/>;
  }
}

const Header = ({ url }) => (
  <header className="mt-3 mb-5">
    <div className="row">
      <div className="col-6 col-lg-8">
        {renderSwitch(url)}
      </div>
      <div className="col-6 mx-auto col-lg-3 mt-4 mt-lg-0">
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
