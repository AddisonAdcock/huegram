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
}

const Main = ({ hues, addHue, toggleLike }: Props) => {
  return (
    <div className='flex flex-col'>
      <Header />
      <div className='flex flex-wrap w-full justify-center gap-8 overflow-y-auto pb-2'>
        <PostHue addHue={addHue} />

        {hues.map((hue) => (
          <Hue key={hue.id} hue={hue} toggleLike={toggleLike} />
        ))}
      </div>
    </div>
  );
};

export default Main;
