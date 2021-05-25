import React, { useState } from "react"
import { Link } from "gatsby"

const StickyHeader = ({ children, asideContent }) => {
  const [isOpen, setIsOpen] = useState(false)
  const [isOpenMobile, setIsOpenMobile] = useState(false)


  const toggleMenuOpen = () => {
    setIsOpen(!isOpen)
  }

  const toggleMobileMenuOpen = () => {
    setIsOpenMobile(!isOpenMobile)
  }
  return (
    <div className="container-fluid px-0 py-0">
      <div className="row main-content">
        <div className="col-lg-5 col-md-6 bg-white aside">
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

              <div className="top-bar__menu nav">
                <img
                  className="open-nav burger--responsive"
                  src="/img/menu-responsive.svg"
                  alt=""
                  onClick={toggleMobileMenuOpen}
                />

                <div
                  className="nav-menu"
                  style={{ display: isOpenMobile ? "block" : "none" }}
                >
                  <div className="close">
                    <img
                      src="/img/close.svg"
                      alt=""
                      onClick={toggleMobileMenuOpen}
                    />
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

          <div className="p-absolute aside__title">
            <div className="container-fluid full-padding">{asideContent}</div>
          </div>
        </div>

        <div className="col-lg-7 col-md-6 bg-grey content">
          <div className="container-fluid full-padding">
            <div className="row">
              <div className="col-12 top-bar--hide-responsive">
                <div className="top-bar">
                  <div className="d-flex align-items-center">
                    <a
                      href=""
                      className="btn btn-white top-bar__account mr-2 ml-auto"
                    >
                      Se connecter
                    </a>

                    <div className="form-group inline select-blue">
                      <select
                        id="language_header"
                        className="form-control"
                      >
                        <option value="FR" >
                          FR
                        </option>
                        <option value="EN" >
                          EN
                        </option>
                        <option value="ES" >
                          ES
                        </option>
                        <option value="IT" >
                          IT
                        </option>
                        <option value="PT" >
                          PT
                        </option>
                      </select>
                    </div>

                    <div className="top-bar__menu nav">
                      <img
                        className="open-nav burger"
                        src="/img/with-banner/burger-menu.svg"
                        alt=""
                        onClick={toggleMenuOpen}
                      />

                      <div
                        className="nav-menu grey"
                        style={{ display: isOpen ? "block" : "none" }}
                      >
                        <div className="close">
                          <img
                            src="/img/close.svg"
                            alt=""
                            onClick={toggleMenuOpen}
                          />
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
              </div>

              <div className="col-12">
                <div className="content__elements">{children}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StickyHeader
