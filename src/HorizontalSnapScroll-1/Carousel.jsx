/* eslint-disable react/prop-types */
import { useState, useEffect, useRef } from 'react';

const CarouselIndicators = ({ totalChildren, activeIndex, onClick }) => {
  const indicatorWidth = `${100 / totalChildren}%`;
  return (
    <div className="carousel__indicators">
      {Array.from({ length: totalChildren }).map((_, index) => (
        <span
          key={index}
          className={`carousel__indicator ${index === activeIndex ? 'active' : ''}`}
          style={{ width: indicatorWidth }}
          onClick={() => onClick(index)}
        />
      ))}
    </div>
  );
};

const Carousel = ({
  totalChildren,
  className = '',
  fullScreen = false,
  hideControlls = false,
  autoScrollDelay = 3500,
  key,
  children,
}) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const containerRef = useRef(null);

  const nextSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === totalChildren - 1 ? 0 : prevIndex + 1,
    );
  };

  const prevSlide = () => {
    setActiveIndex((prevIndex) =>
      prevIndex === 0 ? totalChildren - 1 : prevIndex - 1,
    );
  };

  const goToSlide = (index) => {
    setActiveIndex(index);
  };

  const handleAutoScroll = () => {
    if (!isPaused) {
      nextSlide();
    }
  };

  useEffect(() => {
    if (isPaused) return;
    const autoPlayInterval = setInterval(handleAutoScroll, autoScrollDelay);
    return () => clearInterval(autoPlayInterval);
  }, [autoScrollDelay, isPaused]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTo({
        left: activeIndex * containerRef.current.offsetWidth,
        behavior: 'smooth',
      });
    }
  }, [activeIndex]);

  return (
    <div
      className={`${className} carousel ${fullScreen ? 'carousel--fullscreen' : ''} `}
      tabIndex={0}
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      key={key}
    >
        <>
      {!hideControlls && (
        <button
          onClick={prevSlide}
          className="carousel_btn carousel__btn--prev"
          aria-label="Previous Slide"
        >
          <svg
            width="20px"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M9.4 233.4c-12.5 12.5-12.5 32.8 0 45.3l160 160c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L109.2 288 416 288c17.7 0 32-14.3 32-32s-14.3-32-32-32l-306.7 0L214.6 118.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-160 160z" />
          </svg>
        </button>
      )}
      <div
        className="carousel__container"
        ref={containerRef}
      >
        {children}
      </div>
      {!hideControlls && (
        <button
          onClick={nextSlide}
          className="carousel_btn carousel__btn--next"
          aria-label="Next Slide"
        >
          <svg
            width="20px"
            fill="white"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 448 512"
          >
            <path d="M438.6 278.6c12.5-12.5 12.5-32.8 0-45.3l-160-160c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L338.8 224 32 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l306.7 0L233.4 393.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0l160-160z" />
          </svg>
        </button>
      )}
      <CarouselIndicators
        totalChildren={totalChildren}
        activeIndex={activeIndex}
        onClick={goToSlide}
      />
      </>
    </div>
  );
};

export default Carousel;
