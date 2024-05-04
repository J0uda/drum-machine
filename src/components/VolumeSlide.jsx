function VolumeSlide({ volume, handleVolume }) {
  return (
    <div className='volume-slide'>
      <input
        type='range'
        max='1'
        min='0'
        value={volume}
        step='0.01'
        onChange={handleVolume}
      />
    </div>
  );
}

export default VolumeSlide;
