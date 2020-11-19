import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Template = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="template">
      <div className="container template__container">
        <div className="row">
          <div className="col-12">
            <h2 className="h1-style template__title">
              {getTranslation("custom_models")}
            </h2>

            <p className="template__subtitle">
              {getTranslation("quintyss_services")}
            </p>

            <div className="template__content">
              <div className="template__card">
                <a href="" className="template__card--link"></a>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">900 €</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    {getTranslation("exclusive_model")}
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">900 €</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    {getTranslation("exclusive_model")}
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
                <p className="template__card--price">900 €</p>
                <div className="template__card--exclusive">
                  <img
                    src="/img/home/template/template-icon.svg"
                    alt=""
                    className="template__card--exclusive-img"
                  />
                  <p className="template__card--exclusive-text">
                    {getTranslation("exclusive_model")}
                  </p>
                </div>
              </div>

              <div className="template__card">
                <a href="" className="template__card--link"></a>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <a
              href="./choice-model.html"
              className="template__btn btn btn-primary"
            >
              {getTranslation("see_more")}
            </a>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Template
