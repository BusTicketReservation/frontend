import React, { useEffect } from 'react'
import AgoraRTC from 'agora-rtc-sdk-ng'
import { useState } from 'react'
import VideoPlayer from './VideoPlayer'


const APP_ID = '84b1724ecd794856803f3c609a61c9ae'
const TOKEN = '007eJxTYPi3LUzl/h7JIu+f57oXxf3dvGKPy/b1fgd+z9hfd3nvXbmvCgwWJkmG5kYmqckp5pYmFqZmFgbGacbJZgaWiWaGyZaJqd6VJ1IbAhkZIu+8ZGZkgEAQn5UhMakosYiBAQDNxSSE'
const CHANNEL = 'abrar'   // AAD = Abrar Ashik Dibbyo

const client = AgoraRTC.createClient({ 
    mode: 'rtc',
    codec: 'vp8' ,
})

function VideoRoom() {

    const [users , setUsers] = useState([])
    const [localTracs , setLocalTracks] = useState([])

    const handleUserJoined = async(user , mediaType) => {
        await client.subscribe(user , mediaType)
        if(mediaType === 'video'){
            setUsers((previousUsers) => [...previousUsers , user])
        }
        if( mediaType === 'audio'){
            //user.audioTrack.play()
        }
    }
    const handleUserLeft = (user) => {
        setUsers((previousUsers) => previousUsers.filter((u) => u.uid !== user.uid))
    }

    useEffect(() => {
        client.on('user-published' , handleUserJoined)
        client.on('user-left' , handleUserLeft)

        client.join(APP_ID , CHANNEL , TOKEN , null)
        .then((uid) => 
             Promise.all([AgoraRTC.createMicrophoneAndCameraTracks(),uid])
        ).then(([tracks , uid]) => {
            const [audioTrack , videoTrack] = tracks
            setLocalTracks(tracks)
            setUsers((previousUsers) => [...previousUsers , {
                uid , 
                videoTrack,
                audioTrack,
            },
        ])
            client.publish(tracks)
        })

        return () => {
            for( let localTrack of localTracs){
                localTrack.stop()
                localTrack.close()
            }
            client.off('user-published' , handleUserJoined)
            client.off('user-left' , handleUserLeft)
            //client.unpublish(tracks).then(() => client.leave())

        }
    } , [])
  return (
    <div className='flex justify-center'>
        VideoRoom
        {
            users.map((user) => (
                <VideoPlayer key={user.uid} user={user} />
            ))
        }
    </div>
  )
}

export default VideoRoom