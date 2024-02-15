import React, { useEffect } from 'react'
import { useRef } from 'react'

function VideoPlayer({user}) {

    const ref = useRef()
    useEffect(() => {
        user.videoTrack.play(ref.current)
    }, [])
  return (
    <div>
        Uid : {user.uid}
        <div ref={ref}
        style={{width:'400px' , height:'400px'}}>
        </div>
    </div>
  )
}

export default VideoPlayer