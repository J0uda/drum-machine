const SwitchControlPower = ({ title, power, stop }) => {
  return (
    <div className='control'>
      <p>{title}</p>
      <div className='select'>
        <div
          className={`inner ${power ? 'right' : 'left'}`}
          onClick={stop}
        ></div>
      </div>
    </div>
  );
};

export default SwitchControlPower;
