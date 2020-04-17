import React from "react"
import { Link } from "gatsby"

import BtnBotschafter from "./images/btnBotschafter"

export default (props) => (
    <div className="bg-light">
        <div className="container">
            <div className="row">
                <div className="col-lg-6 py-5 py-lg-5">
                    <div className="btn-container mx-auto">
                        <Link to="/alles-zum-grundeinkommen/">
                        <BtnBotschafter className="w-100"/>
                        <div className="overlay">
                            <div className="text">Alles zum Grundeinkommen</div>
                        </div>
                        </Link>
                    </div>
                </div>
                <div className="col-lg-6 pb-5 py-lg-5">
                    <div className="btn-container mx-auto">
                        <Link to="/werde-botschafter/">
                        <BtnBotschafter/>
                        <div className="overlay">
                            <div className="text">Werde Botschafter</div>
                        </div>
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    </div>
)
