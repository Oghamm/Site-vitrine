import React, {useEffect, useState} from "react"
import Modali, { useModali } from "modali"
import Link from "gatsby-link";
import Stripe from "../Stripe/Stripe"

const Content = () => {
  const [numberToWrite, setNumberToWrite] = useState("5")
  const [numberWordsByText, setNumberWordsByText] = useState("240")
  const [textQuality, setTextQuality] = useState(0)
  const [options, setOptions] = useState([])
  const [modalConfig, toggleModal] = useModali({
    large: true,
  })
  const [open, setOpen] = useState(false);
  const [knowMore, setKnowMore] = useState(false);

  const [sucessModel, toggleSucessModel] = useModali({
    animated: true,
    title: "Merci!",
    message: "Votre commande a bien été prise en compte.",
    buttons: [
      <Modali.Button
        label="OK"
        isStyleCancel
        onClick={() => toggleSucessModel()}
      />,
    ],
  })

  const pricesOfTextQuality = [0.4, 0.6, 0.8]

  const handleShop = () => {
    setOpen(open => !open);
  }

  const handle_knowMore =() => {
    setKnowMore(knowMore => !knowMore);
  }


  const handleOptionsClicked = option => {
    if (options.includes(option)) {
      setOptions(options.filter(optionI => optionI !== option))
    } else {
      setOptions([...options, option])
    }
  }

  const price =
    parseInt(numberToWrite) *
    parseInt(numberWordsByText) *
    pricesOfTextQuality[textQuality]

  const twentyOfPrice = price * 0.2

  const finalPrice = price + twentyOfPrice * options.length

  const metaData = {
    numberOfText: numberToWrite,
    numberOfWords: numberWordsByText,
    quality: textQuality,
    options: options.join(", "),
  }
  return (
    <>
      <Modali.Modal {...modalConfig}>
        <Stripe
          finalPrice={finalPrice}
          toggleModal={toggleModal}
          toggleSucessModel={toggleSucessModel}
          metaData={metaData}
          type={"writing"}
        />
      </Modali.Modal>
      <Modali.Modal {...sucessModel} />


      <div className={"sticky_container"}>
        {open &&
        <div className={"container_shop"}>
          <div className={"cross"} >
            Votre commande
            <div onClick={handleShop}>
              <i className="fas fa-times" ></i>
            </div>
          </div>
          <div className={"content"}>
            <div><p>Nb.de mots</p></div>
            <div className={"value"}><p>164</p></div>
          </div>
          <div className={"content"}>
            <div><p>Prix par mots</p></div>
            <div className={"value"}><p>16,90</p></div>
          </div>
          <div className={"content"}>
            <div><p>Langue source</p></div>
            <div className={"value"}><p>Français</p></div>
          </div>
          <div className={"content"}>
            <div><p>Langue cible</p></div>
            <div className={"value"}><p>Anglais</p></div>
          </div>
          <div className={"content"}>
            <div><p>Livraison estimée</p></div>
            <div className={"value"}><p>24h</p></div>
          </div>

          <div className={"validate"}>
            Valider
          </div>
        </div>
        }
        <div className={"sticky_shop"} onClick={handleShop}>
          <div>54,50 €</div>
          <img src="/img/icons/cart.png" alt="cart" />
        </div>
      </div>


      <section className="intro">

        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="infos">
                <div className="infos__text">
                  <div className={"header_know_more"}>
                    <h4 className="intro__title section-title">
                      Faites-vous entendre !
                    </h4>
                    <div className={"know_more"} onClick={handle_knowMore}>
                      En savoir plus
                      <i className="fas fa-chevron-down"></i>
                    </div>
                  </div>

                  <p className="intro__text">
                    Vous voulez que votre site apparaisse en tête des pages de résultats sur les moteurs de recherche?
                    Pour cela, un contenu optimisé est primordial.
                  </p>
                </div>

                <div className="infos__image">
                  <img
                    src="/img/with-banner/writing/medal.svg"
                    className="infos__image--img"
                    alt=""
                  />
                  <p className="infos__image--text">
                    <span className="bold">
                      Protection anti-plagiat,
                    </span>
                    <br /> Chaque texte fait l’objet d’une vérification copyscape contre le plagiat. Le rapport d’audit
                    copyscape vous est fourni.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {knowMore &&
      <>
        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="intro__title section-title">
                  Qu’est-ce qu’un contenu optimisé ?
                </h4>

              </div>

              <div className="col-12">
                <p className="intro__text">
                  Il s’agit de tout l’aspect rédactionnel de votre site. On dit qu’il est optimisé lorsqu’il est
                  conforme aux codes des algorithmes (principalement Google). Plus votre contenu est optimisé, meilleur
                  est votre référencement dans les pages de résultats des moteurs de recherche.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="intro__title section-title">
                  Qu’est-ce que l’expérience utilisateur ?
                </h4>

              </div>

              <div className="col-12">
                <p className="intro__text">
                  Le temps passé sur un site est aussi une donnée prise en compte par les algorithmes pour positionner
                  votre site. Plus l’internaute se sent bien sur votre site, plus il a envie d’y rester. Un contenu de
                  qualité est un élément indispensable pour une expérience utilisateur optimale.
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="content">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <h4 className="intro__title section-title">
                  Qu’est-ce que l’expérience utilisateur ?
                </h4>

              </div>

              <div className="col-12">
                <p className="intro__text">
                  <ul>
                    <br/>
                    <li>Il a une parfaite maîtrise de la langue ;</li>
                    <br/>
                    <li>Il connaît les règles des algorithmes et sait comment produire du contenu optimisé;</li>
                    <br/>
                    <li>Il rédige un contenu original : le plagiat est monnaie courante sur le web. Il est repéré et
                      pénalisé par les moteurs de recherche.</li>
                    <br/>
                  </ul>
                </p>
                <p className="intro__text">
                  Quintyss met à votre disposition une équipe de rédacteurs professionnels et performants, n’hésitez
                  pas à faire appel à eux !
                </p>
              </div>
            </div>
          </div>
        </section>
        </>
      }

      <section className="setting">
        <h2 className="d-none">Nombre texte</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card box-shadow">
                <div className="setting__content">
                  <div className="setting__element">
                    <p className="setting__text">
                      <span className="bold">Nombre de textes</span>{" "}
                      que souhaitez faire rédiger
                    </p>

                    <div className="form-group select select-grey">
                      <select
                        name="numberToWrite"
                        id="numberToWrite"
                        className="form-control"
                        onChange={e => {
                          setNumberToWrite(e.target.value)
                        }}
                      >
                        <option value="5">5</option>
                        <option value="10">10</option>
                        <option value="15">15</option>
                        <option value="20">20</option>
                      </select>
                    </div>
                  </div>

                  <div className="setting__element">
                    <p className="setting__text">
                      <span className="bold">
                        Nombre de mots
                      </span>{" "}
                      par texte
                    </p>

                    <div className="form-group select select-grey">
                      <select
                        name="numberWordsByText"
                        id="numberWordsByText"
                        className="form-control"
                        onChange={e => {
                          setNumberWordsByText(e.target.value)
                        }}
                      >
                        <option value="240">240</option>
                        <option value="480">480</option>
                        <option value="720">720</option>
                        <option value="960">960</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-quality">
        <h2 className="d-none">Qualité</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="title-content">Qualité des textes</p>
            </div>

            <div className="col-12">
              <div className="text-quality__content">
                <div
                  className={`card card-radio ${
                    textQuality === 0 ? "selected" : ""
                  }`}
                  onClick={() => {
                    setTextQuality(0)
                  }}
                >
                  <div className="card-input">
                    <div className="form-group radio">
                      <input
                        type="radio"
                        name="textQuality"
                        id="textQuality-1"
                        checked={textQuality === 0}
                      />
                      <div className="marker"></div>
                    </div>
                    <label htmlFor="textQuality-1">
                      Premier prix
                    </label>
                  </div>

                  <div className="card-content">
                    <p>Textes de qualité basique destinés à des descriptions simples et des rédactions de remplissage.</p>
                  </div>

                  <div className="card-price">
                    <p>0,04€ / mot</p>
                  </div>
                </div>

                <div
                  className={`card card-radio ${
                    textQuality === 1 ? "selected" : ""
                  }`}
                  onClick={e => {
                    setTextQuality(1)
                  }}
                >
                  <div className="card-input">
                    <div className="form-group radio">
                      <input
                        type="radio"
                        name="textQuality"
                        id="textQuality-2"
                        checked={textQuality === 1}
                      />
                      <div className="marker"></div>
                    </div>
                    <label className="card-title" htmlFor="textQuality-2">
                      Standard
                    </label>
                    <label
                      className="card-title--responsive"
                      htmlFor="textQuality-2"
                    >
                      Standard
                    </label>
                  </div>

                  <div className="card-content">
                    <p>Textes de qualité standard pour les lecteurs humains et les moteurs de recherche : billets de
                      blog, fiches articles, descriptions etc.</p>
                  </div>

                  <div className="card-price">
                    <p>0,06€ / mot</p>
                  </div>
                </div>

                <div
                  className={`card card-radio ${
                    textQuality === 2 ? "selected" : ""
                  }`}
                  onClick={e => {
                    setTextQuality(2)
                  }}
                >
                  <div className="card-input">
                    <div className="form-group radio">
                      <input
                        type="radio"
                        name="textQuality"
                        id="textQuality-3"
                        checked={textQuality === 2}
                      />
                      <div className="marker"></div>
                    </div>
                    <label className="card-title" htmlFor="textQuality-3">
                      Professionnelle
                    </label>
                    <label
                      className="card-title--responsive"
                      htmlFor="textQuality-3"
                    >
                      Professionnelle
                    </label>
                  </div>

                  <div className="card-content">
                    <p>Textes de qualité supérieure pour lecteurs professionnels : billets de blog, textes marketing,
                      textes d’actualité, rapports etc.</p>
                  </div>

                  <div className="card-price">
                    <p>0,08€ / mot</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-option">
        <h2 className="d-none">Option</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <p className="title-content">
                Choisissez vos options
              </p>
            </div>

            <div className="col-12">
              <div className="text-option__content">
                <div
                  className={`card card-choices ${
                    options.includes("Formatage HTML") ? "selected" : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked("Formatage HTML")
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-1"
                          checked={options.includes("Formatage HTML")}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-1">Formatage HTML</label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>Votre texte sera formaté en HTML avec les balises de titre (H1, H2 etc.), des paragraphes (P),
                      et si vous le souhaitez du gras ou de l’italique.</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes("Optimisation SEO")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked("Optimisation SEO")
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-2"
                          checked={options.includes(
                            "Optimisation SEO"
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-2">
                        Optimisation SEO
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>Votre texte sera optimisé pour le référencement. Précisez jusqu’à 3 mots-clés ou champs lexicaux
                      dans la description de chaque texte.</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes("Commande cachée")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked("Commande cachée")
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-3"
                          checked={options.includes(
                            "Commande cachée"
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-3">
                        Commande cachée
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>La commande sera réservée aux membres de Redacteur.com. Elle ne sera pas visible par les moteurs
                      de recherche.</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes("Recherche et documentation")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(
                      "Recherche et documentation"
                    )
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-4"
                          checked={options.includes(
                            "Recherche et documentation"
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-4">
                        Recherche et documentation
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>
                      À choisir si le rédacteur doit effectuer une recherche documentaire approfondie pour rédiger
                      vos textes.
                    </p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes("Relecture")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked("Relecture")
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-5"
                          checked={options.includes(
                            "Relecture"
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-5">
                        Relecture
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>Nos équipes assurent une relecture de votre/vos texte(s) afin de faire un point sur la cohérence
                      globale avec vos consignes et éliminer d’éventuelles inattentions.</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes("Accompagnement personnalisé")
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked("Accompagnement personnalisé")
                  }}
                >
                  <div className="card-top">
                    <div className="card-input">
                      <div className="form-group checkbox">
                        <input
                          type="checkbox"
                          name="textOption"
                          id="textOption-6"
                          checked={options.includes(
                            "Accompagnement personnalisé"
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-6">
                        Accompagnement personnalisé
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>Camille (notre chargée de relation client) vous accompagnera et vous aidera tout au long de
                      votre commande, du choix de vos rédacteurs jusqu’à la livraison des textes.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="multiple-bar">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="multiple-bar__content">
                <h4 className="multiple-bar__title">
                  Je souhaite faire rédiger des volumes importants et/ou récurrents
                </h4>
                <Link to={"/quoteW"} className="btn btn-blue-transparent multiple-bar__btn">
                  Obtenir un devis !
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
