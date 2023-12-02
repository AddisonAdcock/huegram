import React, { useEffect, useState } from 'react';
import Main from './components/Main';
import Profile from './components/Profile';

function App() {
  const [hues, setHues] = useState([]);

  const [currentUser] = useState({
    username: 'kavery',
    likes: 58,
    hues: [{ id: 36, color: '#ffa510', username: 'kavery', likes: 15 }],
  });

  useEffect(() => {
    fetch('https://greenegunnar.pythonanywhere.com/api/hues/')
      .then((res) => res.json())
      .then((data) =>
        setHues(data.map((item) => ({ ...item, color: item.hex_code })))
      );
  }, []);

  const addNewHue = (color: string) => {
    const newHue = {
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