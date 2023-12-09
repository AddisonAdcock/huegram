//import React from 'react';
import './Palette.css'

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
      <div className="palette pb-5 pt-5">
          <div style={{ backgroundColor: '#ff2299'}}></div>
          <div style={{ backgroundColor: '#ee2299'}}></div>
          <div style={{ backgroundColor: '#dd2299'}}></div>
          <div style={{ backgroundColor: '#cc2299'}}></div>
          <div style={{ backgroundColor: '#bb2299'}}></div>
          
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>

          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>

          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>

          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
          <div style={{ backgroundColor: ''}}></div>
        </div>
      <h1>{currentUser.likes}</h1>
      <p>Likes</p>
      <h1>{currentUser.hues.length}</h1>
      <p>Posts</p>
    </div>
  );
};

export default Profile;
