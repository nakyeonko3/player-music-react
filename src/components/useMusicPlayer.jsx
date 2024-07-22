import { useEffect, useState, useRef } from 'react';

export function useMusicPlayer({ initalSrc }) {
  const [src, setSrc] = useState(initalSrc);
  const [playing, setPlaying] = useState(false);
  const [error, setError] = useState(false);
  const [currentTime, setCurrentTime] = useState('00:00');
  const [totalTime, setTotalTime] = useState('00:00');

  const audioRef = useRef(null);

  const togglePlaying = () => {
    setPlaying((playing) => !playing);
  };

  const startPlayingMusic = () => {
    try {
      audioRef.current.play();
    } catch (error) {
      console.error(error);
      setError(true);
    }
  };

  const formatTime = (time) => {
    const minutes = Math.floor(time / 60);
    const seconds = Math.floor(time % 60);
    return `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  const setTime = () => {
    const current = audioRef.current.currentTime;
    const total = audioRef.current.duration;
    setCurrentTime(formatTime(current));
    setTotalTime(formatTime(total));
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
    setTime,
    currentTime,
    totalTime,
    audioProps: {
      ref: audioRef,
      src,
    },
  };
}
