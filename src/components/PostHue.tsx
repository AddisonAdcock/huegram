import React, { useState } from 'react';
import Hue from './Hue';

interface Props {
  addHue: (color: string) => void;
}

const PostHue: React.FC<Props> = (props: Props) => {
  const [color, setColor] = useState('#');

  const handleColorChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = event.target.value;
    // Ensure the color input starts with '#'
    setColor(inputValue.startsWith('#') ? inputValue : `#${inputValue}`);
  };

  return (
    <div className="flex flex-row p-4 justify-between items-center">

      {/* Color Input Section */}
      <div className="flex flex-col p-4 gap-4 text-center">
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
          onClick={() => props.addHue(color)}
          className={`btn bg-cyan-500 text-white hover:bg-cyan-600 py-2 rounded-md w-full`}
        >
          Post
        </button>
      </div>

      {/* Display Posted Hue */}
      <Hue hue={{ color, username: "kaylee", likes: 3 }} />

    </div>
  );
};

export default PostHue;
