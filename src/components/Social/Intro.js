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
              Faites-vous connaître !
            </h4>
          </div>

          <div className="col-12">
            <p className="intro__text">
              Aujourd'hui, pour une entreprise qui souhaite avoir de la visibilité et se faire connaître,
              les réseaux sociaux sont incontournables. Établir une véritable stratégie de communication
              demande du temps, de l'investissement et une réactivité de chaque instant.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Intro
