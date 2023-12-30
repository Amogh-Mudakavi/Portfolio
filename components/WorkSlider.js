// data
// data

const workSlides = {
  slides: [
    {
      images: [
        {
          title: 'title',
          path: './CN_TUNNEL.jpeg',
        },
        {
          title: 'title',
          path: './thumb2.jpeg',
        },
        {
          title: 'title',
          path: './thumb3.jpeg',
        },
        {
          title: 'title',
          path: './thumb4.jpeg',
        },
      ],
    },
    {
      images: [
        {
          title: 'title',
          path: './thumb5.jpeg',
        },
        {
          title: 'title',
          path: './thumb6.jpeg',
        },
        {
          title: 'title',
          path: './thumb7.jpeg',
        },
        {
          title: 'title',
          path: './thumb8.jpeg',
        },
      ],
    },
  ],
};


import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/pagination';
import { Pagination } from 'swiper';
import { BsArrowRight } from 'react-icons/bs';
import Image from 'next/image';

// ... (other imports)





// ... rest of your code

// ... rest of your code


const WorkSlider = () => {
  const githubUrl = 'https://github.com/Amogh-Mudakavi'; // Replace with your GitHub URL

  return (
    <Swiper
      spaceBetween={10}
      pagination={{ clickable: true }}
      modules={[Pagination]}
      className='h-[370px] sm:h-[520px]
    >
      {workSlides.slides.map((slide , index) => (
        <SwiperSlide key={index}>
          <div className='grid  md:ml-32  grid-flow-row grid-cols-2 justify-center gap-3 w-fit cursor-pointer' onClick={() => window.open(githubUrl, '_blank')}>
            {slide.images.map((image , index) => (
              <div className='relative  rounded-lg overflow-hidden flex items-center justify-center w-fit group' key={index}>
                <div className='flex  items-center justify-center relative overflow-hidden group'>
                  <Image className='rounded-xl' src={image.path} width={246} height={250} alt=''/>
                  <div className='absolute inset-0 bg-gradient-to-l rounded-xl from-transparent via-[#e838cc] to-[#4a22bd] opacity-0 group-hover:opacity-80 transition-all duration-700'></div>
                  <div className='absolute bottom-0 translate-y-full group-hover:-translate-y-10 group-hover:xl:-translate-y-20 transition-all duration-300'>
                    <div className='flex items-center gap-x-2 text-[13px] tracking-[0.2em]'>
                      <div className='delay-100'>LIVE</div>
                      <div className='translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay=150'>PROJECT</div>
                      <div className='text-xl translate-y-[500%] group-hover:translate-y-0 transition-all duration-300 delay-200'><BsArrowRight /></div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </SwiperSlide>
      ))}
    </Swiper>
  );
}

export default WorkSlider;
