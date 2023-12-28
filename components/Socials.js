import Link from "next/link";

//icons
import {RiWhatsappLine , 
  RiInstagramLine ,
   RiFacebookBoxLine , 
    RiGithubLine , 
    RiLinkedinLine, 
    RiTelegramLine} from 'react-icons/ri'


const Socials = () => {
  return <div className="flex items-center gap-x-5 text-lg ">
    <Link href = {'https://github.com/Amogh-Mudakavi'} className="hover:text-accent transition-all duration-300">
      <RiGithubLine/>
    </Link>
    <Link href = {'https://www.linkedin.com/in/amogh-mudakavi'} className="hover:text-accent transition-all duration-300">
      <RiLinkedinLine/>
    </Link>
    <Link href = {'https://www.facebook.com/anant.mudakavi.1/'} className="hover:text-accent transition-all duration-300">
      <RiFacebookBoxLine/>
    </Link>
    {/* <Link href = {''} className="hover:text-accent transition-all duration-300">
      <RiInstagramLine/>
    </Link> */}
    <Link href = {'https://api.whatsapp.com/send?phone=917483576982'} className="hover:text-accent transition-all duration-300">
      <RiWhatsappLine/>
    </Link>

  </div>;
};

export default Socials;
