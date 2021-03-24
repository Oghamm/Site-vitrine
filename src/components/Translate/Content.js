import React, { useState } from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import Modali, { useModali } from "modali"
import Stripe from "../Stripe/Stripe"

const Content = () => {
  const { getTranslation } = useIntlFromDocs()
  const [text, setText] = useState("")
  const [fromLanguage, setFromLanguage] = useState("Français")
  const [toLanguage, setToLanguage] = useState("Anglais")
  const [modalConfig, toggleModal] = useModali({
    large: true,
  })
  const [open, setOpen] = useState(false);
  const [knowMore, setKnowMore] = useState(false);
  const handleShop = () => {
    setOpen(open => !open);
  }

  const handle_knowMore =() => {
    setKnowMore(knowMore => !knowMore);
  }

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

  const getWords = str => {
    if (text === "") return 0
    str = str.replace(/(^\s*)|(\s*$)/gi, "")
    str = str.replace(/[ ]{2,}/gi, " ")
    str = str.replace(/\n /, "\n")
    return str.split(" ").length
  }

  const finalPrice = getWords(text) * 0.5

  const metaData = { fromLanguage, toLanguage, textToTranslate: text }

  return (
    <>
      <Modali.Modal {...modalConfig}>
        <Stripe
          finalPrice={finalPrice}
          toggleModal={toggleModal}
          toggleSucessModel={toggleSucessModel}
          type={"translate"}
          metaData={metaData}
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
              <div className={"header_know_more"}>
                <h4 className="intro__title section-title">
                  Faites-vous comprendre !
                </h4>
                <div className={"know_more"} onClick={handle_knowMore}>
                  En savoir plus
                  <i className="fas fa-chevron-down"></i>
                </div>
              </div>

            </div>

            <div className="col-12">
              <p className="intro__text">
                Saviez-vous que le web influence 50% des ventes mondiales? Si vous souhaitez être accessible à
                l'international, il vous faut traduire votre site. En anglais, en allemand, en espagnol, en chinois
                ou en russe, quelle que soit votre cible, l'approximation linguistique n'est pas envisageable.
              </p>
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
                  Des traducteurs natifs et spécialisés
                </h4>

              </div>

              <div className="col-12">
                <p className="intro__text">
                  Les traducteurs professionnels des équipes Quintyss sont des professionnels chevronnés qui traduisent
                  toujours vers leur langue maternelle. Leurs traductions sont conformes aux exigences de qualité
                  linguistique, terminologique et technique en fonction de votre domaine professionnel.
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
                  Une bonne traduction est un gage de confiance
                </h4>

              </div>

              <div className="col-12">
                <p className="intro__text">
                  Vous vous êtes sans doute déjà retrouvé sur un site visiblement traduit par les seuls soins d’un
                  traducteur automatique. Quelle expérience désagréable ! Un site bien traduit vous met en valeur,
                  laisse une bonne impression, inspire confiance et donne envie à l’utilisateur de revenir.
                </p>
              </div>
            </div>
          </div>
        </section>

      </>
      }

      <section className="setting">
        <h2 className="d-none">Langue source</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Sélectionnez vos besoins

              </h4>
              <div className="card box-shadow">
                <div className="setting__content">
                  <p className="setting__text">
                     Choisir une <span className="bold">langue source</span>
                  </p>
                  <div className="form-group select select-grey">
                    <select
                      name="firstLangue"
                      id="firstLangue"
                      className="form-control"
                      onChange={e => {
                        setFromLanguage(e.target.value)
                      }}
                    >
                      <option
                        value="Français"
                        selected={fromLanguage === "Français"}
                      >
                        Français
                      </option>
                      <option
                        value="Anglais"
                        selected={fromLanguage === "Anglais"}
                      >
                        Anglais
                      </option>
                      <option
                        value="Espagnol"
                        selected={fromLanguage === "Espagnol"}
                      >
                        Espagnol
                      </option>
                      <option
                        value="Italien"
                        selected={fromLanguage === "Italien"}
                      >
                        Italien
                      </option>
                      <option
                        value="Portugais"
                        selected={fromLanguage === "Portugais"}
                      >
                        Portugais
                      </option>
                    </select>
                  </div>
                  <p className="arrow bold">
                    ------<i className="fas fa-chevron-right"></i>
                  </p>
                  <p className="setting__text">
                    Choisir une <span className={"bold"}> langue cible</span>
                  </p>
                  <div className="form-group select select-grey">
                    <select
                      name="secondLangue"
                      id="secondLangue"
                      className="form-control"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                    >
                      <option
                        value="Français"
                        selected={toLanguage === "Français"}
                      >
                        Français
                      </option>
                      <option
                        value="Anglais"
                        selected={toLanguage === "Anglais"}
                      >
                        Anglais
                      </option>
                      <option
                        value="Espagnol"
                        selected={toLanguage === "Espagnol"}
                      >
                        Espagnol
                      </option>
                      <option
                        value="Italien"
                        selected={toLanguage === "Italien"}
                      >
                        Italien
                      </option>
                      <option
                        value="Portugais"
                        selected={toLanguage === "Portugais"}
                      >
                        Portugais
                      </option>
                    </select>
                  </div>
                </div>
              </div>

              <div className="card box-shadow card-responsive">
                <p className="setting__text">
                  {getTranslation("source_language")}
                </p>
                <div className="form-group select select-grey">
                  <select
                    name="firstLangue-responsive"
                    id="firstLangue-responsive"
                    className="form-control"
                    onChange={e => {
                      setToLanguage(e.target.value)
                    }}
                  >
                    <option
                      value="Français"
                      selected={toLanguage === "Français"}
                    >
                      Français
                    </option>
                    <option value="Anglais" selected={toLanguage === "Anglais"}>
                      Anglais
                    </option>
                    <option
                      value="Espagnol"
                      selected={toLanguage === "Espagnol"}
                    >
                      Espagnol
                    </option>
                    <option value="Italien" selected={toLanguage === "Italien"}>
                      Italien
                    </option>
                    <option
                      value="Portugais"
                      selected={toLanguage === "Portugais"}
                    >
                      Portugais
                    </option>
                  </select>
                </div>
              </div>

              <div className="card box-shadow card-responsive">
                <p className="setting__text">
                  Choisir une <span className="bold">langue cible</span>
                </p>
                <div className="form-group select select-grey">
                  <select
                    name="secondLangue-responsive"
                    id="secondLangue-responsive"
                    className="form-control"
                  >
                    <option
                      value="Français"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                      selected={fromLanguage === "Français"}
                    >
                      Français
                    </option>
                    <option
                      value="Anglais"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                      selected={fromLanguage === "Anglais"}
                    >
                      Anglais
                    </option>
                    <option
                      value="Espagnol"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                      selected={fromLanguage === "Espagnol"}
                    >
                      Espagnol
                    </option>
                    <option
                      value="Italien"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                      selected={fromLanguage === "Italien"}
                    >
                      Italien
                    </option>
                    <option
                      value="Portugais"
                      onChange={e => {
                        setToLanguage(e.target.value)
                      }}
                      selected={fromLanguage === "Portugais"}
                    >
                      Portugais
                    </option>
                  </select>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="setting">
        <h2 className="d-none">Nombre texte</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="card box-shadow">
                <div className="setting__content">
                  <p className="setting__text">
                    Nombre de mots à traduire
                  </p>

                  <div className="form-group select select-grey">
                    <select
                        name="numberToWrite"
                        id="numberToWrite"
                        className="form-control_number_words"

                    >
                      <option value="5">50</option>
                      <option value="10">100</option>
                      <option value="15">150</option>
                      <option value="20">200</option>
                    </select>
                  </div>
                    <p className="setting__text">
                      Délais de livraison estimé :{" "}
                    </p>
                  <p className="setting__text">
                    <span className="bold">
                        24 heures
                      </span>
                  </p>

                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="text-to-translate">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className={"text_to_translate_container"}>
                <div className={"import_files_container"}>
                  <img src="/img/with-banner/translate/upload.svg" alt="" />
                  <p>Glissez votre fichier <br/>ou parcourir vos fichiers<br/>
                    <span className={"bold"}>( .doc .docx .xls )</span></p>
                </div>
                <div className="form-group">
                <textarea
                    name="textToTranslate"
                    id="textToTranslate"
                    className="form-control box-shadow"
                    placeholder="Copier/coller ou taper votre texte"
                    value={text}
                    onChange={e => {
                      setText(e.target.value)
                    }}
                />
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
                  {getTranslation("volume_translation")}
                </h4>
                <a
                  href=""
                  className="btn btn-blue-transparent multiple-bar__btn"
                >
                  Obtenir un devis !
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

    </>
  )
}

export default Content
