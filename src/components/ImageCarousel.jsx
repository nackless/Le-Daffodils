// ImageCarousel.jsx
import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Pagination, Navigation, EffectFade } from 'swiper/modules';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';

// Slide data
const slides = [
  {
    image: "/images/slide01.jpg",
    txt1: "education applied.<br />quality assured.",
    txt2: "Lorem ipsum dolor sit amet.<br />Lorem ipsum dolor sit amet.<br />elementum st.",
  },
  {
    image: "/images/slide02.jpg",
    txt1: "Play & learn.<br />Games in teaching.",
    txt2: "donec iscasl solig<br />elementum leviosa estow<br />nakaru kiko.",
  },
  {
    image: "/images/slide03.jpg",
    txt1: "education<br />and care.",
    txt2: "donec iscasl solig<br />elementum leviosa estow<br />nakaru kiko.",
  },
];

// CSS styles
const styles = `
  #slider {
    margin: 0;
    position: relative;
  }

  .swiper-fade .swiper-slide-active,
  .swiper-fade .swiper-slide-next {
    transition: opacity 1.5s ease !important;
  }

  .swiper-slide {
    position: relative;
  }

  .swiper-slide img {
    width: 100%;
    height: auto;
  }

  /* Position pagination to bottom left */
.swiper-horizontal > .swiper-pagination-bullets,
.swiper-pagination-bullets.swiper-pagination-horizontal {
  bottom: 20px;
  left: 40px !important;
  width: auto !important;
  text-align: left;
}

  .flex-caption {
    position: absolute;
    width: auto;
    left: 8%;
    top: 50%;
    margin-top: -110px;
    text-align: left;
  }

  .flex-caption .txt1 {
    font-family: "Roboto", sans-serif;
    font-weight: 700;
    font-size: 40px;
    line-height: 1;
    color: #fff;
    text-transform: uppercase;
    padding-bottom: 15px;
  }

  .flex-caption .txt2 {
    font-family: "Roboto", sans-serif;
    font-weight: 400;
    font-size: 20px;
    line-height: 1.5;
    color: #fff;
    padding-bottom: 15px;
  }

  .btn-default.btn0 {
    display: inline-block;
    color: #fff;
    border: none;
    box-shadow: 0 6px #0072bf;
    -moz-box-shadow: 0 6px #0072bf;
    -webkit-box-shadow: 0 6px #0072bf;
    font-size: 14px;
    line-height: 20px;
    font-weight: 700;
    padding: 15px 80px 15px 40px;
    text-decoration: none;
    border-radius: 4px;
    -moz-border-radius: 4px;
    -webkit-border-radius: 4px;
    margin-top: 0px;
    margin-bottom: 0px;
    text-transform: uppercase;
    background: #00a8ff;
    position: relative;
  }
`;

const ImageCarousel = () => {
  return (
    <div id="slider" className="relative w-full">
      {/* Add custom styles to the DOM */}
      <style>{styles}</style>
      
      <Swiper
        spaceBetween={50}
        slidesPerView={1}
        effect={'fade'}
        fadeEffect={{ crossFade: true }}
        navigation={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        speed={1500} // Slower transition for fade effect
        modules={[Autoplay, Pagination, Navigation, EffectFade]}
        className="mySwiper"
      >
        {slides.map((slide, index) => (
          <SwiperSlide key={index}>
            <img src={slide.image} alt={`Slide ${index + 1}`} />
            <div className="flex-caption">
              <div className="flex-caption_inner container">
                <div 
                  className="txt1" 
                  dangerouslySetInnerHTML={{ __html: slide.txt1 }} 
                />
                <div 
                  className="txt2" 
                  dangerouslySetInnerHTML={{ __html: slide.txt2 }} 
                />
                <div className="txt3">
                  <a href="#" className="btn-default btn0">
                    contact us today
                  </a>
                </div>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default ImageCarousel;