import React from 'react';

interface HeaderProps {
  onSearchChange: (term: string) => void;
}

const Header: React.FC<HeaderProps> = ({ onSearchChange }) => {
  return (
    <header className="bg-gradient-to-r from-purple-500 to-pink-500 text-white p-4 flex items-center justify-between">
      <div className="flex items-center">
        {/* Hashtag Icon */}
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="white"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M7 20l4-16m2 16l4-16M6 9h14M4 15h14"
          />
        </svg>
        <h1 className="text-2xl font-bold">HueGram</h1>
      </div>
      <div className="flex items-center">
        <input
          type="text"
          placeholder="Search..."
          onChange={(e) => onSearchChange(e.target.value)}
          className="p-2 border border-white rounded-md bg-white text-gray-800 focus:outline-none focus:border-cyan-500 placeholder-gray-500"
          style={{ maxWidth: '200px' }} // Adjust the max-width to your preference
        />
      </div>
    </header>
  );
};

export default Header;
