import React from "react"
import { Link } from "gatsby"

import BtnBotschafterSchwarz from "./images/btnBotschafterSchwarz"
import BtnBotschafterOrange from "./images/btnBotschafterOrange"
import BtnGrundeinkommenSchwarz from "./images/btnGrundeinkommenSchwarz"
import BtnGrundeinkommenOrange from "./images/btnGrundeinkommenOrange"


export default (props) => (
    <div className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 py-5 py-lg-5">
                    <div className="btn-container mx-auto">
                        <Link to="/warum-grundeinkommen/">
                            <BtnGrundeinkommenSchwarz/>
                            <div className="overlay col-lg-12 py-5 py-lg-5">
                                <BtnGrundeinkommenOrange/>
                            </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 pb-5 py-lg-5">
                    <div className="btn-container mx-auto">
                        <Link to="/werde-botschafter/">
                            <BtnBotschafterSchwarz/>
                            <div className="overlay col-lg-12 py-5 py-lg-5">
                                <BtnBotschafterOrange/>
                            </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
