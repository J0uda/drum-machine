const SwitchControl = ({ title, changeSoundsGroup, changeActive }) => {
  return (
    <div className='control'>
      <p>{title}</p>
      <div className='select'>
        <div
          className={`inner ${changeActive ? 'right' : 'left'}`}
          onClick={changeSoundsGroup}
        ></div>
      </div>
    </div>
  );
};

export default SwitchControl;
