module.exports = {
  plugins: [
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-stripe`,
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "TRAN",
        fieldName: "tran",
        url:
          "https://api.graphqlsheet.com/api/1B4fk1Za6WY0mg6hp-NIBOGL8fu8rvw0VQbBdHnLKJik",
        headers: {
          "Content-Type": "application/json",
          token: "f5da182435c1a33bd2ab1ee5e903c29421a337d5",
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "ABOUT_PAGE",
        fieldName: "about_page",
        url:
          "https://api.graphqlsheet.com/api/13YR9OBDhYQM462nRy1kvy9xjvchr9jJ26sTAG_WQrZg",
        headers: {
          "Content-Type": "application/json",
          token: "6c5fdfea3c4868e39898d38dcfade9583a04c7c4",
        },
      },
    },
    {
      resolve: "gatsby-source-graphql",
      options: {
        typeName: "FAQ_PAGE",
        fieldName: "faq_page",
        url:
          "https://api.graphqlsheet.com/api/1yMPatRo3Ls4lZ1EapYokvcZ3A8OU_OyvIZpgXc5MV3A",
        headers: {
          "Content-Type": "application/json",
          token: "39e060698ebe40e26046a244623a0b99e7b8911e",
        },
      },
    },
    {
      resolve: `gatsby-plugin-intl`,
      options: {
        path: `${__dirname}/src/intl`,
        languages: [`fr`, `it`, `es`, `pt`, `en`],
        defaultLanguage: `fr`,
        redirect: true,
      },
    },
  ],
}
