import React, { useState } from "react"
import { CardElement, injectStripe } from "react-stripe-elements-universal"
import axios from "axios"

const CheckoutForm = ({stripe,finalPrice,toggleModal,toggleSucessModel,metaData,type}) => {

  const [email, setEmail] = useState("")
  const handleSubmit = ev => {
    ev.preventDefault()
    stripe.createToken().then(({ token }) => {
      const charge = JSON.stringify({
        token,
        metaData,
        charge: {
          amount: finalPrice*100,
          email: email,
        },
        type
      })
      axios
        .post(
          "/.netlify/functions/stripe",
          charge
        ).then(res => {
          if(res.data){
            toggleModal()
            toggleSucessModel()
          }
        })
        .catch(error => {
          console.log("error", error)
          // this.onError()
        })
    })
  }
  return (
    <>
    <div className="col-12">
      <div className="form-stripe">
        <h2 className="form-stripe__title">Paiment</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="email">E-Mail</label>
            <input
              type="email"
              name="email"
              id="email"
              required={true}
              value={email}
              onChange={e => {
                setEmail(e.target.value)
              }}
            />
          </div>

          <div className="form-group">
            <hr style={{background:'lightgrey',margin:'25px 0px'}}/>
          </div>

          <div className="form-group">
            <CardElement hidePostalCode={true}/>
          </div>

          <div className="button-box">
            <button type="submit" className="btn btn-primary">
            Prix {finalPrice.toLocaleString("fr-FR")} €
            </button>
          </div>
        </form>
      </div>
    </div>
    </>
  )
}

export default injectStripe(CheckoutForm)
