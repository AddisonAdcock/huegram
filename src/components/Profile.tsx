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
      <div className="palette">
        {currentUser.hues.map((hue) => (
          <div key={hue.id} style={{ backgroundColor: hue.color }}></div>
        ))}
      </div>

      <h1>@{currentUser.username}</h1>
      <p>Likes: {currentUser.likes}</p>
      <p>Posts: {currentUser.hues.length}</p>

      {/* Other user stats can be displayed here */}
    </div>
  );
};

export default Profile;
