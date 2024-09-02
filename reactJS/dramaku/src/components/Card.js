// DramaCard.js
import React from "react";
import poster from '../Assets/poster.jpg';

const Card = ({ title, year, genres, rating, views }) => {
    return (
        <div className="p-4 bg-white rounded-lg shadow list-drama">
            <img
                src={poster}
                alt={`Poster of ${title}`}
                className="object-cover w-full h-32 mb-4 rounded-md"
            />
            <h3 className="text-lg font-bold">{title}</h3>
            <p className="text-gray-600">{year}</p>
            <p className="text-gray-600">{genres}</p>
            <div className="flex items-center justify-between">
                <p className="text-gray-600">Rate {rating}</p>
                <p className="text-sm text-gray-500">{views} views</p>
            </div>
        </div>
    );
};

export default Card;
