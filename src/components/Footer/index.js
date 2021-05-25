import React from "react"
import { Link } from "gatsby"

const Footer = () => {

  return (
    <footer className="footer bg-secondary">
      <div className="container-fluid full-padding">
        <div className="row footer__content">
          <div className="col-lg-5 footer__nav">
            <div className="row no-gutters">
              <div className="col-lg-4 footer__newsletter footer__newsletter--responsive">
                <p className="footer__title">
                  Inscrivez-vous à la newsletter!
                </p>

                <div className="form-group footer__newsletter-content footer__newsletter-content--responsive">
                  <form action="#" method="GET">
                    <input
                      type="email"
                      className="form-control"
                      name="newsletterEmail"
                      placeholder="Adresse e-mail"
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

                  <p>Paris, France</p>
                  <i className="fas fa-map-marker-alt"></i>
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
                <p className="footer__title">Nos offres</p>

                <ul className="footer__nav-menu">
                  <li>
                    <a href="./offer.html">Starter</a>
                  </li>
                  <li>
                    <a href="./offer.html">Basic</a>
                  </li>
                  <li>
                    <a href="./offer.html">Premium</a>
                  </li>
                  <li>
                    <a href="./offer.html">E-Commerce</a>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 no-gutters">
                <p className="footer__title">Support</p>

                <ul className="footer__nav-menu">
                  <li>
                    <Link to="/faq">FAQ</Link>
                  </li>
                  <li>
                    <Link to="/contact">Contact</Link>
                  </li>
                  <li>
                    <Link to="/about">à propos</Link>
                  </li>
                </ul>
              </div>

              <div className="col-lg-4 no-gutters">
                <p className="footer__title">Société</p>

                <ul className="footer__nav-menu">
                  <li>
                    <Link to="/partner">Programme partenaire</Link>
                  </li>
                  <li>
                    <Link to="/terms">Termes et conditions</Link>
                  </li>
                  <li>
                    <Link to="/privacy">Politique de confidentialité</Link>
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
              Inscrivez-vous à la newsletter!
            </p>

            <div className="form-group footer__newsletter-content footer__newsletter-content--hide-responsive">
              <form action="#" method="GET">
                <input
                  type="email"
                  className="form-control"
                  name="newsletterEmail"
                  placeholder="Adress e-mail"
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
              <div className={"footer__location"}>
                <p>Paris, France</p>
                <hr/>
              </div>
              <i className="fas fa-map-marker-alt"></i>
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
