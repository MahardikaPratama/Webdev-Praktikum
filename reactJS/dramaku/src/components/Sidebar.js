import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
    return (
        <aside
            id="sidebar"
            className="fixed inset-y-0 left-0 z-40 flex flex-col w-64 transition-transform duration-300 transform -translate-x-full bg-white shadow-lg md:relative md:w-1/5 md:h-auto md:shadow-none md:translate-x-0"
        >
            <div className="relative flex-1 p-6 overflow-y-auto">
                <button
                    id="close-sidebar"
                    className="absolute p-2 text-gray-600 top-4 right-4 md:hidden focus:outline-none"
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
                            d="M6 18L18 6M6 6l12 12"
                        ></path>
                    </svg>
                </button>
                <h2 className="mb-4 text-2xl font-bold">DramaKu</h2>
                <ul className="space-y-2">
                    <li>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-gray-700 bg-gray-300 rounded-md"
                        >
                            Japan
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300"
                        >
                            Korea
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="/"
                            className="block px-4 py-2 text-gray-700 rounded-md hover:bg-gray-300"
                        >
                            China
                        </Link>
                    </li>
                </ul>
            </div>
        </aside>
    );
};

export default Sidebar;
