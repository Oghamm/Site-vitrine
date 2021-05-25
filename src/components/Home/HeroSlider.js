import React, {useEffect, useState} from "react"
import Slider from "react-slick"


const TitleVideo = (props) => {

  return (
      <span className="slide-video-text" id={"video-title-" + props.title}
            style={{display: (props.title === props.titleSelected ? "block": "none")}}>
            {props.children}
          </span>
  )
}

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



  const handleVideoMounted = (element) => {

    if (element !== null) {
        element.addEventListener("timeupdate",function () {
            if(element.currentTime > 3 && element.currentTime < 5.75) {
              setIdTitleSelected(2);
            }
            else if(element.currentTime > 5.94 && element.currentTime < 8.9) {
              setIdTitleSelected(3);
            }
            else if(element.currentTime > 9 && element.currentTime < 11.75) {
              setIdTitleSelected(4);
            }
            else if(element.currentTime > 12 && element.currentTime < 17.7) {
              setIdTitleSelected(5);
            }
            else if(element.currentTime > 17.9 && element.currentTime < 20.6) {
              setIdTitleSelected(6);
            }
            else if(element.currentTime > 21 && element.currentTime < 23.95) {
              setIdTitleSelected(7);
            }
            else if(element.currentTime > 23.95 && element.currentTime < 29.8) {
              setIdTitleSelected(8);
            }
        })
    }
  }
  const [idTitleSelected, setIdTitleSelected] = useState(1);



  return (
    <Slider {...settings} className="slider">
      <div className="slide-1">
        <video controls muted className="slider__video" id="home-video"
               ref={handleVideoMounted}>
          <source src="/img/home/slider/slider-1.mp4" type="video/mp4" />
        </video>

        <h2 className="slider__title white">
          <TitleVideo title={1} titleSelected={idTitleSelected}>
            Développez votre activité sur le Web
          </TitleVideo>
          <TitleVideo title={2} titleSelected={idTitleSelected}>
            Entrepreneur
          </TitleVideo>
          <TitleVideo title={3} titleSelected={idTitleSelected}>
            Indépendant
          </TitleVideo>
          <TitleVideo title={4} titleSelected={idTitleSelected}>
            Artiste ou créateur ?
          </TitleVideo>
          <TitleVideo title={5} titleSelected={idTitleSelected}>
            Confiez votre identité digitale à nos équipes <br /> et restez
            concentré sur votre activité
          </TitleVideo>
          <TitleVideo title={6} titleSelected={idTitleSelected}>
            Rédactions <br /> Articles de blogs
          </TitleVideo>
          <TitleVideo title={7} titleSelected={idTitleSelected}>
            Vidéos
          </TitleVideo>
          <TitleVideo title={8} titleSelected={idTitleSelected}>
            Nos professionnels assurent la création <br /> et le partage de
            contenus pertinents <br /> qui vous ressemblent
          </TitleVideo>
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
                <h2 className="slider__title white">Créez vos pages web</h2>
                <p className="slider__text">
                  Des fonctionnalités simples, intuitives, accessibles à tous… Quintyss Business la solution pour vous
                  guider dans la création de votre site Internet, quel que soit votre corps de métier.
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
                  Boostez votre visibilité
                </h2>
                <p className="slider__text">
                  Pour l’optimiser au jour le jour, nos équipes assurent la publication, le suivi et le renouvellement
                  de vos contenus. Si vous la souhaitez, Quintyss prend en charge l’intégralité de votre communication.
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
