import React from "react"
import { Link } from "gatsby"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Service = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <section className="service">
      <div className="service__background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h1-style service__title">
                {getTranslation("expertise")}
              </h2>

              <p className="service__subtitle">
              {getTranslation("quintyss_services")}

              </p>

              <hr className="service__hr" />

              <div className="service__cards">
                <div className="service__card">
                  <div className="service__card-image">
                    <img
                      className="service__card-image--img"
                      src="/img/home/service/service-1.svg"
                      alt=""
                    />
                  </div>
                  <h4 className="service__card-content--title responsive">
                    Graphisme
                  </h4>
                  <div className="service__card-content little">
                    <h4 className="service__card-content--title">{getTranslation("graphism")}</h4>
                    <p className="service__card-content--text">
                      {getTranslation("graphism_pool")}
                    </p>
                    <Link
                      to="/graphisme"
                      className="service__card-content--link"
                    >
                      {getTranslation("more")}
                      {`>`}
                    </Link>
                  </div>
                </div>

                <div className="service__card">
                  <div className="service__card-image">
                    <img
                      className="service__card-image--img"
                      src="/img/home/service/service-4.svg"
                      alt=""
                    />
                  </div>
                  <h4 className="service__card-content--title responsive">
                    Rédaction
                  </h4>
                  <div className="service__card-content little">
                    <h4 className="service__card-content--title">
                      {getTranslation("writing")}
                    </h4>
                    <p className="service__card-content--text">
                      {getTranslation("writing_details")}
                    </p>
                    <Link to="/writing" className="service__card-content--link">
                      {getTranslation("more")}
                      {`>`}
                    </Link>
                  </div>
                </div>

                <div className="service__card">
                  <div className="service__card-image">
                    <img
                      className="service__card-image--img"
                      src="/img/home/service/service-3.svg"
                      alt=""
                    />
                  </div>
                  <h4 className="service__card-content--title responsive">
                  {getTranslation("translate")}
                  </h4>
                  <div className="service__card-content little">
                    <h4 className="service__card-content--title">{getTranslation("translate")}</h4>
                    <p className="service__card-content--text">
                      {getTranslation("translate_details")}
                    </p>
                    <Link
                      to="/translate"
                      className="service__card-content--link"
                    >
                      {getTranslation("more")}
                      {`>`}
                    </Link>
                  </div>
                </div>

                <div className="service__card">
                  <div className="service__card-image">
                    <img
                      className="service__card-image--img"
                      src="/img/home/service/service-2.svg"
                      alt=""
                    />
                  </div>
                  <h4 className="service__card-content--title responsive">
                    {getTranslation("social")}
                  </h4>
                  <div className="service__card-content small">
                    <h4 className="service__card-content--title">
                      {getTranslation("social")}
                    </h4>
                    <p className="service__card-content--text">
                      {getTranslation("social_details")}
                    </p>
                    <Link to="/social" className="service__card-content--link">
                      {getTranslation("more")}
                      {`>`}
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="migrate bg-primary">
          <div className="migrate__content">
            <h2 className="migrate__title">{getTranslation("migrate_site")}</h2>

            <div className="migrate__image migrate__image--responsive">
              <img
                className="migrate__image--img"
                src="/img/home/migrate/migrate.png"
                alt=""
              />
            </div>

            <p className="migrate__text">
              {getTranslation("features_4")}
              <br />
              <br />
              {getTranslation("contact_team")}
            </p>

            <a href="./migrate.html" className="migrate__btn btn btn-white">
              {getTranslation("go")}
            </a>
          </div>

          <div className="migrate__image">
            <img
              className="migrate__image--img"
              src="/img/home/migrate/migrate.png"
              alt=""
            />
          </div>
        </div>

        <div className="collaborate">
          <div className="container collaborate__container">
            <div className="row">
              <div className="col-12">
                <h2 className="h1-style collaborate__title">
                  {getTranslation("collaborate")}
                </h2>

                <p className="collaborate__subtitle">
                {getTranslation("quintyss_services")}
                </p>

                <div className="collaborate__content">
                  <div className="collaborate__card">
                    <div className="collaborate__card--header">
                      <div className="collaborate__card--image">
                        <img
                          src="/img/home/collaborate/collaborate-1.png"
                          alt=""
                          className="collaborate__card--image-img"
                        />
                      </div>
                    </div>

                    <div className="collaborate__card--content">
                      <h2 className="collaborate__card--title">
                        {getTranslation("designer")}
                      </h2>
                      <p className="collaborate__card--text">
                      {getTranslation("features_4")}<br />
                        {getTranslation("quintyss_solution")}
                      </p>

                      <a
                        href=""
                        className="collaborate__card--btn btn btn-primary"
                      >
                        {getTranslation("go")}
                      </a>
                    </div>
                  </div>

                  <div className="collaborate__card card-2">
                    <div className="collaborate__card--header">
                      <div className="collaborate__card--image blue">
                        <img
                          src="/img/home/collaborate/collaborate-2.png"
                          alt=""
                          className="collaborate__card--image-img"
                        />
                      </div>
                    </div>

                    <div className="collaborate__card--content">
                      <h2 className="collaborate__card--title blue">
                        {getTranslation("developer")}
                      </h2>
                      <p className="collaborate__card--text">
                      {getTranslation("features_4")}<br />
                        {getTranslation("quintyss_solution")}
                      </p>

                      <a
                        href=""
                        className="collaborate__card--btn btn btn-primary"
                      >
                        {getTranslation("go")}
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Service
