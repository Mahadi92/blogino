import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Navbar from '../components/Navbar/Navbar';
import image from '../images/img3.jpg';

const PostDetails = () => {

    const { postId } = useParams()

    const [post, setPost] = useState([])

    useEffect(() => {
        fetch(`https://mighty-mountain-29830.herokuapp.com/post/${postId}`)
            .then(res => res.json())
            .then(data => setPost(data))
    }, [])

    const { title, authorName, description, imageUrl, date } = post;

    return (
        <div className="">
            <Navbar />
            <div className="container m-auto p-4">
                <img src={imageUrl} alt="" className="rounded-sm w-full" />
                <h1 className="text-4xl pt-8 tracking-wide font-primary">{title}</h1>
                <h2 className="font-bold text-xl py-4 px-5 font-serif">{authorName}</h2>
                <h4 className="font-bold text-md tracking-wide px-5">Published on {date}</h4>
                <p className="text-justify py-10">
                    {description}
                </p>
            </div>

        </div>
    );
};

export default PostDetails;