import React, {useState} from "react";
import {gql, request} from "graphql-request";

const Content = () => {

    const [open, setOpen] = useState(true);
    const [isDeveloped, setIsDeveloped] = useState(true);
    const [formValue, setFormValue] = useState({
        nom: "",
        prenom: "",
        email: "",
        phone: "",
    })

    const resetFromValues = () => {
        setFormValue({
            nom: "",
            prenom: "",
            email: "",
            phone: "",
        })
    }

    const handleChange = e => {
        setFormValue({
            ...formValue,
            [e.target.name]: e.target.value,
        })
    }

    const handleFormSubmit = e => {
        e.preventDefault()

        const query = gql`
    mutation{
      add(nom:"${formValue.nom}",prenom:"${formValue.prenom}",email:"${formValue.email}",phone:"${formValue.phone}"){
        nom
        prenom
        email
        phone
      }
    }
    `

        request(
            "https://api.graphqlsheet.com/api/1MU4rQSXumTWRYhaCR-YhgNi4waEd-6BwJleiv86JXWU?token=e17e80f45e98e35fcffcbada7f85422218a68edd",
            query
        ).then(data => {
            if (data) {
                resetFromValues()
            }
        })
    }

    function handleChecked() {
        setOpen(open => !open);
    }
    function handleIsDeveloped() {
        setIsDeveloped(true);
    }
    function handleNotDeveloped() {
        setIsDeveloped(false);
    }

    return(
        <>
            <img className={"logo__develop"}
                 src={"/img/with-banner/developer/background-2.svg"}
                 alt={"Logo Quintyss"}/>
            <div className={"slide__button"}>
                <input type="checkbox" id="lol-checkbox" onChange={handleChecked}/>

                    <label id="button" htmlFor="lol-checkbox">
                        <div id="knob"></div>
                        <div id="subscribe">Designeur</div>
                        <div id="alright">Developpeur</div>
                    </label>
            </div>
            <section className="intro_developer">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={"title_developer"}>
                                {open ? <h4 className="intro__title section-title">
                                    Développeur, travailler<br/> en collaboration avec Quintyss
                                </h4>:
                                    <h4 className="intro__title section-title">
                                        Designeur, travailler<br/> en collaboration avec Quintyss
                                    </h4>}

                                <img className={"logo"} src={"/img/with-banner/developer/logo.svg"}
                                     alt={"Logo Quintyss"}/>
                            </div>
                        </div>

                        <div className="col-12">
                            <p className="intro__text">Texte de norme pour l’intégration du modèle Profitez de
                                l’expertise de notre équipe et du savoir-faire de nos<br/> rédacteurs professionnels
                                pour faire rédiger vos textes, rapidement et sans effort ! </p>
                        </div>
                    </div>
                </div>
            </section>
            <section className={"content"}>
                <div className={"container"}>
                    <div className={"row"}>
                        <div className={"col-12"}>
                            <h4 className={"intro__titel section-title"}>
                                Pour qui ?
                            </h4>
                        </div>
                        <div className="col-12">
                            <p className="intro__text">Texte de norme pour l’intégration du modèle Profitez de
                                l’expertise de notre équipe et du savoir-faire de nos<br/> rédacteurs professionnels
                                pour faire rédiger vos textes, rapidement et sans effort ! </p>
                        </div>
                    </div>
                </div>
            </section>

            {!open &&
            <>
                <section className={"content"}>
                    <div className={"container"}>
                        <div className={"row"}>
                            <div className={"col-12"}>
                                <h4 className={"intro__title section-title"}>
                                    Informations modèle
                                </h4>
                            </div>
                            <div className={"col-12"}>
                                <p className="intro__text">Texte de norme pour l’intégration du modèle Profitez de
                                    l’expertise de notre équipe et du savoir-faire de nos<br/> rédacteurs professionnels
                                    pour faire rédiger vos textes, rapidement et sans effort ! </p>
                            </div>
                        </div>
                    </div>
                </section>
                <section className="contact">
                    <div className="container">
                        <div className="row">
                            <div className="col-12">
                                <div className="contact__form no-border">
                                    <form onSubmit={handleFormSubmit}>
                                        <div className={"title_developer"}>
                                            <div>
                                                <div className="form-group input-lg">
                                                    <label htmlFor="email">Lien du modèle</label>
                                                    <input
                                                        type="email"
                                                        id="email"
                                                        required={true}
                                                        value={formValue.email}
                                                        name="email"
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>

                                                <div className="form-group input-lg">
                                                    <label htmlFor="phone">Mot de passe du lien</label>
                                                    <input
                                                        type="text"
                                                        id="phone"
                                                        required={true}
                                                        name="phone"
                                                        value={formValue.phone}
                                                        onChange={handleChange}
                                                        className="form-control"
                                                    />
                                                </div>
                                                <div>
                                                    <div className={"title_developer_model"}>
                                                        <div>
                                                            <h4 className={"intro__title section-title"}>
                                                                Votre modèle est-il développé ?
                                                            </h4>
                                                            <div
                                                                className="switch-field model-developped"
                                                                id="choice-model-developped"
                                                            >
                                                                <input
                                                                    type="radio"
                                                                    id="modele-yes"
                                                                    name="model-developped"
                                                                    value="yes"
                                                                    onClick={handleIsDeveloped}
                                                                />
                                                                <label
                                                                    htmlFor="modele-yes"
                                                                    data-target="#model-developped-true"
                                                                >Oui</label
                                                                >
                                                                <input
                                                                    type="radio"
                                                                    id="modele-no"
                                                                    name="model-developped"
                                                                    value="no"
                                                                    onClick={handleNotDeveloped}
                                                                />
                                                                <label
                                                                    htmlFor="modele-no"
                                                                    data-target="#model-developped-false"
                                                                >Non</label
                                                                >
                                                            </div>
                                                            {isDeveloped ?
                                                                <div >
                                                                    <div className={"integrate__container"}>
                                                                        <h4 className={"intro__title section-title"}>
                                                                            Informations intégration
                                                                        </h4>
                                                                        <p className={"integrate_p"}>
                                                                            Texte de norme pour l’intégration du modèle
                                                                            Profitez de l’expertise de notre équipe et du
                                                                            savoir-faire de nos
                                                                            rédacteurs professionnels pour faire rédiger vos
                                                                            textes, rapidement et sans effort !
                                                                        </p>
                                                                    </div>

                                                                    <div className="form-group input-lg">
                                                                        <label htmlFor="email">Lien du modèle</label>
                                                                        <input
                                                                            type="email"
                                                                            id="email"
                                                                            required={true}
                                                                            value={formValue.email}
                                                                            name="email"
                                                                            onChange={handleChange}
                                                                            className="form-control"
                                                                        />
                                                                    </div>

                                                                    <div className="form-group input-lg">
                                                                        <label htmlFor="phone">Mot de passe du lien</label>
                                                                        <input
                                                                            type="text"
                                                                            id="phone"
                                                                            required={true}
                                                                            name="phone"
                                                                            value={formValue.phone}
                                                                            onChange={handleChange}
                                                                            className="form-control"
                                                                        />
                                                                    </div>
                                                                </div>
                                                                :<div>
                                                                    <h4 className={"intro__title section-title"}>
                                                                        Souhaitez-vous faire appel à un devellopeur ?
                                                                    </h4>
                                                                    <div className="switch-field model-developped">
                                                                        <input
                                                                            type="radio"
                                                                            id="need-dev-yes"
                                                                            name="need-developper"
                                                                            value="yes"
                                                                        />
                                                                        <label htmlFor="need-dev-yes">Oui</label>
                                                                        <input
                                                                            type="radio"
                                                                            id="need-dev-no"
                                                                            name="need-developper"
                                                                            value="no"
                                                                        />
                                                                        <label htmlFor="need-dev-no">Non</label>
                                                                    </div>
                                                                </div>}
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className={"integrate__container"}>
                                                    <h4 className={"intro__title section-title"}>
                                                        Option de publication
                                                    </h4>
                                                    <div className="input-radio-box">
                                                        <label className="input-radio"
                                                        >Privé
                                                            <input
                                                                type="radio"
                                                                name="opt-publish"
                                                            />
                                                            <span className="checkmark"></span>
                                                        </label>

                                                        <label className="input-radio"
                                                        >Public
                                                            <input type="radio" name="opt-publish"/>
                                                            <span className="checkmark"></span>
                                                        </label>
                                                    </div>
                                                </div>
                                                <div >
                                                    <div className="designer-price">
                                                        <h4 className={"intro__title section-title"}>Tarif du modèle
                                                        </h4>
                                                        <div className="form-group">
                                                            <input type="text" className="form-control"
                                                                   placeholder={"500"}/>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>


                                    </form>
                                </div>
                            </div>

                        </div>
                    </div>
                </section>
            </>
            }
            {open && <div className={"container"}>
                <div className="projects dev">
                    <p className="section__title bloc-text__title">
                        Projets développement disponibles
                    </p>

                    <div className="projects__content">
                        <div className="project">
                            <a href="" className="project__link">
                                <div className="project__top-bar">
                                    <img
                                        src="/img/with-banner/developer/project-quintyss.svg"
                                        className="project__img"
                                    />
                                    <div className="project__badges">
                                        <p className="project__badge secondary">
                                            php
                                        </p>
                                        <p className="project__badge primary">
                                            cms
                                        </p>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <p className="project__text">
                                        Texte de norme pour l’intégration du
                                        modèle Profitez de l’expertise de
                                        notre équipe.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <a href="" className="project__link">
                                <div className="project__top-bar">
                                    <img
                                        src="/img/with-banner/developer/project-quintyss.svg"
                                        className="project__img"
                                    />
                                    <div className="project__badges">
                                        <p className="project__badge secondary">
                                            php
                                        </p>
                                        <p className="project__badge primary">
                                            cms
                                        </p>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <p className="project__text">
                                        Texte de norme pour l’intégration du
                                        modèle Profitez de l’expertise de
                                        notre équipe.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <a href="" className="project__link">
                                <div className="project__top-bar">
                                    <img
                                        src="/img/with-banner/developer/project-quintyss.svg"
                                        className="project__img"
                                    />
                                    <div className="project__badges">
                                        <p className="project__badge secondary">
                                            php
                                        </p>
                                        <p className="project__badge primary">
                                            cms
                                        </p>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <p className="project__text">
                                        Texte de norme pour l’intégration du
                                        modèle Profitez de l’expertise de
                                        notre équipe.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <a href="" className="project__link">
                                <div className="project__top-bar">
                                    <img
                                        src="/img/with-banner/developer/project-quintyss.svg"
                                        className="project__img"
                                    />
                                    <div className="project__badges">
                                        <p className="project__badge secondary">
                                            php
                                        </p>
                                        <p className="project__badge primary">
                                            cms
                                        </p>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <p className="project__text">
                                        Texte de norme pour l’intégration du
                                        modèle Profitez de l’expertise de
                                        notre équipe.
                                    </p>
                                </div>
                            </a>
                        </div>
                        <div className="project">
                            <a href="" className="project__link">
                                <div className="project__top-bar">
                                    <img
                                        src="/img/with-banner/developer/project-quintyss.svg"
                                        className="project__img"
                                    />
                                    <div className="project__badges">
                                        <p className="project__badge secondary">
                                            php
                                        </p>
                                        <p className="project__badge primary">
                                            cms
                                        </p>
                                    </div>
                                </div>
                                <div className="project__content">
                                    <p className="project__text">
                                        Texte de norme pour l’intégration du
                                        modèle Profitez de l’expertise de
                                        notre équipe.
                                    </p>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
            }
            <section className="contact">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <div className={"title_developer"}>
                                {open ? <h4 className="contact__title section-title">
                                    Inscription développeur
                                    </h4>:<h4 className="contact__title section-title">
                                    Inscription designeur
                                    </h4>}

                            </div>
                        </div>

                        <div className="col-12">
                            <div className="contact__form no-border">
                                <form onSubmit={handleFormSubmit}>
                                    <div className={"title_developer"}>
                                        <div>
                                            <div className="form-group input-lg">
                                                <label htmlFor="email">E-mail</label>
                                                <input
                                                    type="email"
                                                    id="email"
                                                    required={true}
                                                    value={formValue.email}
                                                    name="email"
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                            </div>

                                            <div className="form-group input-lg">
                                                <label htmlFor="phone">Numéro de téléphone</label>
                                                <input
                                                    type="text"
                                                    id="phone"
                                                    required={true}
                                                    name="phone"
                                                    value={formValue.phone}
                                                    onChange={handleChange}
                                                    className="form-control"
                                                />
                                            </div>

                                            <button type="submit" className="btn btn-primary">
                                                Publier
                                            </button>
                                        </div>
                                        {open &&
                                        <div>
                                            <img className={"logo__subscription"}
                                                 src={"/img/with-banner/developer/background-2.svg"}
                                                 alt={"Logo Quintyss"}/>
                                        </div>}

                                    </div>

                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )

}

export default Content