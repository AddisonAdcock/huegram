// Main.tsx

import Hue from './Hue';
import PostHue from './PostHue';
import Header from './Header';

interface HueObject {
  id: number;
  color: string;
  username: string;
  likes: number;
  isLiked: boolean;
}

interface Props {
  hues: HueObject[];
  addHue: (color: string) => void;
  toggleLike: (id: number) => void;
  searchTerm: string;
}

const Main = ({ hues, addHue, toggleLike, searchTerm }: Props) => {
  const filteredHues = hues.filter((hue) =>
    hue.color.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
      <div className="flex flex-wrap w-full justify-center gap-8 overflow-y-auto pb-2">
        <PostHue addHue={addHue} />
        {filteredHues.map((hue) => (
          <Hue key={hue.id} hue={hue} toggleLike={toggleLike} />
        ))}
      </div>
  );
};

export default Main;
