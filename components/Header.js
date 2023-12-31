import Image from "next/image";


import Link from "next/link";

import t from "../public/logog.png";
//components

import Socials from "../components/Socials"


const Header = () => {
  return(<header className="absolute z-30 w-full flex items-center px-16 xl:px-0 xl:h-[90px]">

    <div className="container mx-auto">
     <div className="py-4 gap-y-2 flex flex-col lg:flex-row justify-between items-center md:gap-y-6  md:py-8">
      {/* logo */}
      <Link href = {'/'}>
      <Image src = {t.src} 
      width = {220}
       height = {48} 
       alt = ''
        priority={true} />
      </Link>

      {/* socials */}
      <Socials/>

    </div>
    </div>
  </header>
  );
};

export default Header;
