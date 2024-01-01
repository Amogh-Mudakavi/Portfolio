import WorkSlider from '../../components/WorkSlider';
import Bulb from '../../components/Bulb';
import Circles from '../../components/Circles';

import { motion } from 'framer-motion';
import { fadeIn } from '../../variants';


const Work = () =>{
  return(
    <div className='h-full bg-primary/30 md:py-36 py-24 flex-center'>
      <Circles/>
      <div className='container mx-auto'>
        <div className='flex flex-col xl:flex-row gap-x-8'>
          <div className='text-center flex xl:w-[30vw] flex-col lg:text-left mb-4 xl:mb-0'>
            <motion.h2
            variants={fadeIn('up' , 0.2)}
            initial='hidden'
            animate = 'show'
            exit='hidden'
            className='md:h2 font-bold text-3xl xl:mt-12'
            >
              My work <span className='text-accent'></span>
              
            </motion.h2>
            <motion.p
            variants={fadeIn('up' , 0.4)}
            initial= 'hidden'
            animate= 'show'
            exit = 'hidden'
            className='md:mb-4   max-w-[400px] mx-auto lg:max-0'
            >

I am engaged in projects that span various fields such as VLSI, computer networks, data structures, and web development.

            </motion.p>
          </div>
          {/* slider */}
          <motion.div
          variants={fadeIn('down' , 0.6)}
          initial= 'hidden'
          animate='show'
          exit='hidden'
          className='w-full xl:max-w-[65%] md:mb-20 xl:pr-36'
          >
            <WorkSlider/>
          </motion.div>
        </div>
      </div>
      <Bulb/>
    </div>
  )
}
export default Work;
