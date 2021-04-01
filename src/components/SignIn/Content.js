import React, {useState} from "react";
import { Link } from "gatsby"

const Content = () => {
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenuOpen = () => {
        setIsOpen(!isOpen)
    }

    return(
        <>
            <div className="container-fluid px-0 py-0">
                <div className="row main-content">
                    <div className="col-lg-5 col-md-6 bg-white aside">
                        <div className="top-bar container-fluid full-padding">
                            <div className="d-flex align-items-center">
                                <div className="top-bar__logo mr-auto">
                                    <a href="/">
                                        <img className="logo" src="/img/with-banner/logo-black.png"
                                             alt="Logo Quintyss"/>
                                    </a>
                                </div>

                            </div>
                        </div>

                        <div className="aside__container">
                            <div className="container-fluid full-padding">
                                <div className="row">
                                    <div className="col-12">

                                        <div className="aside__content">

                                            <a href="" className="btn btn-google">
                                                <img src="/img/with-banner/registration/google.svg" className="google-icon"/>
                                                    Continuer avec Google
                                            </a>

                                            <hr className={"separator"}/>

                                            <form action="#" method="post">

                                                <div className="aside__content--fields">

                                                    <div className="form-group">
                                                        <label htmlFor="emailOrPhone">E-mail ou numéros de
                                                            téléphone</label>
                                                        <input type="text" name="emailOrPhone" id="emailOrPhone"/>
                                                    </div>

                                                    <div className="form-group password">
                                                        <label htmlFor="password">Mot de passe</label>
                                                        <input type="password" name="password" id="password"/>
                                                    </div>

                                                </div>

                                                <div className="aside__content--button-forgot">
                                                    <a href="" className="forgot-password">Mot de passe oublié ?</a>
                                                    <a href="./projects-and-models.html"
                                                       className="btn btn-primary aside__content--login">Connexion</a>
                                                </div>

                                            </form>

                                        </div>

                                    </div>

                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="col-lg-7 col-md-6 bg-grey content">
                        <div className="container-fluid full-padding">
                            <div className="row">

                                <div className="col-12">
                                    <div className="top-bar">
                                        <div className="d-flex align-items-center">
                                            <a href="" className="btn btn-white top-bar__account mr-2 ml-auto">Se
                                                connecter</a>
                                            <div className="top-bar__language form-group inline select-blue">
                                                <select id="language_header" className="form-control">
                                                    <option value="FR" selected>FR</option>
                                                    <option value="EN">EN</option>
                                                </select>
                                            </div>
                                            <div className="top-bar__menu nav">
                                                <img
                                                    className="open-nav burger"
                                                    src="/img/menu-black.svg"
                                                    alt=""
                                                    onClick={toggleMenuOpen}
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
                                </div>

                                <div className="p-absolute">
                                    <div className="container-fluid full-padding">
                                        <div className="row">
                                            <div className="col-12">
                                                <h1 className="white content__title">Se connecter</h1>
                                                <div className="forgot-password__box">
                                                    <p className="forgot-password__text">Vous n’êtes pas encore inscrit
                                                        ?</p>
                                                    <Link to={"/signUp"}
                                                       className="btn btn-white forgot-password__btn">Inscrivez-vous</Link>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    )

}

export default Content