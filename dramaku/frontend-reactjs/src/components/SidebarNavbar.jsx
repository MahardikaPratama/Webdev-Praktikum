import React, { useState, useEffect, useCallback } from "react";
import { useNavigate } from "react-router-dom";
import countryDataService from "../services/country.service";
import CountryButton from "./CountryButton";

const SidebarNavbar = ({ onCountryFilter, currentFilter, searchTerm, onSearchChange }) => {
    const [isSidebarOpen, setSidebarOpen] = useState(false); // State untuk membuka/menutup sidebar
    const [isLoggedIn, setIsLoggedIn] = useState(true); // State untuk login status
    const [isDropdownOpen, setDropdownOpen] = useState(false); // State untuk membuka/menutup dropdown
    const [countries, setCountries] = useState([]); // State untuk menyimpan data negara

    const navigate = useNavigate(); // Hook untuk navigasi
    const toggleSidebar = () => setSidebarOpen(!isSidebarOpen);
    
    const fetchCountries = useCallback(async () => {
        try {
            const response = await countryDataService.getAll();
            console.log("Fetched countries:", response.data);
            setCountries(response.data);
        } catch (error) {
            console.error("Error fetching countries:", error);
        }
    }, []);    
    

    useEffect(() => {
        fetchCountries();
    }, [fetchCountries]);
    
    const handleProfileClick = () => {
        if (!isLoggedIn) {
            navigate('/login'); 
            onclick={handleLogin}; 
        } else {
            toggleDropdown(); 
        }
    };

    const toggleDropdown = () => setDropdownOpen(!isDropdownOpen);
    const handleLogin = () => setIsLoggedIn(true);

    return (
        <>
            {/* Navbar */}
            <nav className="fixed top-0 z-50 w-full bg-white border-b border-gray-200 dark:bg-gray-800 dark:border-gray-700">
                <div className="px-3 py-3 lg:px-5 lg:pl-3">
                    <div className="flex items-center justify-between">
                        <div className="flex items-center justify-start">
                            <button
                                onClick={toggleSidebar}
                                className="inline-flex items-center p-2 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
                            >
                                <span className="sr-only">Open sidebar</span>
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 20 20"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        fillRule="evenodd"
                                        clipRule="evenodd"
                                        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
                                    />
                                </svg>
                            </button>
                            <a href="/" className="flex items-center ms-2 md:me-24">
                                <img
                                    src="https://i.pinimg.com/originals/2c/ae/fe/2caefe0fe73204830ee22868604390d5.png"
                                    className="h-8 bg-white border rounded-full me-3"
                                    alt="Dramaku Logo"
                                />
                                <span className="self-center text-xl font-semibold sm:text-2xl whitespace-nowrap dark:text-white">
                                    Dramaku
                                </span>
                            </a>
                        </div>

                        {/* Search Bar for Desktop */}
                        <div className="relative items-center hidden w-full max-w-md mx-5 md:flex">
                            <form  className="relative w-full">
                                <input
                                    type="text"
                                    value={searchTerm}
                                    onChange={onSearchChange}
                                    className="block w-full p-3 pl-12 text-sm text-gray-900 border border-gray-700 rounded-lg bg-gray-50 dark:bg-gray-800 dark:text-white focus:ring-orange-500 focus:border-orange-500"
                                    placeholder="Search Movie..."
                                />
                                <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                                    <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                                    </svg>
                                </div>
                            </form>
                        </div>


                        {/* Profile Icon and Dropdown */}
                        <div className="flex items-center ms-3">
                            <button
                                type="button"
                                className="flex text-sm bg-gray-800 rounded-full focus:ring-4 focus:ring-gray-300 dark:focus:ring-gray-600"
                                onClick={handleProfileClick} // Ganti onClick menjadi handleProfileClick
                            >
                                <span className="sr-only">Open user menu</span>
                                <img
                                    className="w-8 h-8 rounded-full"
                                    src="https://divedigital.id/wp-content/uploads/2021/10/1-min.png"
                                    alt="User"
                                />
                            </button>
                            {isDropdownOpen && (
                            <div className="relative">
                                <div className="absolute right-0 w-48 mt-2 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-700 dark:border-gray-600">
                                    {isLoggedIn && (
                                        <>
                                            <div class="p-4">
                                                <p class="text-sm font-medium text-gray-900 dark:text-white">John Doe</p>
                                                <p class="text-sm text-gray-500 dark:text-gray-300">johndoe@gmail.com</p>
                                            </div>
                                            <ul class="py-1">
                                                <li>
                                                    <a href="cms-drama-input" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Input New Drama</a>
                                                </li>
                                                <li>
                                                    <a href="/login" class="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 dark:text-gray-300 dark:hover:bg-gray-600 dark:hover:text-white">Logout</a>
                                                </li>
                                            </ul>
                                        </>
                                    )}
                                </div>
                            </div>
                        )}

                        </div>
                    </div>
                </div>
            </nav>

            {/* Sidebar */}
            <aside
                className={`fixed top-0 left-0 z-40 w-64 h-screen pt-20 transition-transform bg-white border-r border-gray-200 dark:bg-gray-800 dark:border-gray-700 ${
                    isSidebarOpen ? "translate-x-0" : "-translate-x-full"
                } sm:translate-x-0`}
            >
                <div className="h-full px-3 pb-4 overflow-y-auto">
                    {/* Search Form in Sidebar for Mobile */}
                    <div className="relative mt-3 md:hidden"> {/* Hidden on desktop */}
                        <form >
                            <input
                                type="text"
                                value={searchTerm} 
                                onChange={onSearchChange} 
                                className="block w-full p-2 pl-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 dark:bg-gray-700 dark:text-white"
                                placeholder="Search..."
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                            <svg className="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                                <path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
                            </svg>

                            </div>
                        </form>
                    </div>

                    <ul className="mt-3 space-y-2 font-medium">
                        <li>
                            <button
                                onClick={() => onCountryFilter('')}
                                className={`flex items-center px-4 py-2 text-gray-300 rounded-md ${
                                    currentFilter === '' ? 'bg-gray-700' : 'hover:bg-gray-700'
                                } w-full text-left`}
                            >
                                <i className="mr-4 fas fa-film"></i>
                                All Dramas
                            </button>
                        </li>
                        {countries && countries.length > 0 && countries.map((country) => (
                            <CountryButton
                                key={country.country_name}
                                country={country.country_name}
                                flagUrl={country.flag_url}
                                isSelected={currentFilter === country.country_name}
                                onClick={onCountryFilter}
                            />
                        ))}

                    </ul>
                </div>
            </aside>
        </>
    );
};

export default SidebarNavbar;
