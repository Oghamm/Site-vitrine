import React from "react"

const ServiceCard = () => {

  return (
    <section className="service-card">
      <div className="container service-card__container">
        <div className="row">
          <div className="col-12">
            <h2 className="h1-style service-card__title">
              Nos services à la carte
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
                  Vous souhaitez être autonome ou soutenu par nos experts, Quintyss est à votre disposition.
                  Sélectionnez les fonctionnalités, les options, les services complémentaires… Et n’utilisez que ce
                  dont vous avez besoin !
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
