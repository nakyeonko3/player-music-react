export function PlayOrPauseButton({ props: { togglePlaying, playing } }) {
  return (
    <i onClick={togglePlaying} className="material-symbols-outlined">
      {playing ? 'pause' : 'play_arrow'}
    </i>
  );
}
//   play_arrow
