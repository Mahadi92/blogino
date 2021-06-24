import React from 'react';
import './Posts.css';
import img from '../../images/img3.jpg'
import { Link } from 'react-router-dom';

const Posts = () => {
    return (
        <div className="container m-auto">

            <h1 className='text-5xl py-6 pl-5 text-gray-400'>All Posts</h1>

            <div className="w-full bg-gray-100 mb-5">
                <Link to="/">
                    <img src={img} className="w-full h-60 object-cover" alt="" />

                    <div className="p-8">
                        <h2 className="text-3xl text-gray-800 pb-3 font-primary">Retro and Vintage Rule the Streets at New York Fashion Week</h2>
                        <p>Post on <span className="font-bold">JULY 18, 2021</span></p>
                    </div>
                </Link>

            </div>
        </div>
    );
};

export default Posts;