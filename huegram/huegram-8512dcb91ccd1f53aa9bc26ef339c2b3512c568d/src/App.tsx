import { useEffect, useState } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';

interface Hue {
  color: string;
  username: string;
  id: number;
  likes: number;
}

interface User {
  username: string;
  likes: number;
  hues: Hue[];
}

function App() {
  const [hues, setHues] = useState<Hue[]>([]);

  const [currentUser] = useState<User>({
    username: 'kavery',
    likes: 58,
    hues: [{ id: 36, color: '#ffa510', username: 'kavery', likes: 15 }],
  });

  useEffect(() => {
    fetch('https://greenegunnar.pythonanywhere.com/api/hues/')
      .then((res) => res.json())
      .then((data) =>
        setHues(data.map((item: { hex_code: string }) => ({ ...item, color: item.hex_code })))
      );
  }, []);

  const addNewHue = (color: string) => {
    const newHue: Hue = {
      color,
      username: currentUser.username,
      id: hues.length + 1,
      likes: 0,
    };
    setHues([newHue, ...hues]);
  };

  return (
    <div className="flex bg-slate-800 h-screen">
      <Main hues={hues} addHue={addNewHue} />
      <Profile />
    </div>
  );
}

export default App;
