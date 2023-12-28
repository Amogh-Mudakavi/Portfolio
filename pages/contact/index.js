import React from 'react';
import {BsArrowRight} from 'react-icons/bs';

export const ContactUs = () => {
  return (
    <div className='h-full bg-primary/30'>
      <div className='container mx-auto py-32 text-center xl:text-left flex items-center justify-center h-full'>
        <div className='flex flex-col w-full max-w-[700px]'>
          <h2 className='h2 text-center mb-12'>
            Let&apos;s start a <span className='text-accent'>project</span> together..?
          </h2>
          <form className='flex-1 flex-col gap-6 w-full mx-auto' action={`https://formspree.io/f/xyyrgqbo`} method="POST">
            <div className='flex gap-x-6 w-full'>
              <input type='text' name='user_name' placeholder='Name' className='input' />
              <input type='email' name='user_email' placeholder='Email' className='input' />
            </div>
            <input type='text' name='subject' placeholder='Subject' className='my-5 input' />
            <textarea name='message' placeholder='Message' className='textarea'></textarea>
            <button type='submit' className='btn rounded-full border border-white/50 max-w-[170px] px-8 transition-all duration-300 flex items-center justify-center overflow-hidden hover:border-accent group'>
              <span className='group-hover:-translate-y-[120%] group-hover:opacity-0 transition-all duration-500'>Let&apos;s talk</span>
              <BsArrowRight className='-translate-y-[120%] opacity-0 group-hover:flex group-hover:-translate-y-0 group-hover:opacity-100 transition-all duration-300 absolute text-[22px]'/>
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default ContactUs;
