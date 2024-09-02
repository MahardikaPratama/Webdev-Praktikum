import React from "react";

const Header = () => {
    return (
        <header className="flex items-center justify-between mb-4 md:justify-end">
            <button
                id="hamburger"
                className="p-2 text-gray-600 md:hidden focus:outline-none"
            >
                <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                >
                    <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth="2"
                        d="M4 6h16M4 12h16M4 18h16"
                    ></path>
                </svg>
            </button>
            <button
                id="login-button"
                type="button"
                className="text-white bg-orange-600 hover:bg-orange-700 focus:ring-4 focus:ring-orange-300 font-medium rounded-lg text-sm px-5 py-2.5"
            >
                Login
            </button>
        </header>
    );
};

export default Header;
