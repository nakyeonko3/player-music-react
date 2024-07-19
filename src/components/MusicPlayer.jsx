import '../assets/css/card.css';
import musics from '../assets/data/index';
import { useMusicPlayer } from './useMusicPlayer';
import { PlayOrPauseButton } from './PlayOrPauseButton';
import { MusicPlayTimer } from './MusicPlayTimer';

function MusicPlayer({ props: { musicNumber } }) {
  const { togglePlaying, playing, audio, audioProps } = useMusicPlayer({
    audioSrc: musics[musicNumber].src,
  });

  return (
    <div className="card">
      <div className="img">
        <img src={musics[musicNumber].thumbnail} alt="" srcSet="" />
      </div>

      <div className="details">
        <p className="title">{musics[musicNumber].title}</p>
        <p className="artist">{musics[musicNumber].artist}</p>
      </div>

      <MusicPlayTimer props={{ audio }} />

      <div className="controls">
        <i className="material-symbols-outlined" id="prev">
          skip_previous
        </i>
        <PlayOrPauseButton props={{ togglePlaying, playing }} />
        <i className="material-symbols-outlined" id="next">
          skip_next
        </i>
        <i className="material-symbols-outlined">repeat</i>
      </div>
      <audio {...audioProps} src={musics[musicNumber].src} display="hidden"></audio>
    </div>
  );
}

export default MusicPlayer;
