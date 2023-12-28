// BackgroundComponent.jsx
import React from 'react';

const BackgroundComponent = () => {
  return (
    <div className="bg-none xl:bgexplosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        <Image src = {'./bg-explosion.png'}
            alt = ''
            />
    </div>
  );
};

export default BackgroundComponent;
