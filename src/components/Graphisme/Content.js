import React, { useState } from "react"
import { request, gql } from "graphql-request"

const Content = () => {

  const [refonte, setRefonte] = useState("yes")
  const [features, setFeatures] = useState([])
  const [services, setServices] = useState([])
  const [formValue, setFormValue] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
  })

  const featuresList = [
    "Création de logo",
    "Webdesign",
    "Graphisme",
  ]



  const handleFeaturesClicked = feature => {
    const index = features.indexOf(feature)

    if (index === -1) {
      setFeatures([...features, feature])
    } else {
      setFeatures(features.splice(index, 1))
    }
  }

  const handleServicesClicked = service => {
    const index = services.indexOf(service)

    if (index === -1) {
      setServices([...services, service])
    } else {
      setServices(services.splice(index, 1))
    }
  }

  const isActive = (array, item) => {
    return array.includes(item)
  }

  const resetFromValues = () => {
    setFormValue({
      nom: "",
      prenom: "",
      email: "",
      phone: "",
    })
  }

  const handleChange = e => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    })
  }

  const handleFormSubmit = e => {
    e.preventDefault()

    const query = gql`
    mutation{
      add(nom:"${formValue.nom}",prenom:"${formValue.prenom}",email:"${
      formValue.email
    }",telephone:"${formValue.phone}",refonte:"${refonte}",features:"${
      features.length >= 1 ? features.join(",") : ""
    }",services:"${services.length >= 1 ? services.join(",") : ""}"){
        nom
        prenom
        email
        telephone
      }
    }
    `
    request(
      "https://api.graphqlsheet.com/api/1yWo1loG1ThzfKUe57EjMuV4gX6saN5eXRgAQspjXC0o?token=c5c4a546c2bdd27e076a18629cc64452990f64b3",
      query
    ).then(data => {
      if (data) {
        resetFromValues()
      }
    })
  }

  return (
    <>
      <section className="intro_graphisme">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                Faites-vous remarquer !
              </h4>
            </div>

            <div className="col-12">
              <p className="intro__text">Votre image, c'est vous. Soignez-la !</p>
            </div>
          </div>
        </div>
      </section>

      <section className="visuel_identity">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                Pourquoi l'identité visuelle est-elle si importante?
              </h4>
            </div>

            <div className="col-12">
              <p className="intro__text">L'identité visuelle d'un site est l'équivalent d'une vitrine pour une
              boutique : c'est la première chose qu'on voit, c'est la première impression qui s'en dégage.
                L'image d'un site(les couleurs, le logo, l'agencement), c'est aussi ce dont on se souvient.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="visuel_identity">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                Puis-je créer moi-même mon identité visuelle ?
              </h4>
            </div>

            <div className="col-12">
              <p className="intro__text">Quintyss met à votre disposition tout un catalogue de modèles clé en main.
              Vous pouvez personnaliser ces modèles et réaliser votre identité graphique en toute autonomie. Quintyss
              vous permet de créer vous-même vos pages web. Si votre site existe déjà, vous pouvez facilement le migrer
                vers notre plateforme.</p>
            </div>
          </div>
        </div>
      </section>
      <section className="visuel_identity">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                Pourquoi faire appel à un designer professionnel?
              </h4>
            </div>

            <div className="col-12">
              <div className={"graphisme_professional"}>
                <p className="intro__text">Voici quelques raisons de faire appel à une équipe de graphiste
                  professionnels :
                  <ul>
                    <br/>
                    <li>Vous avez des idées, mais vous ne savez pas comment les mettre en forme;</li>
                    <br/>
                    <li>Vous avez envie d'un site original et percutant, mais vous n'avez pas d'idée;</li>
                    <br/>
                    <li>Vous n'avez pas suffisament de temps à consacrer à la création design de votre site.</li>
                    <br/>
                  </ul>
                </p>
                <p>
                  Créer un logo, une charte graphique et une vrai identité visuelle demande du temps, de l'investissement
                  et un rél savoir-faire. Quintyss vous propose l'expertise et les compétences de designers expérimentés
                  pour créer une image qui vous ressemble.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>



      <section className="visuel_identity">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Quels sont vos besoins?

              </h4>
            </div>

            <div className="col-12">
              <div className="all-btn-choices functionnality__choices">
                {featuresList.map(feature => {
                  return (
                    <button
                      className={`btn-choice ${
                        isActive(features, feature) ? "selected" : ""
                      }`}
                      onClick={() => {
                        handleFeaturesClicked(feature)
                      }}
                    >
                      {feature}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className={"visuel_identity"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Quel est votre délais ? <em> (En mois)</em>
              </h4>
            </div>
            <div className="col-12">
              <div className={"delay_choice"}>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>1</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>2</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>3</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>4</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>5</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>6</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>7</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>8</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>9</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>10</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>11</span>
                </label>
                <label className={"label_container"}>
                  <input type={"radio"} name={"radio"}/>
                  <span className={"checkmark"}>12</span>
                </label>
              </div>
            </div>

          </div>

        </div>
      </section>

      <section className={"visuel_identity"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Avez-vous un site existant ?
              </h4>
            </div>
            <div className="col-12">
              <div className="contact__form no-border">
                <form>
                  <div className="form-group">
                    <label htmlFor="lastName">Lien du site</label>
                    <input
                        type="text"
                        id="link"
                        name="lien_du_site"
                        required={true}
                        className="form-control"
                    />
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>

      <section className={"visuel_identity"}>
        <div className={"container"}>
          <div className={"row"}>
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Spécificité de votre projet
              </h4>
            </div>
            <div className="col-12">
              <div className="contact__form no-border">
                <form>
                  <div className="form-group">
                    <label htmlFor="lastName">Décrivez vos besoins en quelques mots</label>
                    <textarea
                        id="link"
                        name="lien_du_site"
                        required={true}
                        className="form-control_description"
                    />
                  </div>
                </form>
              </div>

            </div>

          </div>

        </div>
      </section>
      <section className="visuel_identity">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                Intégrer notre outil de gestion de contenu Quintyss Business à votre projet

              </h4>
            </div>

            <div className="col-12">
              <div className={"gestion_button_container"}>
                <input type="radio" id="oui" name="select_tools"/>
                <input type="radio" id="non" name="select_tools"/>
                <div>
                  <label htmlFor="oui">Oui</label>
                  <label htmlFor="non">Non</label>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>



      <section className="contact">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="contact__title section-title">
                Informations de contact
              </h4>
            </div>

            <div className="col-12">
              <div className="contact__form no-border">
                <form onSubmit={handleFormSubmit}>
                  <div className="form-group">
                    <label htmlFor="lastName">Nom</label>
                    <input
                      type="text"
                      id="lastName"
                      name="nom"
                      value={formValue.nom}
                      onChange={handleChange}
                      required={true}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="firstName">
                      Prénom
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      name="prenom"
                      required={true}
                      value={formValue.prenom}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group input-lg">
                    <label htmlFor="email">E-Mail</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required={true}
                      value={formValue.email}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <div className="form-group input-lg">
                    <label htmlFor="phone">Numéro de téléphone</label>
                    <input
                      type="text"
                      id="phone"
                      name="phone"
                      required={true}
                      value={formValue.phone}
                      onChange={handleChange}
                      className="form-control"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary">
                    Valider
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default Content
