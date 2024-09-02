// src/components/SearchCard.js
import React from "react";
import poster from "../Assets/poster.jpg";

const SearchCard = ({ title, year, genres, rating, views }) => {
    return (
        <div className="flex items-center p-4 space-x-4 bg-white rounded-lg shadow">
            <img
                src={poster}
                alt={`Poster of ${title}`}
                className="object-cover w-24 h-32 rounded-md"
            />
            <div className="flex-1">
                <h3 className="text-lg font-bold">{title}</h3>
                <p className="text-gray-600">{year}</p>
                <p className="text-gray-600">{genres}</p>
                <div className="flex items-center justify-between mt-2">
                    <p className="text-gray-600">Rate {rating}</p>
                    <p className="text-sm text-gray-500">{views} views</p>
                </div>
            </div>
        </div>
    );
};

export default SearchCard;
