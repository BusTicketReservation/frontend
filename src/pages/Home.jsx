import React from 'react'
import { AppText } from '../constants'
import {useTypewriter , Cursor} from 'react-simple-typewriter'
import Slider from "react-slick"
import HomeSlider from './HomeSlider';
import HomeVideo from './HomeVideo';
import { Link } from 'react-router-dom';
import Footer from '../components/Footer';

function Home() {

  const [typeEffect] = useTypewriter({
    words: [AppText.ssc, AppText.hsc, AppText.admission],
    loop: {},
    typeSpeed: 100,
    deleteSpeed: 40
  });


  return (
    <>
    <div className='bg-gray-900'>
      <div className='flex max-w-7xl p-3 mx-auto flex-col md:flex-row'>
        <div className='p-0.5'>
          <h1 className='text-[40px] font-bold text-white'>{AppText.welcome}</h1>
          <h1 className='text-[30px] font-bold text-white'>{AppText.to} {AppText.academy}
            <span className='text-purple-600'>{typeEffect}</span>
            <span className='text-purple-600'><Cursor/></span>
          </h1>
          <p className='text-gray-500 mt-3'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Omnis odit aut quod laudantium quos animi, adipisci voluptas asperiores excepturi dolorum officiis cum, dolorem necessitatibus laborum, libero rerum itaque magnam ad mollitia nesciunt? Velit laborum optio quia quas adipisci. Quae sapiente et rerum accusantium iusto? Facere ipsam laudantium maxime. Ad, ratione. Accusamus vitae nesciunt eius autem ratione minus, expedita eveniet, perspiciatis debitis ad blanditiis officiis fugiat rem molestias aliquam asperiores nostrum dignissimos non aut. Sunt, ipsum harum. Voluptates ratione repellat odit placeat minus fugiat quasi repellendus quidem nihil a voluptas nulla doloribus, dolorum pariatur cum possimus earum! Commodi dolores dolorum labore.</p>
          <Link to='/about'>
          <button className='bg-purple-600 p-2 px-3 rounded-md text-white mt-3
          transition-all ease-in-out hover:scale-110'>Explore</button>
          </Link>
        </div>
        
        <img src="https://cdn.pixabay.com/photo/2015/10/29/09/46/books-1012088_640.jpg" alt="" 
        className='w-[300px] md:w-[400px]'/>
      </div>

      <div className='max-w-7xl p-3 mx-auto mt-[100px]'>
        <h1 className='text-white text-3xl text-center'>Recomended Courses</h1>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10'>
              <div className='card'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <img src="https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg" alt="" />
                  </div>
                  <h5 className='text-2xl md:text-3xl text-white font-medium mt-3'>Physics Tutorial</h5>
                  <p className='text-white text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  <button className='text-center bg-purple-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-purple-700 focus:scale-0-95 transition-all duration-200 ease-out'>Know Details</button>
                </div>
              </div>
              <div className='card'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <img src="https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg" alt="" />
                  </div>
                  <h5 className='text-2xl md:text-3xl text-white font-medium mt-3'>Physics Tutorial</h5>
                  <p className='text-white text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  <button className='text-center bg-purple-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-purple-700 focus:scale-0-95 transition-all duration-200 ease-out'>Know Details</button>
                </div>
              </div>
              <div className='card'>
                <div className='p-5 flex flex-col'>
                  <div className='rounded-xl overflow-hidden'>
                  <img src="https://t4.ftcdn.net/jpg/02/14/56/75/360_F_214567514_hGbTMUq06pJIGKiXA248l43E3hU9Q08x.jpg" alt="" />
                  </div>
                  <h5 className='text-2xl md:text-3xl text-white font-medium mt-3'>Physics Tutorial</h5>
                  <p className='text-white text-lg mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae, qui praesentium odio labore inventore nulla!</p>
                  <button className='text-center bg-purple-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-purple-700 focus:scale-0-95 transition-all duration-200 ease-out'>Know Details</button>
                </div>
              </div>
            </div>
      </div>
    </div>

    <div>
        <div>
          <HomeSlider/>
        </div>
    </div>

    <div>
      <HomeVideo/>
    </div>
    <Footer/>
    </>
  )
}

export default Home