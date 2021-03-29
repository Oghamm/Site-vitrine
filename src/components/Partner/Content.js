import React, { useState } from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import { request, gql } from "graphql-request"
import {Link} from "gatsby";

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
            <section className="intro_partner">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="intro__title section-title">
                                Programme partenaire
                            </h4>
                        </div>

                        <div className="col-12">
                            <p className="intro__text">Au sens large, le référencement est l’action de référencer une
                                chose (produits dans un magasin, informations, fichiers), c’est à dire de le mentionner
                                dans un <br/>système. Sur internet, le terme référencement a été repris pour définir
                                l’action
                                d’inscrire un site sur un moteur de recherche ou un annuaire. Le référencement<br/>
                                internet
                                ne se limite pas aux sites ou aux pages web. On peut en effet aussi référencer des
                                images, des documents (.doc, .pdf, .rar..), des vidéos, des produits, des <br/>lieux ou
                                encore des applications.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section>
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className="service__cards">
                                <div className="service__card">
                                    <div className="service__card-image">
                                        <img
                                            className="service__card-image--img"
                                            src="/img/home/service/service-4.svg"
                                            alt=""
                                        />
                                    </div>
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
            </section>

            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h4 className="contact__title section-title">
                                Postuler en tant que
                            </h4>
                        </div>

                        <div className="col-12">
                            <div className={"radio_btn"}>
                                <label className="container">Traducteur
                                    <input type="radio"  name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Rédacteur
                                    <input type="radio" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                                <label className="container">Community manager
                                    <input type="radio" name="radio"/>
                                    <span className="checkmark"></span>
                                </label>
                            </div>

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
