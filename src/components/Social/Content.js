import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"
import Intro from "./Intro";

const Content = () => {
    const {getTranslation} = useIntlFromDocs()

    return (
        <section className={"contact"}>
            <div className={"container"}>
                <div className="row">
                    <div className="col-12">
                        <h4 className="intro__title section-title">
                            Pourquoi vous faire accompagner dans votre stratégie de communication sur les réseaux ?
                        </h4>
                    </div>

                    <div className="col-12">
                        <p className="intro__text">
                            Vous aurez de nombreuses actions à mener pour que votre stratégie soit payante :

                        </p>
                        <div className={"social__actions"}>
                            <p>
                                <ul>
                                    <br/>
                                    <li>Maîtriser tous les réseaux sociaux et leurs particularités, en connaitre
                                    les usages et les changements.</li>
                                    <br/>
                                    <li>Produire du contenu pour les alimenter : rédaction, création d'images,
                                    infographie, vidéos, podcasts, etc.</li>
                                    <br/>
                                    <li>Animer votre communauté: fédérer, fidéliser, créer des intéractions, informer,
                                    répondre, modérer, etc.</li>
                                    <br/>
                                    <li>Assurer une veille concurentille : surveiller l'e-réputation de votre entreprise
                                    , vous tenir informé des actions de vos concurents pour vous adapter aux
                                    évolutions.</li>
                                    <br/>
                                </ul>
                            </p>
                        </div>

                        <p className="intro__text">
                            Si vous êtes très à l'aise avec les médias sociaux et que vous disposez de suffisament
                            de temps, vous pouvez envisager de gérer cet aspect seul. Dans le cas contraire, chez
                            Quintyss, nous vous proposons les compétences d'un community manager professionnel. Il faut
                            avoir de la visibilité pour obtenir des clients et plus vous avez de clients, plus votre
                            notoriété augmente et plus vous gagnez en visibilité. Le jeu en vaut la chandelle : le
                            retour sur investissement est garanti!
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content