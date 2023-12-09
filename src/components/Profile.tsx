import React from 'react';
import './Palette.css';

interface HueObject {
  id?: number;
  color: string;
  username: string;
  likes: number;
  isLiked: boolean;
}

interface User {
  username: string;
  likes: number;
  hues: HueObject[];
}

const Profile = ({ currentUser }: { currentUser: User | null }) => {
  if (!currentUser) {
    return null; // or display a loading state
  }

  // Create an array of color codes from the user's hues
  const paletteColors = currentUser.hues.map((hue) => hue.color);

  // Create an array with 25 elements, filling extra spaces with empty strings
  const emptyColors = Array(25 - paletteColors.length).fill('');

  return (
    <div className="flex flex-col border-2 p-8 items-center text-white">
      <h1>@{currentUser.username}</h1>
      <div className="palette pb-5 pt-5">
        {/* Map over the user's hues and create corresponding divs */}
        {paletteColors.map((color, index) => (
          <div key={index} style={{ backgroundColor: color }}></div>
        ))}
        {/* Fill remaining spaces with empty divs */}
        {emptyColors.map((_, index) => (
          <div key={index}></div>
        ))}
      </div>
      <h1>{currentUser.likes}</h1>
      <p>Likes</p>
      <h1>{currentUser.hues.length}</h1>
      <p>Posts</p>
    </div>
  );
};

export default Profile;
