import React from "react"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const Banner = () => {
    const { getTranslation } = useIntlFromDocs()

    return (
        <div className="banner">
            <div className="p-absolute">
            </div>
        </div>
    )
}

export default Banner
