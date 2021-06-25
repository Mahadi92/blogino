import React, { useEffect, useState } from 'react';
import Post from './Post';
import './Posts.css';

const Posts = () => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        fetch('http://localhost:5000/posts')
            .then(res => res.json())
            .then(data => setPosts(data))
    }, [])

    const approvedPost = posts.filter(post => post.status === 'approved')

    return (
        <div className="container m-auto">

            <h1 className='text-5xl py-6 pl-5 text-gray-400'>All Posts</h1>

            {
                approvedPost.map(post => <Post post={post} key={post._id}></Post>)
            }

        </div>
    );
};

export default Posts;