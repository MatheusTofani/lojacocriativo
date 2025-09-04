"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { settingsHero } from './carouselConfig';

const HeroSlider = () => {

    return (
        <div className="relative">
            <Slider {...settingsHero}>
                <img className='md:h-[500px]  h-[150px] w-full object-cover' src="/site-foto.png" alt="Slide 1" />
            </Slider>
        </div>
    );
};

export default HeroSlider;
