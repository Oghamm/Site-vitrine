import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Banner = () => {
    const { getTranslation } = useIntlFromDocs()

    return (
        <div className="banner">
            <div className="p-absolute">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <h1 className="banner__title white">Politique de confidentialité</h1>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Banner