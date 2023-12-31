import Image from "next/image";
import Link from "next/link";
import { HiArrowRight } from "react-icons/hi2";
import f from "../public/rounded-text.png";
const ProjectsBtn = () => {
  return (
    <div className="mx-auto xl:mx-0 z-10">
      <Link href="/work">
        <div className="relative w-[185px] h-[185px] flex justify-center items-center bg_circleStar bg-cover bg-center bg-no-repeat group cursor-pointer">
          <Image
            src={f.src}
            width={141}
            height={148}
            alt=''
            className="animate-spin-slow w-full h-full max-w-[141px] max-h-[148px]"
          />
          <HiArrowRight className="absolute text-4xl group-hover:translate-x-2 transition-all duration-300" /> 
        </div>
      </Link>
    </div>
  );
};

export default ProjectsBtn;
