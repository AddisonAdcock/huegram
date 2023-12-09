import { useEffect, useState } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';

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

function App() {
  const [hues, setHues] = useState<HueObject[]>([]);
  const [currentUser, setCurrentUser] = useState<User | null>(null);

  useEffect(() => {
    fetchUserData().then((data) => {
      if (data) {
        setCurrentUser(data);
      }
    });

    fetchHuesData();
  }, []);

  const fetchUserData = async () => {
    try {
      const response = await fetch('/userData.json');
      const userData = await response.json();
      return userData;
    } catch (error) {
      console.error('Error fetching user data:', error);
      return null;
    }
  };

  const fetchHuesData = () => {
    fetch('https://greenegunnar.pythonanywhere.com/api/hues/')
      .then((res) => res.json())
      .then((data) =>
        setHues(
          data.map((item: { hex_code: string }) => ({
            ...item,
            color: item.hex_code,
            isLiked: false,
          }))
        )
      );
  };

  const addNewHue = (color: string) => {
    const newHue: HueObject = {
      color,
      username: currentUser?.username || 'default',
      id: hues.length + 1,
      likes: 0,
      isLiked: false,
    };

    setHues([newHue, ...hues]);

    // Update user data
    setCurrentUser((prevUser) => ({
      ...prevUser!,
      hues: [newHue, ...prevUser!.hues],
    }));
  };

  const toggleLikeForHue = (id: number) => {
    setHues((prevHues) =>
      prevHues.map((hue) =>
        hue.id === id
          ? { ...hue, isLiked: !hue.isLiked, likes: hue.likes + (hue.isLiked ? -1 : 1) }
          : hue
      )
    );

    // Update user data
    setCurrentUser((prevUser) => ({
      ...prevUser!,
      hues: prevUser!.hues.map((hue) =>
        hue.id === id
          ? { ...hue, isLiked: !hue.isLiked, likes: hue.likes + (hue.isLiked ? -1 : 1) }
          : hue
      ),
    }));
  };

  return (
    <div className="flex bg-slate-800 h-screen">
      <Main hues={hues} addHue={addNewHue} toggleLike={toggleLikeForHue} />
      <Profile currentUser={currentUser} />
    </div>
  );
}

export default App;
