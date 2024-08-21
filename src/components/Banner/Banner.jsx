import "./Banner.css";
import { FaChevronRight,FaChevronLeft } from "react-icons/fa";

import { useState } from "react";
import banner1 from "../../assets/images/banner-01.jpg";
import banner2 from "../../assets/images/banner-02.jpg";
import banner3 from "../../assets/images/banner-03.jpg";

const Banner = () => {

    const [currentBannerByIndex, setCurrentBannerByIndex] = useState(0);

    const slides = [
        { url: banner1 },
        { url: banner2},
        { url: banner3},
      ];

      const goToPrevious = () => {
        const isFirstSlide = currentBannerByIndex === 0;
        const newIndex = isFirstSlide ? slides.length - 1 : currentBannerByIndex - 1;
        setCurrentBannerByIndex(newIndex);
      };

      const goToNext = () => {
        const isLastSlide = currentBannerByIndex === slides.length - 1;
        const newIndex = isLastSlide ? 0 : currentBannerByIndex + 1;
        setCurrentBannerByIndex(newIndex);
      };


      const goToSlide = (slideIndex) => {
        setCurrentBannerByIndex(slideIndex);
      };



  return (
    <section className="banner">
        
        <FaChevronLeft onClick={goToPrevious} className="banner__arrow_left"/>

        <FaChevronRight onClick={goToNext} className="banner__arrow_right"/>

      <img className="banner__img" src={`${slides[currentBannerByIndex].url}`} alt="banner" />

      <h1 className="banner__title">
        <span>
        Hurry!
        </span>
        <span>
          Get the best Villa for you
        </span>
      </h1>

      <div className="dots__container">
        {slides.map((slide, slideIndex) => (
          <div
            className={`dots__container_dot ${currentBannerByIndex===slideIndex ?'active': null}`}
            key={slideIndex}
            onClick={() => goToSlide(slideIndex)}
          >
            ●
          </div>
        ))}
      </div>
    </section>

  )
}

export default Banner
