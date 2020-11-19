const stripe = require("stripe")(
  "sk_test_51HZGJLDmzUiZrO9satfFIq1RGFJGGXcjxojvuEvYVaAlAS2Rxnqgki41EGd62WZEjFqdm9KEAYbJRdeYrruoAklY00CPHPOMgq"
)
const { request, gql } = require("graphql-request")

exports.handler = async function (event, context) {
  const requestBody = JSON.parse(event.body)
  const {
    token: { id },
    metaData,
    type,
    charge: { amount, email },
  } = requestBody

  const charge = await stripe.charges.create({
    amount,
    currency: "EUR",
    metadata: type === "translate" ? {email} : {...metaData,email},
    receipt_email: email,
    description: "Serverless Stripe Test charge",
    source: id,
  })

  if (type === "translate") {
    const query = gql`
     mutation($message:String!){
    add(email:"${email}",stripeId:"${charge.id}",textToTranslate:$message,sourceLanguage:"${metaData.fromLanguage}",destinationLanguage:"${metaData.toLanguage}"){
      email
      stripeId
    }
  }
    `
    request(
      "https://api.graphqlsheet.com/api/1BIfKQ8ghw90xF5XjLtI0Dgt-uIJkcy6wrMjT9ldK_Hk?token=129ec03aab9199a7d6cd7b27f0ebc8074678b24c",
      query,
      {
        message: metaData.textToTranslate,
      }
    )
      .then(res => {
        console.log(res)
      })
      .catch(err => {
        console.log(err)
      })
  }

  return {
    statusCode: 200,
    body: JSON.stringify(event.body),
  }
}
