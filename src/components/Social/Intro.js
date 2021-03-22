import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Intro = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="intro">
      <div className="container">
        <div className="row">
          <div className="col-12">
            <h4 className="intro__title section-title">
              {getTranslation("make_yourself_known")}
            </h4>
          </div>

          <div className="col-12">
            <p className="intro__text">
              {getTranslation("social_media_description")}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
