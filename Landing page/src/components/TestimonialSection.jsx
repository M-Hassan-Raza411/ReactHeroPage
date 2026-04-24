import React from 'react'
import data from '../Data/testimonial.json'
import TestimonialCard from './TestimonialCard'
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";
import "swiper/css";

const TestimonialSection = () => {
  return (
    <div className='TestimonialSection'>

      <div className="testimonialcontent">
        <h1 className='testimonialSectionTitle'>What People Say</h1>
        <p className='testimonialSectionDesc'>Feedback from industry Leaders and Tech Partners.</p>
      </div>

      <div className="testimonialcardparent">
        <Swiper
          slidesPerView={1}
          loop={true}
          speed={2000}
          spaceBetween={60}
          autoplay={{
            delay: 1000,
            disableOnInteraction: false,
            pauseOnMouseEnter: false,
          }}
          breakpoints={{
            786: {
              slidesPerView: 2,
              spaceBetween: 20,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 24,
            },
          }}
          allowTouchMove={false}
          grabCursor={false}
          watchSlidesProgress={true}
          resistanceRatio={0}
          modules={[Autoplay]}
        >
          {data.map((testimonial, idx) => (
            <SwiperSlide key={idx}>
              <TestimonialCard
                name={testimonial.name}
                quote={testimonial.quote}
                role={testimonial.role}
                image={testimonial.image}
              />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  )
}

export default TestimonialSection
