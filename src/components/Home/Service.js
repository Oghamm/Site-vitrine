import React from "react"
import { Link } from "gatsby"

const Service = () => {

  return (
    <section className="service">
      <div className="service__background">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h2 className="h1-style service__title">
                Vous bénéficiez de notre expertise
              </h2>

              <p className="service__subtitle">
                  Tous les services Quintyss sont à votre disposition indépendamment les uns des autres.

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
                    <h4 className="service__card-content--title">Graphisme</h4>
                    <p className="service__card-content--text">
                      Notre pool de graphistes propose un catalogue adapté à tous les types d’activités. Vous pouvez
                      faire appel à eux pour personnaliser votre site, adapter un modèle importé, le créer
                      intégralement… Pour que votre site vous ressemble.
                    </p>
                    <Link
                      to="/graphisme"
                      className="service__card-content--link"
                    >
                      En savoir plus
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
                      Rédaction
                    </h4>
                    <p className="service__card-content--text">
                      Le rédactionnel est l’essence de votre site. Pages d’accueil, articles de blog, textes techniques,
                      fiches produits ou billets d’humeur… L’équipe de rédaction sont des professionnels spécialisés,
                      aux plumes affûtées. Exposez votre besoin, nous sélectionnons le rédacteur qu’il vous faut.
                    </p>
                    <Link to="/writing" className="service__card-content--link">
                      En savoir plus
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
                    Traduction
                  </h4>
                  <div className="service__card-content little">
                    <h4 className="service__card-content--title">Traduction</h4>
                    <p className="service__card-content--text">
                      Notre équipe de traducteurs certifiés transpose vos contenus dans la langue de votre choix.
                      Toujours de langue maternelle, ils garantissent non seulement la fidélité de la traduction,
                      mais aussi la qualité rédactionnelle des textes pour une lecture agréable.
                    </p>
                    <Link
                      to="/translate"
                      className="service__card-content--link"
                    >
                      En savoir plus
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
                    Stratégie & médias sociaux
                  </h4>
                  <div className="service__card-content small">
                    <h4 className="service__card-content--title">
                      Stratégie & médias sociaux
                    </h4>
                    <p className="service__card-content--text">
                      Pour gagner en visibilité, notre équipe média-stratégie vous conseille et prend en charge
                      l’intégralité de votre communication sur les réseaux sociaux : rédaction de contenu, vidéos à
                      poster, articles de blog…
                    </p>
                    <Link to="/social" className="service__card-content--link">
                      En savoir plus
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
            <h2 className="migrate__title">Migrer un site existant</h2>

            <div className="migrate__image migrate__image--responsive">
              <img
                className="migrate__image--img"
                src="/img/home/migrate/migrate.png"
                alt=""
              />
            </div>

            <p className="migrate__text">
              Vous souhaitez présenter sur votre site les dernières innovations graphiques et technologiques ?
              Maîtriser sans effort le contenu, proposer de nouvelles applications à vos visiteurs ?
              <br />
              <br />
              Contactez notre équipe projet pour une étude sans engagement.
            </p>

            <Link to="/migrate" className="migrate__btn btn btn-white">
              Je me lance !
            </Link>
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
                  Collaborer avec Quintyss
                </h2>

                <p className="collaborate__subtitle">
                Tous les services Quintyss sont à votre disposition indépendamment les uns des autres.
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
                        Designer
                      </h2>
                      <p className="collaborate__card--text">
                        Vous souhaitez présenter sur votre site les dernières innovations graphiques et technologiques
                        ? Maîtriser sans effort le contenu, proposer de nouvelles applications à vos visiteurs ?<br />
                        Notre solution Quintyss Business est pour vous.
                      </p>

                      <Link to={"/designer"}
                        className="collaborate__card--btn btn btn-primary"
                      >
                        Je me lance !
                      </Link>
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
                        Développeur
                      </h2>
                      <p className="collaborate__card--text">
                      Vous êtes développeur freelance, inscrivez-vous sur Quintyss et proposer vos compétences.
                        Notre plateforme recrute, met en relation...<br />
                        Elle est votre vitrine, avec le potentiel client d'un outil de gestion de contenu grand public.
                      </p>

                      <Link to={"/developer"}
                        className="collaborate__card--btn btn btn-primary"
                      >
                        Je me lance !
                      </Link>
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
