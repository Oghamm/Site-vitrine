import React, { useState } from "react"
import { request, gql } from "graphql-request"

const Contact = () => {
  const [formValue, setFormValue] = useState({
    nom: "",
    prenom: "",
    email: "",
    phone: "",
  })

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
      add(nom:"${formValue.nom}",prenom:"${formValue.prenom}",email:"${formValue.email}",phone:"${formValue.phone}"){
        nom
        prenom
        email
        phone
      }
    }
    `

    request(
      "https://api.graphqlsheet.com/api/1MU4rQSXumTWRYhaCR-YhgNi4waEd-6BwJleiv86JXWU?token=e17e80f45e98e35fcffcbada7f85422218a68edd",
      query
    ).then(data => {
      if (data) {
        resetFromValues()
      }
    })
  }

  return (
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
                    required={true}
                    name="nom"
                    value={formValue.nom}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="firstName">Prénom</label>
                  <input
                    type="text"
                    id="firstName"
                    required={true}
                    name="prenom"
                    value={formValue.prenom}
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group input-lg">
                  <label htmlFor="email">E-mail</label>
                  <input
                    type="email"
                    id="email"
                    required={true}
                    value={formValue.email}
                    name="email"
                    onChange={handleChange}
                    className="form-control"
                  />
                </div>

                <div className="form-group input-lg">
                  <label htmlFor="phone">Numéro de téléphone</label>
                  <input
                    type="text"
                    id="phone"
                    required={true}
                    name="phone"
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
  )
}

export default Contact
