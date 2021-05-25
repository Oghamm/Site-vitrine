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
                                La plateforme de rédaction pour tous vos contenus
                            </h4>
                        </div>

                        <div className="col-12">
                            <p className="intro__text">Décrivez vos besoins en rédaction, nos conseillers reviendront
                                rapidement vers vous pour vous <br/>accompagner dans votre projet.</p>
                        </div>
                    </div>
                </div>
            </section>

            <section className="contact">
                <div className="container">
                    <div className="row">

                        <div className="col-12">
                            <div className="contact__form no-border">
                                <form onSubmit={handleFormSubmit}>
                                    <div className={"flex_form"}>
                                        <div className="form-group">
                                            <label htmlFor="lastName">Nom & prénom</label>
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
                                                Numéro de téléphone
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
                                    </div>
                                    <div className={"flex_form"}>
                                        <div className="form-group">
                                            <label htmlFor="email">E-mail</label>
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
                                        <div className="form-group">
                                            <label htmlFor="phone">Société que vous représentez</label>
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
                                    </div>

                                    <div className="contact__form no-border">
                                        <form>
                                            <div className="form-group">
                                                <label htmlFor="lastName">Vos besoins en rédaction</label>
                                                <textarea
                                                    id="link"
                                                    name="lien_du_site"
                                                    required={true}
                                                    className="form-control_description"
                                                />
                                            </div>
                                        </form>
                                    </div>

                                    <button type="submit" className="btn btn-primary">
                                        Envoyer
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
