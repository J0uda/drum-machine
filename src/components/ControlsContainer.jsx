import DisplayNameAudio from './DisplayNameAudio';
import SwitchControl from './SwitchControl';
import SwitchControlPower from './SwitchControlPower';
import VolumeSlide from './VolumeSlide';

function ControlsContainer({
  changeSoundsGroup,
  name,
  volume,
  handleVolume,
  changeActive,
  power,
  showNull,
  stop,
}) {
  return (
    <div className='controls-container'>
      <SwitchControlPower title='Power' power={power} stop={stop} />
      <DisplayNameAudio volume={volume} name={name} showNull={showNull} />
      <VolumeSlide volume={volume} handleVolume={handleVolume} />
      <SwitchControl
        title='Bank'
        changeSoundsGroup={changeSoundsGroup}
        changeActive={changeActive}
      />
    </div>
  );
}

export default ControlsContainer;
