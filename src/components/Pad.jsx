import DrumPad from './DrumPad';

function Pad({ sounds, play, power }) {
  return (
    <div className='pad-bank'>
      {power
        ? sounds.map((sound) => (
            <DrumPad play={play} sound={sound} key={sound.id} />
          ))
        : sounds.map((sound) => (
            <DrumPad
              play={play}
              sound={{ ...sound, url: '#' }}
              key={sound.id}
            />
          ))}
    </div>
  );
}

export default Pad;
