import React, { useState } from "react";
import Sidebar from "../components/Sidebar";
import Header from "../components/Header";
import Card from "../components/Card";
import SearchCard from "../components/SearchCard"; // Import SearchCard
import { useNavigate } from "react-router-dom";
import '../css/style.css';

const Home = () => {
    const [isSidebarVisible, setSidebarVisible] = useState(false);
    const [searchTerm, setSearchTerm] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const navigate = useNavigate();

    const toggleSidebar = () => {
        setSidebarVisible(!isSidebarVisible);
    };

    const handleLogin = () => {
        navigate("/login");
    };

    const handleDramaClick = () => {
        navigate("/detail");
    };

    const handleSearchChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSearchSubmit = (e) => {
        e.preventDefault();


        const sampleData = [
            { title: 'Title of the drama 1 that makes two lines', year: '2024', genres: 'Genre 1, Genre 2, Genre 3', rating: '9/10', views: '19', image: '../Asset/poster.jpg' },
            { title: 'Title of the drama 2', year: '2024', genres: 'Genre 1, Genre 2, Genre 3', rating: '9/10', views: '19', image: '../Asset/poster.jpg' }
        ];

        const filteredResults = sampleData.filter(item => item.title.toLowerCase().includes(searchTerm.toLowerCase()));
        setSearchResults(filteredResults);
    };

    return (
        <div className="flex flex-col md:flex-row">
            <Sidebar
                isVisible={isSidebarVisible}
                toggleSidebar={toggleSidebar}
            />
            <main className="flex-1 p-6">
                <Header
                    toggleSidebar={toggleSidebar}
                    handleLogin={handleLogin}
                />

                <div className="flex justify-center mb-4">
                    <form className="flex items-center w-full max-w-lg" onSubmit={handleSearchSubmit}>
                        <label htmlFor="default-search" className="sr-only">
                            Search
                        </label>
                        <div className="relative w-full">
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3">
                                <svg
                                    className="w-4 h-4 text-gray-500"
                                    aria-hidden="true"
                                    xmlns="http://www.w3.org/2000/svg"
                                    fill="none"
                                    viewBox="0 0 20 20"
                                >
                                    <path
                                        stroke="currentColor"
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                                    />
                                </svg>
                            </div>
                            <input
                                type="search"
                                id="default-search"
                                value={searchTerm}
                                onChange={handleSearchChange}
                                className="block w-full p-4 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-orange-500 focus:border-orange-500"
                                placeholder="Search Drama..."
                                required
                            />
                            <button
                                type="submit"
                                className="absolute right-2.5 top-1/2 transform -translate-y-1/2 bg-orange-600 hover:bg-orange-700 text-white focus:ring-4 focus:outline-none focus:ring-orange-300 font-medium rounded-lg text-sm px-4 py-2"
                            >
                                Search
                            </button>
                        </div>
                    </form>
                </div>

                <section className="flex flex-col mb-4 lg:flex-row lg:space-x-4">
                    {/* Opsi Filter */}
                    <div className="flex flex-wrap items-center mb-4 space-y-2 lg:space-y-0 lg:space-x-2 lg:mb-0">
                        {/* Label untuk filter */}
                        <span className="text-gray-700">Filtered by:</span>
                        {/* Dropdown untuk filter */}
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Year</option>
                            <option value="2024">2024</option>
                            <option value="2023">2023</option>
                        </select>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Genre</option>
                            <option value="Action">Action</option>
                            <option value="Romance">Romance</option>
                        </select>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Status</option>
                            <option value="Ongoing">Ongoing</option>
                            <option value="Completed">Completed</option>
                        </select>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Availability</option>
                            <option value="Available">Available</option>
                            <option value="Unavailable">Unavailable</option>
                        </select>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Award</option>
                            <option value="Awarded">Awarded</option>
                            <option value="Not Awarded">Not Awarded</option>
                        </select>
                    </div>
                    {/* Opsi Urutan */}
                    <div className="flex items-center space-x-2">
                        <span className="text-gray-700">Sorted by:</span>
                        <select className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg p-2.5 hover:bg-gray-200">
                            <option selected>Alphabetics</option>
                        </select>
                    </div>
                </section>

                <section className="flex justify-start mb-4">
                    <button
                        type="button"
                        className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5"
                    >
                        Submit
                    </button>
                </section>

                
                    {searchResults.length > 0 ? (
                        searchResults.map((item, index) => (
                            <section className="grid max-w-4xl grid-cols-1 gap-4 p-6 mx-auto">
                            <SearchCard
                                key={index}
                                title={item.title}
                                year={item.year}
                                genres={item.genres}
                                rating={item.rating}
                                views={item.views}
                                image={item.image}
                                onClick={handleDramaClick}
                            />
                            </section>
                        ))
                    ) : (
                        <>
                            <section class="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
                            <Card
                                title="Title of the drama 1 that makes two lines"
                                year="2024"
                                genres="Genre 1, Genre 2, Genre 3"
                                rating="9/10"
                                views="19"
                                onClick={handleDramaClick}
                            />
                            <Card
                                title="Title of the drama 2"
                                year="2024"
                                genres="Genre 1, Genre 2, Genre 3"
                                rating="9/10"
                                views="19"
                                onClick={handleDramaClick}
                            />
                            </section>
                        </>
                    )}
            </main>
        </div>
    );
};

export default Home;
