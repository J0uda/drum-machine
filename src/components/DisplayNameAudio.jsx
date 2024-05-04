import { useEffect, useState } from 'react';

function DisplayNameAudio({ name, volume, showNull }) {
  return (
    <p className='display'>
      {showNull ? `Volume: ${Math.round(volume * 100)} %` : name}
    </p>
  );
}

export default DisplayNameAudio;
