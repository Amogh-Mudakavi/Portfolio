//next image

import Image from "next/image";



const Avatar = () => {
  return (
  <div className="hidden xl:flex xl:max-w-none">
    <Image 
    src={`./coder.png?${new Date().getTime()}`}
    width={737} 
    height={678} 
    alt="Coder Image"
    className="translate-z-0 w-full h-full"
/>

  </div>
  );
};

export default Avatar;
