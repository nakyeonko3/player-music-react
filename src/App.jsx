import { useState } from 'react';
import './App.css';
import MusicPlayer from './components/MusicPlayer';

function App() {
  const [musicNumber, setMusicNumber] = useState(0);
  return (
    <div className="conatiner">
      <main>
        <MusicPlayer props={{ musicNumber, setMusicNumber }} />
      </main>
    </div>
  );
}

export default App;
