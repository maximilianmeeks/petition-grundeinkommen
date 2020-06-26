import React from "react"
import { Link } from "gatsby"

import { Button } from "react-bootstrap"

import Layout from "../components/layout"
import SEO from "../components/seo"

import Header from "../components/Header"
import ImageMenu from "../components/ImageMenu"
import Countdown from "../components/Countdown"

const IndexPage = () => (
  <Layout ImageMenu="true">
    <SEO
      title="Die Zeit ist reif für's Grundeinkommen."
      description="Die größte Online-Petition sind wir schon – jetzt per Post fürs Grundeinkommen abstimmen. Danke!"
      imgFb="/BGE_post_facebook_1200x627_4.jpg"
    />
    <div className="container">
      <Header />
      <div className="row mt-md-5">
        <div className="col-md-8 mx-auto">
          Wir alle in Deutschland tragen den Staat - aber gibt er uns auch genug
          zurück? Teile den Film und setze dich für mehr Gerechtigkeit ein.
          Damit bald jeder Mensch in Germany ein Grundeinkommen hat. Posten
          heißt Stimme erheben - zusammen sind wir mehr! TEILEN UND GEWINNEN:
          Werde auch du Botschafter und damit ein Teil von 'Mensch in Germany'.
          Schicke einfach ein Foto und ein Zitat an{" "}
          <a
            href="mailto:botschafterIn@mensch-in-germany.org"
            className="custom-anchor font-weight-bold"
          >
            botschafterIn@mensch-in-germany.org
          </a>{" "}
          - als Dank für deine Unterstützung nimmst du an einer Verlosung von
          interessanten Büchern zum Bedingungslosen Grundeinkommen teil, u.a.
          von Götz Werner, Gründer von dm-drogerie markt.
        </div>
      </div>
      <div className="row mt-3 mt-md-5">
        <div className="col-md-8 mx-auto">
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/HdwbNECDqJE"
            frameborder="0"
            allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
        </div>
      </div>
      <div className="row mb-3 mt-lg-3 pt-md-5">
        <div className="col-lg-6">
          <p>
            <strong>Veränderung liegt in der Luft:</strong> Die Corona-Krise
            zeigt, wie wesentlich die finanzielle Absicherung unseres Lebens
            ist. Immer mehr gesellschaftliche Gruppierungen fordern
            Unterstützung, die Bundesregierung schnürt ein Hilfspaket nach dem
            anderen und dennoch fallen viele Menschen durch’s Raster. Angst
            macht sich breit.
          </p>
          <p>
            Es ist Zeit für einen großen Wurf: Wir wollen mit der Einführung
            eines Grundeinkommens in der Krise einen Boden einziehen, der alle
            trägt. Zunächst temporär, danach permanent und bedingungslos.
          </p>
        </div>
        <div className="col-lg-6">
          <p>
            Nachdem unsere{" "}
            <a
              href="https://epetitionen.bundestag.de/petitionen/_2020/_03/_14/Petition_108191.nc.html"
              target="_blank"
              className="custom-anchor font-weight-bold"
            >
              {" "}
              Online-Petition{" "}
            </a>{" "}
            an den deutschen Bundestag vom 14.3.2020 die größte aller Zeiten
            wurde und wir mit einem starken
            <a
              href="https://grundeinkommenjetzt.de/"
              target="_blank"
              className="custom-anchor font-weight-bold"
            >
              {" "}
              Kampagnenbündnis{" "}
            </a>{" "}
            alles versucht haben, damit die Bundestagsverwaltung den
            Anhörungstermin{" "}
            <a
              href="https://www.susannewiest.de/schnelle-anhoerung-tausche-oktober-gegen-juni/"
              target="_blank"
              className="custom-anchor font-weight-bold"
            >
              {" "}
              von Oktober auf Juni vorzieht
            </a>
            , erweitern wir jetzt unseren Maßnahmenkatalog: Die{" "}
            <a
              href="https://www.schippercompany.com/agentur/mensch-magazin/"
              target="_blank"
              className="custom-anchor font-weight-bold"
            >
              Schipper Company
            </a>
            hat, ebenfalls aus Begeisterung für dieses wichtige Thema, einen
            Imagefilm kreiert, der zum
            <Link to="/was-geht" className="custom-anchor font-weight-bold">
              {" "}
              gemeinsamen Handeln{" "}
            </Link>
            animiert – teilt ihn breit in den sozialen Medien, sodass immer mehr
            Menschen von dieser guten Idee erfahren und sorgt für mächtig viele
            Likes, unterzeichnet die
            <Link
              to="/grundeinkommen-jetzt"
              className="custom-anchor font-weight-bold"
            >
              {" "}
              Petition offline{" "}
            </Link>
            weiterhin mit und diskutiert die
            <Link
              to="/grundeinkommen-konkret"
              className="custom-anchor font-weight-bold"
            >
              {" "}
              konkreten Modelle{" "}
            </Link>
            , die wir dem Petitionsausschuss vorstellen werden. Außerdem laden
            wir vor der Anhörung im Oktober im Bundestag zur ‚Zuhörung‘ ein, in
            der Fragen zu den einzelnen Modellen gestellt und beantwortet werden
            können. Den genauen Termin, voraussichtlich in der ersten
            Septemberhälfte, geben wir rechtzeitig hier bekannt. Klar ist: Wir
            lassen nicht locker!
          </p>
        </div>
      </div>
      <div className="row">
        <div className="mx-auto">
          <div className="row mx-0">
            <div className="mx-auto">
              <p className="abbinder mb-3 mb-lg-0 m-0 mx-auto">
                Existenzsicherung ist ein Menschenrecht. Vertrauen die neue
                Währung.
                <br />
              </p>
            </div>
          </div>
          <div className="container">
            <div className="row mb-5 mt-3">
              <div className="mx-auto">
                <a
                  href="https://www.youtube.com/watch?v=HdwbNECDqJE"
                  target="_blank"
                >
                  <Button variant="dark" className="btn btn-md-lg">
                    {" "}
                    TEILEN UND GEWINNEN <br className="d-md-none" />
                    <span className="d-none d-md-inline"> – </span>#CALLTOACTION
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <ImageMenu />
  </Layout>
)

export default IndexPage
