import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import Link from "gatsby-link";

const Steps = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="step">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="step__title">{getTranslation("new_identity")}</h1>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <div className="step__card">
              <div className="step__card-image">
                <img src="/img/home/step/step-1.svg" alt="" />
              </div>
              <div className="step__card-content">
                <h3 className="step__card-content--title">
                  {getTranslation("catalogue")}
                </h3>
                <p className="step__card-content-text">
                  {getTranslation("choice_model")}
                </p>
              </div>
            </div>

            <div className="step__card reverse">
              <div className="step__card-image reverse">
                <img src="/img/home/step/step-2.svg" alt="" />
              </div>
              <div className="step__card-content reverse">
                <h3 className="step__card-content--title">
                  {getTranslation("unique_design")}
                </h3>
                <p className="step__card-content-text">
                  {getTranslation("features_1")}
                </p>
              </div>
            </div>

            <div className="step__card">
              <div className="step__card-image">
                <img src="/img/home/step/step-3.svg" alt="" />
              </div>
              <div className="step__card-content">
                <h3 className="step__card-content--title">
                  {getTranslation("publish_share")}
                </h3>
                <p className="step__card-content-text">
                  {getTranslation("features_2")}
                </p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <Link to={"/models"}
              className="step__btn step__btn--end btn btn-primary"
            >
              {getTranslation("cta_1")}
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
