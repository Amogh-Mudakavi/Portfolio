// BackgroundComponent.jsx
import React from 'react';
import Image from "next/image"

import b from "../public/bg-explosion.png"

const BackgroundComponent = () => {
  return (
    <div className="bg-none xl:bgexplosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        <Image src = {b.src}
            alt = ''
            />
    </div>
  );
};

export default BackgroundComponent;
