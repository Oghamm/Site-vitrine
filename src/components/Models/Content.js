import React, {useState} from "react";
import Link from "gatsby-link";

const Content = () => {

    const [Open, setOpen] = useState(false);
    const [banner, setBanner] = useState(false);
    const [isOpen, setIsOpen] = useState(false)

    const toggleMenuOpen = () => {
        setIsOpen(!isOpen)
    }

    const handleClickUxagone =() => {
        setBanner(true);
    }

    const handleClickCross =() => {
        setBanner(false);
    }

    const handleClickRegister =() => {
        setOpen(false);
    }
    const handleClickEdit =() => {
        setOpen(true);
    }

    return(
        <>
            <main class="bg-grey">
                <div class="container-fluid full-padding">
                    <div class="content content-header">
                        <div class="content__menu nav">
                            <div class="content__logo">
                                <Link to="/" className={"logo"}>
                                    <img
                                        src="/img/with-banner/models/logo-bg-white.svg"
                                        alt=""
                                    />
                                </Link>
                            </div>

                            <img
                                class="open-nav burger"
                                src="/img/menu-black.svg"
                                alt=""
                                onClick={toggleMenuOpen}
                            />

                            <div class="nav-menu"
                                 style={{ display: isOpen ? "block" : "none" }}>
                                <div class="close">
                                    <img src="/img/close.svg" alt=""
                                    onClick={toggleMenuOpen}/>
                                </div>
                                <div class="nav-content">
                                    <ul>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 1</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 2</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 3</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 4</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 5</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 6</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 7</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 8</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 9</a>
                                        </li>
                                        <li class="nav-item">
                                            <a class="nav-link" href="">Lien 10</a>
                                        </li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    banner &&
                        <>
                            <div className="banner" id="banner">
                                <div className="close close-banner" onClick={handleClickCross}>
                                    <img src="/img/close.svg" alt=""/>
                                </div>
                                <div className="container">
                                    <div className="banner__content">
                                        <p className="banner__text">
                                            Vous avez choisi le mod??le
                                            <span className="banner__title"> Uxagone</span>
                                        </p>
                                        <Link   to={"/dashboard?siteId=4f4fc83d-f3e1-4607-9362-ff70ef5ec07e"}
                                            className="banner__btn btn btn-primary"
                                        >D??marrer la personnalisation</Link
                                        >
                                    </div>
                                </div>
                            </div>
                        </>
                }


                <div class="container">
                    <div class="row main-content">
                        <div class="col-lg-12 content">
                            {!Open ?
                                <>
                                    <div className={"personal-open"}>
                                        <div className={"edit"} onClick={handleClickEdit}>
                                            <i className="far fa-edit"></i>
                                        </div>
                                        <div className={"infos"}>
                                            <div className={"first"}>
                                                <div className={"title"}>
                                                    Henri Mistral
                                                </div>
                                                <div className={"line"}>
                                                    <img src={"/img/with-banner/models/email-2.svg"}/>
                                                    <p>florent@gmail.com</p>
                                                </div>
                                                <div className={"line"}>
                                                    <img src={"/img/with-banner/models/phone-call.svg"}/>
                                                    <p>0676315397</p>
                                                </div>
                                                <div className={"line"}>
                                                    <i className="fas fa-map-marker-alt"></i>
                                                    <p>94 rue des noyers, Savigny-sur-orge<br/> 91600 France</p>
                                                </div>

                                            </div>
                                            <div className={"second"}>
                                                <div
                                                    className="projects-and-models__choice form-group select"
                                                >
                                                    <select className="form-control">
                                                        <option selected disabled
                                                        >Starter
                                                        </option
                                                        >
                                                    </select>
                                                </div>
                                                <div className={"information-bloc"}>
                                                    <div className={"info-logo"}>
                                                        <img src={"/img/with-banner/models/check.svg"}/>
                                                    </div>
                                                    <div className={"info-text"}>
                                                        Fonctionnalit??s de base<br/> 10 pages<br/> Domaine gratuit pendant
                                                        1 an*<br/>
                                                        2 Go d???espace disque<br/> 2 Go de bande passante<br/> 2 bo??tes
                                                        e-mail*<br/>
                                                        Propuls?? par WebSelf
                                                    </div>

                                                </div>

                                            </div>
                                            <div className={"third"}>
                                                <div>
                                                    <p>Mot de passe</p>
                                                </div>
                                                <img src={"/img/with-banner/models/password.svg"}/>
                                            </div>
                                        </div>
                                    </div>
                                </> :
                                <>
                                    <div className={"personal"}>
                                        <div className={"edit"} onClick={handleClickEdit}>
                                            <i className="far fa-edit"></i>
                                        </div>
                                        <div className={"btn-primary"} onClick={handleClickRegister}>
                                            Enregistrer
                                        </div>
                                        <div className={"infos"}>
                                            <div className={"first"}>
                                                <div className={"title"}>
                                                    Henri Mistral
                                                </div>
                                                <div
                                                    className="projects-and-models__choice form-group select"
                                                >
                                                    <select className="form-control">
                                                        <option selected disabled
                                                        >Starter
                                                        </option
                                                        >
                                                    </select>
                                                </div>
                                                <div className={"information-bloc"}>
                                                    <div className={"info-logo"}>
                                                        <img src={"/img/with-banner/models/info.svg"}/>
                                                    </div>
                                                    <div className={"info-text"}>
                                                        Bloc information sur le service choisis Bloc information sur le service
                                                        Information sur le service choisis Bloc information
                                                    </div>

                                                </div>
                                            </div>
                                            <div className={"second"}>
                                                <form>
                                                    <div className={"line-form"}>
                                                        <img src={"/img/with-banner/models/email-2.svg"}/>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                id="link"
                                                                name="lien_du_site"
                                                                required={true}
                                                                className="form-control"
                                                                placeholder={"florent@gmail.com"}
                                                            />
                                                        </div>
                                                    </div>

                                                </form>
                                                <form>
                                                    <div className={"line-form"}>
                                                        <img src={"/img/with-banner/models/phone-call.svg"}/>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                id="link"
                                                                name="lien_du_site"
                                                                required={true}
                                                                className="form-control"
                                                                placeholder={"0676235384"}
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className={"line-form"}>
                                                        <i className="fas fa-map-marker-alt"></i>
                                                        <div className="form-group">
                                                            <input
                                                                type="text"
                                                                id="link"
                                                                name="lien_du_site"
                                                                required={true}
                                                                className="form-control"
                                                                placeholder={"Adresse"}
                                                            />
                                                        </div>
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="lien_du_site"
                                                            required={true}
                                                            className="form-control"
                                                            placeholder={"Ville"}
                                                        />
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="lien_du_site"
                                                            required={true}
                                                            className="form-control"
                                                            placeholder={"Code postal"}
                                                        />
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="lien_du_site"
                                                            required={true}
                                                            className="form-control"
                                                            placeholder={"Pays"}
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                            <div className={"third"}>
                                                <div>
                                                    <p>Mot de passe</p>
                                                </div>
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="lien_du_site"
                                                            required={true}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </form>
                                                <form>
                                                    <div className="form-group">
                                                        <input
                                                            type="text"
                                                            id="link"
                                                            name="lien_du_site"
                                                            required={true}
                                                            className="form-control"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </div>

                                    </div>

                                </>
                            }


                            <div class="projects-and-models">
                                <p class="projects-and-models__title">Mes sites</p>
                                <p class="projects-and-models__text">
                                    Texte de norme pour l???int??gration du mod??le
                                    Profitez de l???expertise de notre ??quipe et du
                                    savoir-faire de nos r??dacteurs professionnels
                                    pour faire r??diger vos textes, rapidement et
                                    sans effort ! Texte de norme pour l???int??gration
                                    du mod??le Profitez de
                                </p>
                            </div>

                            <div class="site-all-models">
                                <div class="site-model--box">
                                        <div class="site-model">
                                            <Link to={"/dashboard?siteId=4f4fc83d-f3e1-4607-9362-ff70ef5ec07e"}>
                                                <div className="infos">
                                                    <h4 className="infos--title">
                                                        Uxagone
                                                    </h4>

                                                    <div className="show">
                                                        <i className="fas fa-eye"></i>
                                                    </div>
                                                </div>
                                            </Link>
                                            <div className="action-bar">
                                                <button type="button" className="action-bar--btn">
                                                    <i className="fas fa-edit"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-duplicate">
                                                    <i className="fas fa-clone"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-remove">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>

                                                <label className="switch open-modal" data-modal="popin-visibility">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>

                                </div>
                                <div className="site-model--box">
                                    <a href="./structure.html">
                                        <div className="site-model">
                                            <div className="infos">
                                                <h4 className="infos--title">
                                                    Uxagone
                                                </h4>

                                                <div className="show">
                                                    <i className="fas fa-eye"></i>
                                                </div>
                                            </div>
                                            <div className="action-bar">
                                                <button type="button" className="action-bar--btn">
                                                    <i className="fas fa-edit"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-duplicate">
                                                    <i className="fas fa-clone"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-remove">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>

                                                <label className="switch open-modal" data-modal="popin-visibility">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </a>

                                </div>
                                <div className="site-model--box">
                                    <a href="./structure.html">
                                        <div className="site-model">
                                            <div className="infos">
                                                <h4 className="infos--title">
                                                    Uxagone
                                                </h4>

                                                <div className="show">
                                                    <i className="fas fa-eye"></i>
                                                </div>
                                            </div>
                                            <div className="action-bar">
                                                <button type="button" className="action-bar--btn">
                                                    <i className="fas fa-edit"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-duplicate">
                                                    <i className="fas fa-clone"></i>
                                                </button>

                                                <button type="button" className="action-bar--btn open-modal"
                                                        data-modal="popin-remove">
                                                    <i className="fas fa-trash-alt"></i>
                                                </button>

                                                <label className="switch open-modal" data-modal="popin-visibility">
                                                    <input
                                                        type="checkbox"
                                                        checked
                                                    />
                                                    <span className="slider"></span>
                                                </label>
                                            </div>
                                        </div>
                                    </a>

                                </div>

                            </div>
                            <div className="projects-and-models models">
                                <div className="projects-and-models__top-bar">
                                    <p className="projects-and-models__title no-gap">
                                        Mod??les
                                    </p>
                                    <div
                                        className="projects-and-models__choice form-group select"
                                    >
                                        <select className="form-control">
                                            <option selected disabled
                                            >Type de mod??les
                                            </option
                                            >
                                            <option value="">Mod??le public</option>
                                            <option value="">Mod??le priv??e</option>
                                            <option value="">Mod??le r??serv??</option>
                                        </select>
                                    </div>
                                </div>
                                <p className="projects-and-models__text">
                                    Texte de norme pour l???int??gration du mod??le
                                    Profitez de l???expertise de notre ??quipe et du
                                    savoir-faire de nos r??dacteurs professionnels
                                    pour faire r??diger vos textes, rapidement et
                                    sans effort ! Texte de norme pour l???int??gration
                                    du mod??le Profitez de
                                </p>
                            </div>
                            <div className="all-models">
                                <div className="model">
                                    <a className="model__link open-banner" data-target="#banner">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="model">
                                    <a className="model__link open-banner" data-target="#banner">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon-blue.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le public
                                                </p>
                                                <p className="model__price"></p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type locked">
                                                    <img
                                                        src="/img/with-banner/models/template-icon-locked.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le r??serv??
                                                </p>
                                                <p className="model__price"></p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>

                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                                <div className="model">
                                    <a className="model__link open-mockup" data-target="#mockup">
                                        <div className="model__header" onClick={handleClickUxagone}>
                                            <h4 className="model__title">
                                                Uxagone
                                            </h4>
                                        </div>
                                        <div className="model__body">
                                            <div className="model__top-bar">
                                                <p className="model__type">
                                                    <img
                                                        src="/img/with-banner/models/template-icon.svg"
                                                        className="model__icon"
                                                    />
                                                    Mod??le exclusif
                                                </p>
                                                <p className="model__price"><em>49 ??? </em>/mois</p>
                                            </div>
                                            <p className="model__text">
                                                Profitez de l???expertise de notre
                                                ??quipe et du savoir-faire de nos
                                                r??dacteurs professionnels pour faire
                                                r??diger vos textes, rapidement et
                                                sans effort !
                                            </p>
                                        </div>
                                    </a>
                                </div>
                            </div>


                        </div>


                    </div>
                </div>


            </main>
        </>
    )

}

export default Content
