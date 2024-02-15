import React from 'react'
import "slick-carousel/slick/slick.css" 
import "slick-carousel/slick/slick-theme.css"
import Slider from "react-slick"

function HomeSlider() {

    const settings = {
        dots: true,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        speed: 2000,
        autoplaySpeed: 2000,
        cssEase: "linear"
      };

  return (
    <div className='bg-[#F8F5F2]'>
      <div className='max-w-7xl p-3 mx-auto'>
        <h1 className='text-center font-bold text-3xl mt-3'>Reviews by Student</h1>
          <div className='mt-20 mb-10'>
          <Slider {...settings}>
            {data.map((item) => (
              <div className='bg-white h-[200px] text-black rounded-xl border border-gray-300'>
                <div className='flex flex-col justify-center items-center gap-3 p-4'>
                  <p className='text-xl font-semibold'>{item.name}</p>
                  <p>{item.review}</p>
                  <button className='bg-purple-600 p-2 px-3 rounded-md text-white mt-3
                  transition-all ease-in-out hover:scale-110'>Read More</button>
                </div>  
              </div>
            ))}
            </Slider>
          </div>  
      </div>
    </div>
  )
}

const data = [
    {
      name:'Abrar Yasir',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name:'Dibbyo Roy',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name:'Abdullah Ashik',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name:'Tahsin Ahmed',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name:'Emon Khan',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    },
    {
      name:'Abir Hasan',
      review:'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, quos.',
    }
  ]

export default HomeSlider