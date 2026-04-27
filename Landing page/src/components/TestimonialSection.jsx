import React from 'react'
import data from '../Data/testimonial.json'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import { ChevronRight , ChevronLeft} from "lucide-react";

const TestimonialSection = () => {
  return (
    <div className='TestimonialSection'>

  <div className="testimonialcontent">
    <h1 className='testimonialSectionTitle'>What People Say</h1>
    <p className='testimonialSectionDesc'>
      Feedback from industry Leaders and Tech Partners.
    </p>
  </div>

  <div className="testimonialcardparent" style={{ position: "relative" }}>

    {/* LEFT */}
    <button className="slider-arrow left prev">
      <ChevronLeft size={30} />
    </button>

    {/* RIGHT */}
    <button className="slider-arrow right next">
      <ChevronRight size={30} />
    </button>

    <Swiper
      slidesPerView={1}
      loop={true}
      speed={1200}
      spaceBetween={40}

      autoplay={{
        delay: 3000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true,
      }}

      navigation={{
        prevEl: ".prev",
        nextEl: ".next",
      }}

      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}

      centeredSlides={true}
      grabCursor={true}
      watchSlidesProgress={true}

      modules={[Autoplay, Navigation]}
    >
      {data.map((testimonial, idx) => (
        <SwiperSlide key={idx}>
          <TestimonialCard {...testimonial} />
        </SwiperSlide>
      ))}
    </Swiper>

  </div>
</div>
  )
}

export default TestimonialSection
