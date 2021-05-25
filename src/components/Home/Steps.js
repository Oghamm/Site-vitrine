import React from "react"
import Link from "gatsby-link";

const Steps = () => {

  return (
    <section className="step">
      <div className="container">
        <div className="row">
          <div className="col-12 text-center">
            <h1 className="step__title">Votre nouvelle identité visuelle en 3 étapes !</h1>
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
                  Un catalogue prêt à l’emploi…
                </h3>
                <p className="step__card-content-text">
                  Choisissez le modèle qui correspond à vos besoins. Quelle que soit votre activité, votre solution se
                  trouve dans notre catalogue. Vous pouvez également migrer un site existant vers la plateforme. Tout
                  est possible avec Quintyss Business !
                </p>
              </div>
            </div>

            <div className="step__card reverse">
              <div className="step__card-image reverse">
                <img src="/img/home/step/step-2.svg" alt="" />
              </div>
              <div className="step__card-content reverse">
                <h3 className="step__card-content--title">
                  Un design unique
                </h3>
                <p className="step__card-content-text">
                  Modifiez l’apparence, adaptez l’ergonomie aux besoins de vos visiteurs. Sélectionnez les
                  fonctionnalités qui correspondent à votre activité. Demandez des services personnalisés, nos experts
                  vous accompagnent (graphisme, rédaction, traduction, média sociaux).
                </p>
              </div>
            </div>

            <div className="step__card">
              <div className="step__card-image">
                <img src="/img/home/step/step-3.svg" alt="" />
              </div>
              <div className="step__card-content">
                <h3 className="step__card-content--title">
                  Publiez & partagez !
                </h3>
                <p className="step__card-content-text">
                  Votre portail est finalisé, nos équipes de spécialistes en stratégie médias et réseaux sociaux vous
                  accompagnent pour un maximum de visibilité.
                  Vous avez un savoir-faire… Nous allons le faire savoir !

                </p>
              </div>
            </div>
          </div>

          <div className="col-12 text-center">
            <Link to={"/models"}
              className="step__btn step__btn--end btn btn-primary"
            >
              Je commence !
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Steps
