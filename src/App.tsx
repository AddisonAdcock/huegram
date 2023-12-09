import { useEffect, useState } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';
import Header from './components/Header';

interface HueObject {
  id: number | string;
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
  const [searchTerm, setSearchTerm] = useState('');

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
      const [userDataResponse, userInfoResponse] = await Promise.all([
        fetch('/userData.json'),
        fetch('/userInfo.json'),
      ]);

      const [userData, userInfo] = await Promise.all([
        userDataResponse.json(),
        userInfoResponse.json(),
      ]);

      const userInfoHuesWithUniqueIds = userInfo.hues.map((hue: any, index: number) => ({
        ...hue,
        id: `user_${index + 1}`,
        isLiked: false,
      }));

      const mergedHues = [...userData.hues, ...userInfoHuesWithUniqueIds];

      const mergedUserData = {
        ...userData,
        hues: mergedHues,
      };

      return mergedUserData;
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
          data.map((item: { hex_code: string }, index: number) => ({
            ...item,
            color: item.hex_code,
            isLiked: false,
            id: index + 1,
          }))
        )
      );
  };

  const addNewHue = (color: string) => {
    const newHue: HueObject = {
      color,
      username: 'abbieV',
      id: `user_${currentUser?.hues.length + 1}`,
      likes: 0,
      isLiked: false,
    };

    setHues([newHue, ...hues]);

    setCurrentUser((prevUser) => ({
      ...prevUser!,
      hues: [newHue, ...prevUser!.hues],
    }));
  };

  const toggleLikeForHue = (id: number | string) => {
    setHues((prevHues) =>
      prevHues.map((hue) =>
        hue.id === id
          ? {
              ...hue,
              isLiked: !hue.isLiked,
              likes: hue.likes + (hue.isLiked ? -1 : 1),
            }
          : hue
      )
    );

    setCurrentUser((prevUser) => {
      const isCurrentUserPost = prevUser!.hues.some((hue) => hue.id === id);

      if (isCurrentUserPost) {
        return {
          ...prevUser!,
          likes: prevUser!.likes + (prevUser!.hues.find((hue) => hue.id === id)?.isLiked ? -1 : 1),
          hues: prevUser!.hues.map((hue) =>
            hue.id === id
              ? { ...hue, isLiked: !hue.isLiked, likes: hue.likes + (hue.isLiked ? -1 : 1) }
              : hue
          ),
        };
      }

      return prevUser;
    });
  };

  const handleSearchChange = (term: string) => {
    setSearchTerm(term);
  };

  return (
    <div className="flex bg-slate-800 h-screen">
      <Header onSearchChange={handleSearchChange} />
      <Main hues={hues} addHue={addNewHue} toggleLike={toggleLikeForHue} searchTerm={searchTerm} />
      <Profile currentUser={currentUser} />
    </div>
  );
}

export default App;
