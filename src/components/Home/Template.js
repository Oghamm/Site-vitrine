import React from "react"

const Template = () => {

  return (
    <section className="template">
      <div className="container template__container">
        <div className="row">
          <div className="col-12">
            <h2 className="h1-style template__title">
              Modèles personnalisables
            </h2>

            <p className="template__subtitle">
              Gratuit ou exclusifs, les modèles sont prêts à l'emploi et personalisables. Faites votre choix!
            </p>

            <div className="template__content">
              <div className="template__card">
                <a href="" className="template__card--link"></a>

                <p className="template__card--price"></p>
                <div className="template__card--exclusive">
                  <img
                      src="/img/home/template/template-icon-free.svg"
                      alt=""
                      className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    Modèle gratuit
                  </p>
                  <div className="free__more">
                    2 variantes
                    <i className="fas fa-chevron-down"></i>
                  </div>

                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price"></p>
                <div className="template__card--private">
                  <img
                      src="/img/home/template/locked-padlock.svg"
                      alt=""
                      className="template__card--exclusive-img"
                  />
                  <p className="template__card--private-text">
                    Modèle réservé
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">49 €/mois</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    Modèle exclusif
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">39 €/mois</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    Modèle exclusif
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">39 €/mois</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    Modèle exclusif
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price"></p>
                <div className="template__card--private">
                  <img
                      src="/img/home/template/locked-padlock.svg"
                      alt=""
                      className="template__card--exclusive-img"
                  />
                  <p className="template__card--private-text">
                    Modèle réservé
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <a
              href="./choice-model.html"
              className="template__btn btn btn-primary"
            >
              En voir plus
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Template
