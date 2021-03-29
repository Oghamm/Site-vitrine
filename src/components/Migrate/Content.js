import React, { useState } from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import { request, gql } from "graphql-request"

const Content = () => {
    const { getTranslation } = useIntlFromDocs()

    const [refonte, setRefonte] = useState("yes")
    const [features, setFeatures] = useState([])
    const [services, setServices] = useState([])
    const [formValue, setFormValue] = useState({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
    })

    const serviceList = [
        "Rédaction",
        "Traduction",
        "Référencement",
        "Graphisme",
    ]
    const featuresList = [
        "Actualités",
        "Agenda",
        "Annuaire",
        "Catalogue",
        "Recherche",
        "Formulaire contact",
        "Gallerie photos",
        "Sondage",
        "Multi-langue",
        "Newsletter",
        "Gallerie vidéos",
        "Flux RSS",
        "Commentaires",
        "Carte",
        "Plu-in sociaux",
        "Espace client",
        "Forum",
        "Animations",
        "Import/export"
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
                                La plateforme de rédaction pour tous vos contenus
                            </h4>
                        </div>

                        <div className="col-12">
                            <p className="intro__text">Profitez de l’expertise de notre équipe et du savoir-faire de nos
                                rédacteurs professionnels pour faire<br/> rédiger vos textes, rapidement et sans effort
                                !</p>
                        </div>
                    </div>
                </div>
            </section>
            <section className="visuel_identity">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="functionnality__title section-title">
                                Souhaitez vous une refonte graphique ?

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
            <section className={"visuel_identity"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className="col-12">
                            <h4 className="functionnality__title section-title">
                                Site à migrer
                            </h4>
                        </div>
                        <div className="col-12">
                            <div className="contact__form no-border">
                                <form>
                                    <div className="form-group">
                                        <label htmlFor="lastName">URL du site</label>
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

            <section className="visuel_identity">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="functionnality__title section-title">
                                Choisissez vos fonctionnalités

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

            <section className="visuel_identity">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="functionnality__title section-title">
                                Nos services complémentaires

                            </h4>
                        </div>

                        <div className="col-12">
                            <div className="all-btn-choices functionnality__choices">
                                {serviceList.map(feature => {
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

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="contact__title section-title">
                                {getTranslation("contact_infos")}
                            </h4>
                        </div>

                        <div className="col-12">
                            <div className="contact__form no-border">
                                <form onSubmit={handleFormSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="lastName">{getTranslation("last_name")}</label>
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
                                            {getTranslation("first_name")}
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
                                        <label htmlFor="email">{getTranslation("email")}</label>
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
                                        <label htmlFor="phone">{getTranslation("phone_number")}</label>
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
                                        {getTranslation("validate")}
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
