import React from "react";
import { Data } from "./Data";
import "./quotations.css";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

// import required modules
import { Pagination } from "swiper";

const Quotations = () => {
  return (
    <div className="quotation__blob">
      <section className="quotation container section" id="quotations">
        <h2 className="section__title">Quotes</h2>
        <span className="section__subtitle">Famous peaple say</span>

        <Swiper
          className="quotation__container"
          loop={true}
          grabCursor={true}
          spaceBetween={24}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            576: {
              slidesPerView: 2,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 48,
            },
          }}
          modules={[Pagination]}
        >
          {Data.map(({ id, image, title, description }) => {
            return (
              <SwiperSlide className="quotation__card" key={id}>
                <img src={image} alt="" className="quotation__img" />
                <h3 className="quotation__name"> {title}</h3>
                <p className="quotation__description">{description}</p>
              </SwiperSlide>
            );
          })}
        </Swiper>
      </section>
    </div>
  );
};

export default Quotations;
