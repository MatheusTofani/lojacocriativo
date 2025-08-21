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
                <img className='h-[500px] w-full object-cover' src="https://placehold.co/1336x400" alt="Slide 1" />
                <img className='h-[500px] w-full object-cover' src="https://placehold.co/1336x400" alt="Slide 2" />
                <img className='h-[500px] w-full object-cover' src="https://placehold.co/1336x400" alt="Slide 3" />
            </Slider>
        </div>
    );
};

export default HeroSlider;
