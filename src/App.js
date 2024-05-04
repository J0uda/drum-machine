import { useEffect, useState } from 'react';
import { firstSoundsGroup, secondSoundsGroup } from './assets/sounds';
import ControlsContainer from './components/ControlsContainer';
import Pad from './components/Pad';

function App() {
  const soundsName = {
    heaterKit: 'Heater Kit',
    smoothPianoKit: 'Smooth Piano Kit',
  };
  const soundsGroup = {
    heaterKit: firstSoundsGroup,
    smoothPianoKit: secondSoundsGroup,
  };

  const [power, setPower] = useState(true);
  const [soundsType, setSoundsType] = useState('heaterKit');
  const [sounds, setSounds] = useState(soundsGroup[soundsType]);
  const [soundName, setSoundName] = useState('');
  const [volume, setVolume] = useState(0.5);
  const [showNull, setShowNull] = useState(false);
  const [changeActive, setChangeActive] = useState(false);

  const play = (key, sound) => {
    setSoundName(sound);
    const audio = document.getElementById(key);
    styleActiveKey(audio);
    audio.currentTime = 0;
    audio.play();
    desactivateAudio(audio);
  };

  const changeSoundsGroup = () => {
    setSoundName('');
    if (soundsType === 'heaterKit') {
      setSoundsType('smoothPianoKit');
      setSounds(soundsGroup.smoothPianoKit);
      setChangeActive(true);
    } else {
      setSoundsType('heaterKit');
      setSounds(soundsGroup.heaterKit);
      setChangeActive(!changeActive);
    }
  };

  const handleVolume = (e) => {
    setVolume(e.target.value);
    setShowNull(true);
  };

  useEffect(() => {
    let timeout;
    if (showNull) {
      timeout = setTimeout(() => {
        setShowNull(false);
        setSoundName('');
        setSoundsType('');
      }, 3000);
    }

    return () => clearTimeout(timeout);
  }, [showNull]);

  const setKeyVolume = () => {
    const audios = sounds.map((sound) => document.getElementById(sound.key));
    audios.forEach((audio) => {
      if (audio) {
        audio.volume = volume;
      }
    });
  };

  const stop = () => {
    setPower(!power);
  };

  const desactivateAudio = (audio) => {
    setTimeout(() => {
      audio.parentElement.style.backgroundColor = 'grey';
      audio.parentElement.style.color = 'black';
    }, 300);
  };

  const styleActiveKey = (key) => {
    key.parentElement.style.backgroundColor = 'orange';
    key.parentElement.style.color = '#ffffff';
  };

  return (
    <div className='container' id='drum-machine'>
      {setKeyVolume()}
      <Pad sounds={sounds} play={play} power={power} />
      <ControlsContainer
        stop={stop}
        power={power}
        volume={volume}
        showNull={showNull}
        changeActive={changeActive}
        handleVolume={handleVolume}
        changeSoundsGroup={changeSoundsGroup}
        name={soundName || soundsName[soundsType]}
      />
    </div>
  );
}

export default App;
