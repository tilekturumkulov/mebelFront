import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import { Navigation, Autoplay } from "swiper";

const Banner = () => {
    return (
        <section className='banner'>
<div className="container">
    <Swiper autoplay={true} loop={true} navigation={true} modules={[Navigation, Autoplay]} className="mySwiper">
        <SwiperSlide>
            <div className="banner__info">
                <h2 className="banner__title">
                    loft <br/>
                    мебель
                </h2>
                <p className="banner__text">
                    Современная и удобная мебель в Анапе
                </p>
                <button className="banner__btn">
                    СМОТРЕТЬ КАТАЛОГ
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="banner__info">
                <h2 className="banner__title">
                    loft <br/>
                    мебель
                </h2>
                <p className="banner__text">
                    Современная и удобная мебель в Анапе
                </p>
                <button className="banner__btn">
                    СМОТРЕТЬ КАТАЛОГ
                </button>
            </div>
        </SwiperSlide>
        <SwiperSlide>
            <div className="banner__info">
                <h2 className="banner__title">
                    loft <br/>
                    мебель
                </h2>
                <p className="banner__text">
                    Современная и удобная мебель в Анапе
                </p>
                <button className="banner__btn">
                    СМОТРЕТЬ КАТАЛОГ
                </button>
            </div>
        </SwiperSlide>

    </Swiper>
</div>
        </section>
    );
};

export default Banner;