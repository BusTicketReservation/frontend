import React from 'react'

function HomeVideo() {
  return (
    <div className='bg-[#F8F5F2]'>
        <div className='max-w-7xl p-3 mx-auto'>
        <h1 className='text-black text-3xl text-center font-bold'>Our Guidlines</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
              <div className='homevideocard'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <iframe width="390" height="240" src="https://www.youtube.com/embed/wI28Pvt5i-A?si=LLAKAA4AyVqlJjpM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl'></iframe>
                  </div>
                  <h5 className='text-2xl md:text-3xl text-black font-medium mt-3'>Watch This</h5>
                  <p className='text-black text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  
                </div>
              </div>
              <div className='homevideocard'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <iframe width="390" height="240" src="https://www.youtube.com/embed/wI28Pvt5i-A?si=LLAKAA4AyVqlJjpM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl'></iframe>
                  </div>
                  <h5 className='text-2xl md:text-3xl text-black font-medium mt-3'>Watch This</h5>
                  <p className='text-black text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  
                </div>
              </div>
              <div className='homevideocard'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <iframe width="390" height="240" src="https://www.youtube.com/embed/wI28Pvt5i-A?si=LLAKAA4AyVqlJjpM" title="YouTube video player" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowFullScreen className='rounded-xl'></iframe>
                  </div>
                  <h5 className='text-2xl md:text-3xl text-black font-medium mt-3'>Watch This</h5>
                  <p className='text-black text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  
                </div>
              </div>
            </div>
      </div>
    </div>
  )
}

export default HomeVideo