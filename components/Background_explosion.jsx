import React from 'react';
import Image from 'next/image';
import b from '../public/bg-explosion.png';

const ExplosionBackground = () => {
  return (
    <div className="bg-none xl:bg-explosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
      <style jsx>{`
        @media (min-width: 1200px) {
          .xl\\:bg-explosion {
            background-image: url("${b.src}");
          }
        }
      `}</style>
      {/* You can add content or leave it empty based on your needs */}
      <Image src={b.src} />
    </div>
  );
};

export default ExplosionBackground;
