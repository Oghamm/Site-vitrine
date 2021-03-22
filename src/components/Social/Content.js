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
                            {getTranslation("why_should_accompanied")}
                        </h4>
                    </div>

                    <div className="col-12">
                        <p className="intro__text">
                            {getTranslation("social_media_action")}
                        </p>
                        <div className={"social__actions"}>
                            <p>
                                <ul>
                                    <br/>
                                    <li>{getTranslation("social_media_li1")}</li>
                                    <br/>
                                    <li>{getTranslation("social_media_li2")}</li>
                                    <br/>
                                    <li>{getTranslation("social_media_li3")}</li>
                                    <br/>
                                    <li>{getTranslation("social_media_li4")}</li>
                                    <br/>
                                </ul>
                            </p>
                        </div>

                        <p className="intro__text">
                            {getTranslation("social_media_action_2")}
                        </p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Content