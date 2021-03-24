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
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                Faites-vous comprendre !
              </h4>
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
                    {getTranslation("source_language")}
                    {/* Choisir une <span className="bold">langue source</span> */}
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
                    {getTranslation("source_language")}
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

      <section className="text-to-translate">
        <h2 className="d-none">Texte a traduire</h2>
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="form-group">
                <label htmlFor="textToTranslate" className="title-content">
                  {getTranslation("translation_text")}
                </label>
                <textarea
                  name="textToTranslate"
                  id="textToTranslate"
                  className="form-control box-shadow"
                  placeholder={getTranslation("translation_text_box")}
                  value={text}
                  onChange={e => {
                    setText(e.target.value)
                  }}
                ></textarea>
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
