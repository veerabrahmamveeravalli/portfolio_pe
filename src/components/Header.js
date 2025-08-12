import React from 'react';
import '../index.css'; // Assuming you have a CSS file for additional styles

const Header = () => {
    return (
        <header className="bg-gray-800 text-white p-4 shadow-md">
            <nav className="max-w-7xl mx-auto flex justify-between items-center">
                <div className="text-4xl font-extrabold tracking-wide text-left flex-1">
                    Veerabrahmam Veeravalli
                </div>
                <ul className="flex space-x-4">
                    {['About', 'Skills', 'Projects', 'Contact'].map((section) => (
                        <li key={section}>
                            <a
                                href={`#${section.toLowerCase()}`}
                                className="px-4 py-2 bg-blue-600 rounded-full hover:bg-blue-700 transition-all duration-200 text-xl font-semibold"
                            >
                                {section}
                            </a>
                        </li>
                    ))}
                </ul>
            </nav>
        </header>
    );
};

export default Header;