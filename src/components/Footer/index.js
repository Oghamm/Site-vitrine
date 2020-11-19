import React from "react"
import { Link } from "gatsby"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Footer = () => {
  const { getTranslation } = useIntlFromDocs()

  return (
    <footer className="footer bg-secondary">
      <div className="container-fluid full-padding">
        <div className="row footer__content">
          <div className="col-lg-5 footer__nav">
            <div className="row no-gutters">
              <div className="col-lg-4 footer__newsletter footer__newsletter--responsive">
                <p className="footer__title">
                  {getTranslation("newsletter_subscribe")}
                </p>

                <div className="form-group footer__newsletter-content footer__newsletter-content--responsive">
                  <form action="#" method="GET">
                    <input
                      type="email"
                      className="form-control"
                      name="newsletterEmail"
                      placeholder={getTranslation("email_address")}
                    />

                    <button
                      type="submit"
                      className="btn btn-primary footer__newsletter-content--btn"
                    >
                      Ok
                    </button>
                  </form>
                </div>

                <div className="footer__newsletter-location footer__newsletter-location--responsive">
                  <i className="fas fa-map-marker-alt"></i>

                  <p>Paris, France</p>
                </div>
              </div>

              <div className="col-lg-3 text-center footer__language footer__language--responsive">
                <div className="form-group inline transparent select-transparent">
                  <select id="language_footer" className="form-control">
                    <option value="FR" selected>
                      Français
                    </option>
                    <option value="EN">Anglais</option>
                  </select>
                </div>
              </div>

              <div className="col-lg-4">
                <p className="footer__title">{getTranslation("offers")}</p>

                <ul className="footer__nav-menu">
                  <li>
                    <a href="./offer.html">{getTranslation("starter")}</a>
                  </li>
                  <li>
                    <a href="./offer.html">{getTranslation("basic")}</a>
                  </li>
                  <li>
                    <a href="./offer.html">{getTranslation("premium")}</a>
                  </li>
                  <li>
                    <a href="./offer.html">{getTranslation("ecommerce")}</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 no-gutters">
                <p className="footer__title">{getTranslation("support")}</p>

                <ul className="footer__nav-menu">
                  <li>
                    <Link to="/faq">{getTranslation("faq")}</Link>
                  </li>
                  <li>
                    <Link to="/contact">{getTranslation("contact")}</Link>
                  </li>
                  <li>
                    <Link to="/about">{getTranslation("about")}</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 no-gutters">
                <p className="footer__title">{getTranslation("company")}</p>

                <ul className="footer__nav-menu">
                  <li>
                    <a href="">{getTranslation("infos")}</a>
                  </li>
                  <li>
                    <a href="">{getTranslation("terms")}</a>
                  </li>
                  <li>
                    <a href="">{getTranslation("privacy_policy")}</a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="col-lg-3 text-center footer__language--hide-responsive">
            <div className="form-group inline transparent select-transparent">
              <select id="language_footer_2" className="form-control">
                <option value="FR" selected>
                  Français
                </option>
                <option value="EN">Anglais</option>
              </select>
            </div>
          </div>

          <div className="col-lg-4 footer__newsletter footer__newsletter--hide-responsive">
            <p className="footer__title">
              {getTranslation("newsletter_subscribe")}
            </p>

            <div className="form-group footer__newsletter-content footer__newsletter-content--hide-responsive">
              <form action="#" method="GET">
                <input
                  type="email"
                  className="form-control"
                  name="newsletterEmail"
                  placeholder={getTranslation("email_address")}
                />

                <button
                  type="submit"
                  className="btn btn-primary footer__newsletter-content--btn"
                >
                  Ok
                </button>
              </form>
            </div>

            <div className="footer__newsletter-location footer__newsletter-location--hide-responsive">
              <i className="fas fa-map-marker-alt"></i>

              <p>Paris, France</p>
            </div>
          </div>
        </div>

        <hr />

        <div className="row footer__bottom">
          <div className="col-12">
            <div className="d-flex align-items-center footer__bottom--content">
              <div className="footer__bottom--payments">
                <img src="/img/home/footer/paypal.svg" alt="" />
                <img src="/img/home/footer/stripe.svg" alt="" />
                <img src="/img/home/footer/mastercard.svg" alt="" />
                <img src="/img/home/footer/visa.svg" alt="" />
              </div>

              <div className="footer__bottom--practical-information">
                <p>21 ABC Street Geneva, Switzerland</p>
                <p>+1 123 456 789</p>
                <p>support@quintyss.com</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer
