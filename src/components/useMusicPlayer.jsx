import { useEffect, useState, useRef } from 'react';

export function useMusicPlayer() {
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const audioRef = useRef(null);

  const togglePlaying = () => {
    setPlaying((playing) => !playing);
  };

  const startPlayingMusic = () => {
    try {
      audioRef.current.play();
      //   audio.play();
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  useEffect(() => {
    if (playing) {
      startPlayingMusic();
    } else {
      audioRef.current.pause();
    }
  }, [playing]);

  return {
    togglePlaying,
    error,
    playing,
    audioProps: {
      ref: audioRef,
    },
  };
}
