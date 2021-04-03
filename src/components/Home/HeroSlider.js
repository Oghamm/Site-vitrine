import React from "react"
import Slider from "react-slick"
import useIntlFromDocs from "../../hooks/useIntlFromDocs"

const PreviousArrow = ({ onClick }) => {
  return (
    <span className="arrows prev" onClick={onClick}>
      <i className="fas fa-chevron-left"></i>
    </span>
  )
}

const NextArrow = ({ onClick }) => {
  return (
    <span className="arrows next" onClick={onClick}>
      <i className="fas fa-chevron-right"></i>
    </span>
  )
}

const HeroSlider = () => {
  const { getTranslation } = useIntlFromDocs()
  const settings = {
    infinite: true,
    autoplay: true,
    autoplaySpeed: 10000,
    slidesToShow: 1,
    slidesToScroll: 1,
    dots: true,
    arrows: true,
    dotsClass: "slick-dots-c",
    focusOnSelect: true,
    prevArrow: <PreviousArrow />,
    nextArrow: <NextArrow />,
  }
  return (
    <Slider {...settings} className="slider">
      <div className="slide-1">
        <video controls muted className="slider__video" id="home-video">
          <source src="/img/home/slider/slider-1.mp4" type="video/mp4" />
        </video>

        <h2 className="slider__title white">
          <span className="slide-video-text" id="video-title-1">
            {getTranslation("slide-text-2")}
          </span>
          <span className="slide-video-text" id="video-title-2">
            Entrepreneur
          </span>
          <span className="slide-video-text" id="video-title-3">
            Indépendant
          </span>
          <span className="slide-video-text" id="video-title-4">
            Artiste ou créateur ?
          </span>
          <span className="slide-video-text" id="video-title-5">
            Confiez votre identité digitale à nos équipes <br /> et restez
            concentré sur votre activité
          </span>
          <span className="slide-video-text" id="video-title-6">
            Rédactions <br /> Articles de blogs
          </span>
          <span className="slide-video-text" id="video-title-7">
            Vidéos
          </span>
          <span className="slide-video-text" id="video-title-8">
            Nos professionnels assurent la création <br /> et le partage de
            contenus pertinents <br /> qui vous ressemblent
          </span>
        </h2>
        <a
          href="./choice-model.html"
          className="btn btn-primary slider__btn btn-video"
        >
          En savoir plus
        </a>
      </div>
      <div className="slide-3">
        <img
          className="slider__img"
          src="/img/home/slider/slider-3.png"
          alt=""
        />

        <div className="p-absolute">
          <div className="container-fluid full-padding">
            <div className="row">
              <div className="col-12 slider__content">
                <h2 className="slider__title white">{getTranslation("video_title_3")}</h2>
                <p className="slider__text">
                {getTranslation("slide_text_3")}
                </p>
                <a
                  href="./choice-model.html"
                  className="btn btn-primary slider__btn"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-4">
        <img
          className="slider__img"
          src="/img/home/slider/slider-4.png"
          alt=""
        />

        <div className="p-absolute">
          <div className="container-fluid full-padding">
            <div className="row">
              <div className="col-12 slider__content">
                <h2 className="slider__title white">
                {getTranslation("video_title_4")}
                </h2>
                <p className="slider__text">
                {getTranslation("slide_text_4")}
                </p>
                <a
                  href="./choice-model.html"
                  className="btn btn-primary slider__btn"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="slide-2">
        <img
            className="slider__img"
            src="/img/home/slider/slider-2.png"
            alt=""
        />

        <div className="p-absolute">
          <div className="container-fluid full-padding">
            <div className="row">
              <div className="col-12 slider__content">
                <h2 className="slider__title white">
                  Designer &<br/> développeur
                </h2>
                <p className="slider__text">Pour l’optimiser au jour le jour, nos équipes assurent la publication,
                  le suivi et le renouvellement de vos contenus. Si vous la souhaitez, Quintyss prend en charge
                  l’intégralité de votre communication.</p>
                <a
                    href="./choice-model.html"
                    className="btn btn-primary slider__btn"
                >
                  En savoir plus
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Slider>
  )
}

export default HeroSlider
