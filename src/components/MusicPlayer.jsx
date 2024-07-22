import '../assets/css/card.css';
import musics from '../assets/data/index';
import { useMusicPlayer } from './useMusicPlayer';
import { PlayOrPauseButton } from './PlayOrPauseButton';
import { MusicPlayTimer } from './MusicPlayTimer';

/**
 * @param {object} props - props
 * @param {number} props.musicNumber - 재생할 음악의 인덱스 번호
 * @returns {Element} - JSX
 */
function MusicPlayer({ musicNumber }) {
  console.log(musicNumber);
  const { togglePlaying, playing, audio, audioProps } = useMusicPlayer({
    initalSrc: musics[musicNumber].src,
  });
  console.log(musicNumber[123]);
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
      <audio {...audioProps} display="hidden"></audio>
    </div>
  );
}

export default MusicPlayer;
