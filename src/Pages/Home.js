import React from 'react';
import Navbar from '../components/Navbar/Navbar';
import Header from '../components/Header/Header';
import Posts from '../components/Posts/Posts';


const Home = () => {
    return (
        <div>
            <Navbar />
            <Header />
            <Posts />
        </div>
    );
};

export default Home;