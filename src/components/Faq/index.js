import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import { useIntl } from "gatsby-plugin-intl"

const Index = () => {
  const { locale } = useIntl()
  const data = useStaticQuery(
    graphql`
      query FAQPageQuery {
        faq_page {
          get {
            titleFR
            titleEN
            contentFR
            contentEN
          }
        }
      }
    `
  )

  let faqs = []

  data.faq_page.get.forEach(row => {
    const titleKey = `title${locale.toUpperCase()}`
    const contentKey = `content${locale.toUpperCase()}`
    console.log({row,titleKey,contentKey})

    if (row[titleKey] && row[contentKey]) {
      faqs.push({
        title: row[titleKey],
        content: row[contentKey],
      })
    }
  })

  return (
    <div className="all-faq-element">
      {faqs.map(faq => (
        <div className="faq-element">
          <h4 className="faq-element__title">{faq.title}</h4>
          <p className="faq-element__text">{faq.content}</p>
        </div>
      ))}
    </div>
  )
}

export default Index
