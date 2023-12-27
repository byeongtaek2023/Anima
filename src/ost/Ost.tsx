import axios from 'axios'
import UtubeAxios from 'axios/youtubeApi'
import React, { useEffect, useState } from 'react'

const Ost = () => {

const [utubeData, setUtubeDats] = useState<any>('');

useEffect(()=>{

    async function getUtube() {
      const data = await axios.get(`${UtubeAxios}&q=Animation ost`)
      setUtubeDats(data)
    }
    getUtube();
    
},[])    

console.log(utubeData);

  return (
    <>
    {utubeData.map((item:any)=>{
        return (
           <div key={item.id}>

           </div>
        )
    })}
    </>
  )
}

export default Ost