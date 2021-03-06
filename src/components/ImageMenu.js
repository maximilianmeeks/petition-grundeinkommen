import React from "react"
import { Link } from "gatsby"

import BtnBotschafterSchwarz from "./images/BtnBotschafterSchwarz"
import BtnBotschafterOrange from "./images/BtnBotschafterOrange"
import BtnGrundeinkommenSchwarz from "./images/BtnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "./images/BtnGrundeinkommenOrange"

export default props => (
  <div className="bg-light pb-3">
    <div className="container">
      <div className="row">
        <div className="col-lg-6 py-3 pt-lg-5">
          <div className="btn-container mx-auto">
            <Link to="/grundeinkommen-konkret">
              <BtnGrundeinkommenSchwarz />
              <div className="overlay col-lg-12 py-3 pt-lg-5">
                <BtnGrundeinkommenOrange />
              </div>
            </Link>
          </div>
        </div>
        <div className="col-lg-6 pb-3 pt-lg-5">
          <div className="btn-container mx-auto">
            <Link to="was-geht/">
              <BtnBotschafterSchwarz />
              <div className="overlay col-lg-12 pb-3 pt-lg-5">
                <BtnBotschafterOrange />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
    <footer className="py-2">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <Link to="/impressum/" className="mx-3">
              Impressum
            </Link>
            <Link to="/datenschutz/" className="mx-3">
              Datenschutz
            </Link>
          </div>
        </div>
      </div>
    </footer>
  </div>
)
