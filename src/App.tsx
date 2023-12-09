import { useEffect, useState } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';

interface HueObject {
  id: number;
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

function App() {
  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser] = useState<User | null>(null);

  useEffect(() => {
    // Fetch hues from local file
    fetch('public/hues.json') // Assuming the file is in the public folder
      .then((res) => res.json())
      .then((data) => setHues(data));

    // Set current user from userInfo
    //setCurrentUser(userInfo);
  }, []);

  const addNewHue = (color: string) => {
    if (currentUser) {
      const newHue: HueObject = {
        color,
        username: currentUser.username,
        id: hues.length + 1,
        likes: 0,
        isLiked: false,
      };

      setHues((prevHues) => [newHue, ...prevHues]);
    }
  };

  const toggleLikeForHue = (id: number) => {
    setHues((prevHues) =>
      prevHues.map((hue) =>
        hue.id === id ? { ...hue, isLiked: !hue.isLiked } : hue
      )
    );
  };

  return (
    <div className="flex bg-slate-800 h-screen">
      <Main hues={hues} addHue={addNewHue} toggleLike={toggleLikeForHue} />
      <Profile /*user={currentUser}*/ />
    </div>
  );
}

export default App;
