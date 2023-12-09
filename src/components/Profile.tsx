//import React from 'react';

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

  return (
    <div className="flex flex-col border-2 p-8 items-center text-white">
      
      <h1>@{currentUser.username}</h1>
      <div className="palette">
          <div style={{ backgroundColor: '#ff2299'}}></div>
          <div style={{ backgroundColor: '#ee2299'}}></div>
          <div style={{ backgroundColor: '#dd2299'}}></div>
          <div style={{ backgroundColor: '#cc2299'}}></div>
          <div style={{ backgroundColor: '#bb2299'}}></div>
          
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div ></div>
        </div>
      <p>Likes: {currentUser.likes}</p>
      <p>Posts: {currentUser.hues.length}</p>
    </div>
  );
};

export default Profile;
