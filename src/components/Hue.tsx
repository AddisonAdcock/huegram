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
      className="flex flex-col h-64 aspect-square rounded-3xl text-center justify-between items-center border border-black"
      style={{ backgroundColor: props.hue.color }}
    >
      <p className={`text-${getTextColor(props.hue.color)} text-2xl opacity-80`}>{props.hue.color}</p>

      <div className="bg-black text-white flex w-full text-center justify-center p-4 rounded-b-2xl">
        <p className="text-xl">{props.hue.username}</p>
      </div>
    </div>
  );
};

export default Hue;