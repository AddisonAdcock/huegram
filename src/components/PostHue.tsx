// PostHue.tsx
import React, { useState } from 'react';
import Hue, { HueObject } from './Hue';

interface Props {
  addHue: (color: string) => void;
}

const PostHue: React.FC<Props> = (props: Props) => {
  const [color, setColor] = useState('#');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    setColor(inputValue.startsWith('#') ? inputValue : `#${inputValue}`);
  };

  const handlePostClick = () => {
    props.addHue(color);
    setColor('#');
  };

  // Define a default HueObject for the initial rendering
  const defaultHueObject: HueObject = {
    id: 0, // Adjust the id according to your data model
    color,
    username: "abbieV",
    likes: 3,
    isLiked: false,
  };

  // Placeholder toggleLike function
  const toggleLike = (id: number) => {
    // Implement your toggleLike logic here
    console.log(`Toggle like for Hue with id: ${id}`);
  };

  return (
    <div className="flex flex-row justify-between ">
      <div className="flex flex-col p-11 gap-4 text-center">
        <input
          type="text"
          name="hue"
          id="hue"
          value={color}
          onChange={handleColorChange}
          placeholder="Enter color code"
          className="p-2 bg-gray-700 border border-gray-600 rounded-md text-white focus:outline-none focus:border-cyan-500"
        />
        <button
          onClick={handlePostClick}
          className={`btn bg-cyan-500 text-white hover:bg-cyan-600 py-2 rounded-md w-full`}
        >
          Post
        </button>
      </div>

      {/* Provide the toggleLike prop */}
      <Hue hue={defaultHueObject} toggleLike={toggleLike} />
    </div>
  );
};

export default PostHue;
