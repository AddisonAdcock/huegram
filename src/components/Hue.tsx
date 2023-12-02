import React from 'react';

interface HueObject {
  color: string;
  username: string;
  likes: number;
}

interface Props {
  hue: HueObject;
}

function getTextColor(backgroundColor: string): string {
  // You can add logic here to determine text color based on background color if needed
  return "black";
}

const Hue: React.FC<Props> = (props: Props) => {
  return (
    <div
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center border border-black relative"
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`text-${getTextColor(props.hue.color)} text-2xl opacity-80`}>{props.hue.color}</p>

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>
      </div>

      {/* Heart Icon */}
      <div className="absolute top-2 right-2">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="currentColor"
          viewBox="0 0 24 24"
          className="h-6 w-6 text-red-500 fill-current mr-1"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M12 21.35l-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C15.09 3.81 16.76 3 18.5 3 21.58 3 24 5.42 24 8.5c0 3.78-3.4 6.86-8.55 11.54L12 21.35z"
          />
        </svg>
      </div>
    </div>
  );
};

export default Hue;
