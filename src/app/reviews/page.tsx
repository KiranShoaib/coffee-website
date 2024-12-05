"use client";

import Image from "next/image";
import review1 from "../../../public/review1.jpg";
import review2 from "../../../public/review2.jpg";
import review3 from "../../../public/review3.jpg";
import review4 from "../../../public/review4.jpg";
import { FaQuoteLeft, FaQuoteRight, FaStar } from "react-icons/fa";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

function Reviews() {
  return (
    <section className="reviews" id="reviews">
      <h1 className="heading">
        reviews <span>what people say</span>
      </h1>

      <Swiper
        className="review-slider"
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={1}
        loop={true}
        grabCursor={true}
        pagination={{ clickable: true }}
        autoplay={{ delay: 7500, disableOnInteraction: false }}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
      >
        <SwiperSlide>
          <div className="box">
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
            <Image src={review1} alt="client picture" className="menu-img" />
            <div className="stars">
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
            <Image src={review2} alt="client picture" className="menu-img" />
            <div className="stars">
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
            <Image src={review3} alt="client picture" className="menu-img" />
            <div className="stars">
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          <div className="box">
            <FaQuoteLeft className="quote-left" />
            <FaQuoteRight className="quote-right" />
            <Image src={review4} alt="client picture" className="menu-img" />
            <div className="stars">
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
              <FaStar className="menu-star" />
            </div>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit.</p>
            <h3>john deo</h3>
            <span>satisfied client</span>
          </div>
        </SwiperSlide>
      </Swiper>
    </section>
  );
}

export default Reviews;
