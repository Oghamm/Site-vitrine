import React,{useState} from "react"
import { request, gql } from "graphql-request"

const Contact = ({fomValueReason}) => {

  const [formValue, setFormValue] = useState({
    raison:fomValueReason,
    nom: "",
    prenom: "",
    email: "",
    message: "",
  })

  const resetFromValues = () => {
    setFormValue({
      reason:fomValueReason,
      nom: "",
      prenom: "",
      email: "",
      message: "",
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
      add(raison:"${formValue.raison}",nom:"${formValue.nom}",prenom:"${formValue.prenom}",email:"${formValue.email}",message:"${formValue.message}"){
        nom
        prenom
        email
        message
      }
    }
    `
    request(
      "https://api.graphqlsheet.com/api/1q7OcX-tILd1dhPXRyw-nb23-aMUXUEEiYqIUtDxEqDI?token=b57fbdc61d831279d579249df7db74cf6067f495",
      query
    ).then(data => {
      if (data) {
        resetFromValues()
      }
    })
  }
  return (
    <div className="form-contact">
      <h2 className="form-contact__title">Contact</h2>

      <form onSubmit={handleFormSubmit}>
        <div className="form-double-element">
          <div className="form-group">
            <label htmlFor="lastName">Nom</label>
            <input
              type="text"
              name="nom"
              id="lastName"
              required={true}
              value={formValue.nom}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label htmlFor="firstName">Prénom</label>
            <input
              type="text"
              name="prenom"
              id="firstName"
              required={true}
              value={formValue.prenom}
              onChange={handleChange}
            />
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="email">E-mail</label>
          <input
            type="email"
            name="email"
            id="email"
            required={true}
            value={formValue.email}
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="message">Message</label>
          <textarea
            name="message"
            id="message"
            value={formValue.message}
            onChange={handleChange}
          />
        </div>

        <div className="button-box">
          <button type="submit" className="btn btn-primary">
            Envoyer
          </button>
        </div>
      </form>
    </div>
  )
}

export default Contact
