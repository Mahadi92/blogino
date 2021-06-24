import React from 'react';
import './Header.css';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import img1 from '../../images/img1.jpg';
import img2 from '../../images/img2.jpg';
import img3 from '../../images/img3.jpg';
import img4 from '../../images/img4.jpg';
import img5 from '../../images/img5.jpg';


const Header = () => {
    var slideSettings = {
        dots: false,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplaySpeed: 5000,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1
    };


    return (
        <div className="container p-5 m-auto">
            <h1 className="brand_name">blogino</h1>
            <p className="text-center pb-10 text-3xl">A minimalist theme crafted for influencers and infopreneurs.</p>
            <Slider {...slideSettings}>
                <div className="w-full h-96">
                    <img src={img1} className="object-cover" alt="" />
                </div>
                <div className="w-full h-96">
                    <img src={img2} className="object-cover" alt="" />
                </div>
                <div className="w-full h-96">
                    <img src={img3} className="object-cover" alt="" />
                </div>
                <div className="w-full h-96">
                    <img src={img4} className="object-cover" alt="" />
                </div>
                <div className="w-full h-96">
                    <img src={img5} className="object-cover" alt="" />
                </div>
            </Slider>
        </div>
    );
};

export default Header;