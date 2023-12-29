import Image from "next/image";
import Particles from "../components/ParticlesContainer";
import ProjectsBtn from "../components/ProjectsBtn";
import Avatar from '../components/Avatar';
import { motion } from "framer-motion";
import { fadeIn } from '../variants';
import ParticlesContainer from "../components/ParticlesContainer";
import b from "../public/bg-explosion.png"

const Home = () => {
  return (
    <div className="bg-primary/60 h-full pt-20">
      <div className="w-full h-full bg-gradient-to-r from-primary/10 via-black/30 to-black/10">
        <div className="text-center flex flex-col justify-center xl:text-left h-full container mx-auto">
          <motion.h1
            variants={fadeIn('down', 0.2)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="h1 xl:mr-32 mb-8 mt-6 text-2xl pt-10 md:text-6xl" // Added xl:mr-32
          >
            <div className="md:py-4">

            Hey!
            </div>
            I&apos;m {' '}
            <span className="text-accent">Amogh Mudakavi.</span>
          </motion.h1>
          <motion.p
            variants={fadeIn('down', 0.3)}
            initial="hidden"
            animate="show"
            exit="hidden"
            className="max-w-sm xl:max-w-xl mx-auto xl:mx-0 mb-8"
          >
            I am currently a student majoring in Electronics with a minor 
            in Computer Science at <span className="text-accent">PES UNIVERSITY</span>.My academic focus is on 
            mastering data structures and algorithms, with a particular emphasis in <span className="text-accent">C++</span>
            and <span className="text-accent">SQL </span> database management systems
          </motion.p>

          {/* btn wrapper */}
          <div className="relative mb-24">
            <motion.div
              variants={fadeIn('down', 0.4)}
              initial="hidden"
              animate="show"
              exit="hidden"
              className="flex justify-center xl:justify-start"
            >
              <ProjectsBtn />
            </motion.div>
          </div>
        </div>
      </div>

      {/* image */}
      <div className="w-[1200px] h-full absolute right-0 bottom-0">

        {/* bg-img */}
       <div className="bg-none xl:bgexplosion xl:bg-cover xl:bg-right xl:bg-no-repeat w-full h-full absolute mix-blend-color-dodge translate-z-0">
        <Image src = {b.src}
            alt = ''
            />
    </div>

        {/* particles */}
        <ParticlesContainer/>

        {/* avatar image */}
        <motion.div
          variants={fadeIn('up' , 0.2)} 
          initial= 'hidden'
          animate='show'
          exit='hidden'
          transition={{duration:1 , ease:'easeInOut'}}
          className="w-full h-full max-w-[600px] max-h-[350px] absolute bottom-0 right-12" // Adjusted positioning here
        >
          <Avatar/>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
