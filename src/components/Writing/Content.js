import React, { useState } from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import Modali, { useModali } from "modali"
import Stripe from "../Stripe/Stripe"

const Content = () => {
  const { getTranslation } = useIntlFromDocs()
  const [numberToWrite, setNumberToWrite] = useState("5")
  const [numberWordsByText, setNumberWordsByText] = useState("240")
  const [textQuality, setTextQuality] = useState(0)
  const [options, setOptions] = useState([])
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

  const pricesOfTextQuality = [0.4, 0.6, 0.8]

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

      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="infos">
                <div className="infos__text">
                  <h4 className="intro__title section-title">
                    {getTranslation("writing_platform")}
                  </h4>

                  <p className="intro__text">
                    Profitez de l’expertise de notre équipe et du savoir-faire
                    de nos rédacteurs professionnels pour faire rédiger vos
                    textes, rapidement et sans effort !
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
                      {getTranslation("anti_plagiarism")}
                    </span>
                    ,<br /> {getTranslation("anti_plagiarism_2")}
                  </p>
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
                  <div className="setting__element">
                    <p className="setting__text">
                      <span className="bold">Nombre de textes</span>{" "}
                      {getTranslation("text_writing")}
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
                        {getTranslation("words_number")}
                      </span>{" "}
                      {getTranslation("per_text")}
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
              <p className="title-content">{getTranslation("text_quality")}</p>
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
                      {getTranslation("first_price")}
                    </label>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("first_price_description")}</p>
                  </div>

                  <div className="card-price">
                    <p>{getTranslation("first_price_price")}</p>
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
                      {getTranslation("second_price")}
                    </label>
                    <label
                      className="card-title--responsive"
                      htmlFor="textQuality-2"
                    >
                      Standard
                    </label>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("second_price_description")}</p>
                  </div>

                  <div className="card-price">
                    <p>{getTranslation("second_price_price")}</p>
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
                      {getTranslation("third_price_price")}
                    </label>
                    <label
                      className="card-title--responsive"
                      htmlFor="textQuality-3"
                    >
                      Professionnelle
                    </label>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("third_price_description")}</p>
                  </div>

                  <div className="card-price">
                    <p>{getTranslation("third_price_price")}</p>
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
                {getTranslation("options_choice")}
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
                    <p>{getTranslation("html_formating_description")}</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes(getTranslation("seo_optimization"))
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(getTranslation("seo_optimization"))
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
                            getTranslation("seo_optimization")
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-2">
                        {getTranslation("seo_optimization")}
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("seo_optimization_description")}</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes(getTranslation("hidden_order"))
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(getTranslation("hidden_order"))
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
                            getTranslation("hidden_order")
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-3">
                        {getTranslation("hidden_order")}
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("hidden_order_description")}</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes(getTranslation("research_documentation"))
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(
                      getTranslation("research_documentation")
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
                            getTranslation("research_documentation")
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-4">
                        {getTranslation("research_documentation")}
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>
                      {getTranslation("research_documentation_description")}
                    </p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes(getTranslation("proofreading"))
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(getTranslation("proofreading"))
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
                            getTranslation("proofreading")
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-5">
                        {getTranslation("proofreading")}
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("proofreading_description")}</p>
                  </div>
                </div>

                <div
                  className={`card card-choices ${
                    options.includes(getTranslation("done_with_you"))
                      ? "selected"
                      : ""
                  }`}
                  onClick={() => {
                    handleOptionsClicked(getTranslation("done_with_you"))
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
                            getTranslation("done_with_you")
                          )}
                        />
                        <div className="marker"></div>
                      </div>
                      <label htmlFor="textOption-6">
                        {getTranslation("done_with_you")}
                      </label>
                    </div>

                    <div className="card-price">
                      <p>+20 %</p>
                    </div>
                  </div>

                  <div className="card-content">
                    <p>{getTranslation("done_with_you_description")}</p>
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
                  {getTranslation("volume_writing")}
                </h4>
                <a
                  href=""
                  className="btn btn-blue-transparent multiple-bar__btn"
                >
                  {getTranslation("ask_quote")}
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="recap bg-primary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="recap__content">
                <div className="recap__infos">
                  <h4 className="white bold mb-3">Récapitulatif de commande</h4>

                  <div className="recap__resume">
                    <div className="line">
                      <p className="title">Nombre de texte</p>
                      <p>{numberToWrite}</p>
                    </div>

                    <div className="line">
                      <p className="title">{getTranslation("words_number")}</p>
                      <p>{numberWordsByText}</p>
                    </div>

                    <div className="line">
                      <p className="title">{getTranslation("options")}</p>
                      <p>{options.join(", ")}</p>
                    </div>
                  </div>
                </div>
                <div className="recap__validation">
                  <p className="recap__validation--price">
                    {finalPrice.toLocaleString("fr-FR")} €
                  </p>
                  <button
                    className="btn btn-white recap__validation--valide"
                    onClick={toggleModal}
                  >
                    Valider
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
