import React from 'react';
import { Link } from 'react-router-dom';

const Post = ({ post }) => {
    const { _id, title, authorName, category, imageUrl, date } = post;
    return (

        <div className="w-full bg-gray-100 mb-5">
            <Link to={`/post/${_id}`}>
                <img src={imageUrl} className="w-full h-60 object-cover" alt="" />
                <div className="p-8">
                    <h2 className="text-3xl text-gray-800 pb-3 font-primary">{title}</h2>
                    <p>Post on <span className="font-bold">{date}</span></p>
                </div>
            </Link>

        </div>

    );
};

export default Post;