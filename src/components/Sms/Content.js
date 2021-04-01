import React, {useState} from "react";

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

                                            <div className="timer">
                                                <img src="/img/with-banner/registration/timer.svg"
                                                     className="timer__icon"/>
                                                    <p className="timer__text">01 : 30</p>
                                            </div>

                                            <form action="#" method="post">

                                                <div className="aside__content--fields">

                                                    <div className="form-group">
                                                        <label htmlFor="sms">Entrer le code reçu par sms</label>
                                                        <input type="text" name="sms" id="sms"/>
                                                    </div>

                                                </div>

                                                <div className="aside__content--button-timer">
                                                    <a href="./projects-and-models.html"
                                                       className="btn btn-primary">Valider</a>
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
                                                <h1 className="white content__title">S'inscrire</h1>
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