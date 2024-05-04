import { useEffect } from 'react';

const DrumPad = ({ play, sound: { key, url, keyCode, id } }) => {
  const handleKeydown = (e) => {
    if (e.keyCode === keyCode) {
      play(key, id);
    }
  };

  useEffect(() => {
    document.addEventListener('keydown', handleKeydown);
  }, []);
  return (
    <div id={keyCode} className='drum-pad' onClick={() => play(key, id)}>
      <audio src={url} id={key} />
      {key}
    </div>
  );
};

export default DrumPad;
