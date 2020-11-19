import React from "react"
import { Elements } from "react-stripe-elements-universal"
import CheckoutForm from "./CheckoutFrom"

const Strips = ({
  finalPrice,
  toggleModal,
  toggleSucessModel,
  metaData,
  type,
}) => {
  return (
    <Elements hidePostalCode={true}>
      <CheckoutForm
        finalPrice={finalPrice}
        toggleModal={toggleModal}
        toggleSucessModel={toggleSucessModel}
        metaData={metaData}
        type={type}
      />
    </Elements>
  )
}

export default Strips
