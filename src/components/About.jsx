import React from 'react'

function About() {
  return (
    <div id='about' className='w-full h-full bg-black text-gray-300' style={{paddingBottom:"20vh"}}>
      <div className='flex flex-col justify-center items-center w-full h-screen'>
        <div className='max-w-[1000px] w-full grid grid-cols-2 gap-8'>
          <div className='sm:text-right pb-8 pl-4'>
            <p className='text-4xl font-bold inline border-b-4 border-pink-600'>
              About
            </p>
          </div>
          <div></div>
          </div>
          <div className='max-w-[1000px] w-full grid sm:grid-cols-2 gap-8 px-4'>
            <div className='sm:text-right text-4xl font-bold'>
              <p>Hi. I'm Sarthak Pawse, nice to meet you. Please take a look around.</p>
            </div>
            <div>
              <p>I am passionate about building excellent software that improves
              the lives of those around me. I specialize in creating software
              for clients ranging from individuals and small-businesses all the
              way to large enterprise corporations.</p>  
            </div>
          </div>
      </div>
    </div>
  );
};

export default About
