// Hue.tsx
import React from 'react';

export interface HueObject {
  id: number;
  color: string;
  username: string;
  likes: number;
  isLiked: boolean;
}

interface Props {
  hue: HueObject;
  toggleLike: (id: number) => void;
}

function getTextColor(backgroundColor: string): string {
  const r_num = Number("0x" + backgroundColor.slice(1, 3));
  const g_num = Number("0x" + backgroundColor.slice(3, 5));
  const b_num = Number("0x" + backgroundColor.slice(5, 7));

  const hue_intensity = r_num * 0.299 + g_num * 0.587 + b_num * 0.114;

  return hue_intensity > 186 ? "text-black" : "text-white";
}

const Hue: React.FC<Props> = (props: Props) => {
  const textColorClass = getTextColor(props.hue.color);

  return (
    <div
      onClick={() => props.toggleLike(props.hue.id)}
      className={`flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center border border-black relative ${textColorClass}`}
      style={{ backgroundColor: props.hue.color }}
    >
      <p className="text-2xl opacity-80">{props.hue.color}</p>

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>
      </div>

      {props.hue.isLiked && (
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
      )}
    </div>
  );
};

export default Hue;
