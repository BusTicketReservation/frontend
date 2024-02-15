import React from 'react'
import { useState } from 'react'
import VideoRoom from '../components/VideoRoom'

function Video() {

    const [joined , setJoined] = useState(false)
  return (
    <div className='flex flex-col'>
        <h1 className='text-center text-2xl font-bold'>Video calling system</h1>
        {
            !joined && (
                <button onClick={() => setJoined(true)} className='text-center bg-purple-600 text-white py-2 rounded-lg font-semibold mt-4 hover:bg-purple-700 focus:scale-0-95 transition-all duration-200 ease-out'>Join Room</button>
            )
        }
        {
            joined && (
                <VideoRoom />
            )
        }
    </div>
  )
}

export default Video