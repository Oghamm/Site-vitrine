import react from "react"
import { useStaticQuery, graphql } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

export default () => {
  const { locale } = useIntl()
  const data = useStaticQuery(graphql`
    query {
      tran {
        totalCount
        get(limit: 200) {
          label
          FR
          EN
          DE
          ES
          IT
          PT
        }
      }
    }
  `)

  const getTranslation = label => {
    const intls = data.tran.get

    const lableIntl = intls.find(intl => intl.label === label)
    return lableIntl ? lableIntl[locale.toUpperCase()] : "No Transation"
  }

  return {
    getTranslation,
  }
}
