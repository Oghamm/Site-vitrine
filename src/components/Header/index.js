import React, { useState } from "react"
import { Link } from "gatsby"
import { changeLocale, useIntl } from "gatsby-plugin-intl"

const Header = ({ children, black }) => {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  const intl = useIntl()

  return (
    <header>
      {black ? (
        <div className="top-bar container-fluid full-padding">
          <div className="d-flex align-items-center">
            <div className="top-bar__logo mr-auto">
              <Link to="/">
                <img
                  className="logo"
                  src="/img/with-banner/logo-black.png"
                  alt="Logo Quintyss"
                />
                <img
                  className="logo--responsive"
                  src="/img/with-banner/logo-responsive.png"
                  alt="Logo Quintyss"
                />
              </Link>
            </div>

            <Link to={"/signIn"}  className="btn btn-white top-bar__account mr-2">
              Se connecter
            </Link>

            <div className="top-bar__language form-group inline select-blue">
              <select
                id="language_header"
                className="form-control"
                onChange={e => {
                  changeLocale(e.target.value.toLowerCase())
                }}
              >
                <option value="FR" selected={intl.locale === "fr"}>
                  FR
                </option>
                <option value="EN" selected={intl.locale === "en"}>
                  EN
                </option>
                <option value="ES" selected={intl.locale === "es"}>
                  ES
                </option>
                <option value="IT" selected={intl.locale === "it"}>
                  IT
                </option>
                <option value="PT" selected={intl.locale === "pt"}>
                  PT
                </option>
              </select>
            </div>

            <div className="top-bar__menu nav">
              <img
                  className="open-nav burger"
                  src="/img/menu-black.svg"
                  alt=""
                  onClick={toggleMenuOpen}
              />
              <img
                  className="open-nav burger--responsive"
                  src="/img/menu-responsive.svg"
                  alt=""
              />

              <div
                  className="nav-menu"
                  style={{ display: isOpen ? "block" : "none" }}
              >
                <div className="close">
                  <img src="/img/close.svg" alt="" onClick={toggleMenuOpen} />
                </div>
                <div className="nav-content">
                  <ul>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 1
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 2
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 3
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 4
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 5
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 6
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 7
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 8
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 9
                      </a>
                    </li>
                    <li className="nav-item">
                      <a className="nav-link" href="">
                        Lien 10
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : (
        <div className="top-bar container-fluid full-padding">
          <div className="top-bar__logo mr-auto">
            <Link to="/">
              <img
                className="logo logo-white"
                src="/img/logo-white.png"
                alt="Logo Quintyss"
              />
              <img className="logo" src="/img/logo.png" alt="Logo Quintyss" />
            </Link>
          </div>

          <Link
            to="/signIn"
            className="btn btn-blue-transparent secondary top-bar__account mr-2"
          >
            Se connecter
          </Link>

          <div className="top-bar__language form-group inline select-blue-transparent">
            <select
              id="language_header"
              className="form-control"
              onChange={e => {
                changeLocale(e.target.value.toLowerCase())
              }}
            >
              <option value="FR" selected={intl.locale === "fr"}>
                FR
              </option>
              <option value="EN" selected={intl.locale === "en"}>
                EN
              </option>
              <option value="ES" selected={intl.locale === "es"}>
                ES
              </option>
              <option value="IT" selected={intl.locale === "it"}>
                IT
              </option>
              <option value="PT" selected={intl.locale === "pt"}>
                PT
              </option>
            </select>
          </div>

          <div className="top-bar__cart cart">
            <img src="/img/icons/cart.png" alt="cart" />
          </div>

          <div className="top-bar__menu nav">
            <img
              className="open-nav burger"
              src="/img/menu-black.svg"
              alt=""
              onClick={toggleMenuOpen}
            />
            <img
              className="open-nav burger--responsive"
              src="/img/menu-responsive.svg"
              alt=""
            />

            <div
              className="nav-menu"
              style={{ display: isOpen ? "block" : "none" }}
            >
              <div className="close">
                <img src="/img/close.svg" alt="" onClick={toggleMenuOpen} />
              </div>
              <div className="nav-content">
                <ul>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 1
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 2
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 3
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 4
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 5
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 6
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 7
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 8
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 9
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="">
                      Lien 10
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}
      {children}
    </header>
  )
}

export default Header
