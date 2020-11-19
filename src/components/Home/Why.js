import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Why = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="why bg-primary">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <div className="why__content">
              <p className="why__title">
                {getTranslation("quintyss_business")}
              </p>
              <p className="why__text">
                {getTranslation("quintyss_business_solution")}
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Why
