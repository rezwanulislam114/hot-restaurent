import React from 'react';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner">
            <h1>Best Food Waiting For You.</h1>
            <div className="search-box">
                <input type="text" />
                <button>Search</button>
            </div>
        </div>
    );
};

export default Banner;