import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const ServiceCard = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="service-card">
      <div className="container service-card__container">
        <div className="row">
          <div className="col-12">
            <h2 className="h1-style service-card__title">
              {getTranslation("our_services")}
            </h2>

            <p className="service-card__subtitle">
                Tous les services Quintyss sont à votre disposition indépendamment les uns des autres.
            </p>

            <div className="service-card__content">
              <div className="service-card__img">
                <img src="/img/home/service/to-do-list.svg" alt="" />
              </div>

              <div className="service-card__aside">
                <p className="service-card__text">
                  {getTranslation("features_3")}
                </p>

                <a
                  href="./custom.html"
                  className="service-card__btn btn btn-primary"
                >
                  Je commence !
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default ServiceCard
