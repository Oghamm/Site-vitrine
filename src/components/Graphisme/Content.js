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

  const featuresList = [
    "news",
    "agenda",
    "book",
    "catalog",
    "search",
    "contact_form",
    "gallery",
    "survey",
    "newsletter",
    "video_gallery",
    "rss_feed",
    "comments",
    "map",
    "social_plugins",
    "member_area",
    "forum",
    "animations",
    "import_export",
  ]

  const servicesList = ["writing", "translate", "seo"]

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
      <section className="intro">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="intro__title section-title">
                {getTranslation("writing_platform")}
              </h4>
            </div>

            <div className="col-12">
              <p className="intro__text">{getTranslation("writing_expertise")}</p>
            </div>
          </div>
        </div>
      </section>

      <section className="new-refonte">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="new-refonte__title section-title">
                {getTranslation("graphic_recast")}
              </h4>
            </div>

            <div className="col-12">
              <div className="all-btn-choices new-refonte__choices">
                <button
                  className={`btn-choice-unique ${
                    refonte === "yes" ? "selected" : ""
                  }`}
                  onClick={() => {
                    setRefonte("yes")
                  }}
                >
                  {getTranslation("yes")}
                </button>
                <button
                  className={`btn-choice-unique ${
                    refonte === "no" ? "selected" : ""
                  }`}
                  onClick={() => {
                    setRefonte("no")
                  }}
                >
                  {getTranslation("no")}
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="functionnality">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="functionnality__title section-title">
                {getTranslation("choice_features")}
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
                      {getTranslation(feature)}
                    </button>
                  )
                })}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="complementary">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h4 className="complementary__title section-title">
                {getTranslation("additional_services")}
              </h4>
            </div>
            <div className="col-12">
              <div className="all-btn-choices complementary__choices">
                {servicesList.map(service => {
                  return (
                    <button
                      className={`btn-choice ${
                        isActive(services, service) ? "selected" : ""
                      }`}
                      onClick={() => {
                        handleServicesClicked(service)
                      }}
                    >
                      {getTranslation(service)}
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
