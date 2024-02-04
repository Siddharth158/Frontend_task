import React from 'react'
import {motion} from 'framer-motion'
import Video from './Video'

function Profile({data}) {
    const {name, label,city, date, description, title , image,coverimage, videos} = data;

  return (
    <div className='w-full relative'>
        <div className='w-full h-96'>
            <img className=' w-full object-cover h-full' src={coverimage} alt="" />
        </div>
        <div className=' w-full bg-zinc-800 py-5 flex items-center relative overflow-hidden text-white font-["Gloria_Hallelujah"] tracking-widest text-lg '>
            <motion.h1  initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease: 'linear', duration:25, repeat: Infinity}} className=' whitespace-nowrap'>/ {name} / {title} / Moved to {city} / {date} / Live now / {name} / {title} / Moved to {city} / {date} / Live now / {name} / {title} / Moved to {city} / {date} / Live now </motion.h1>
            <motion.h1  initial={{x:'0'}} animate={{x:'-100%'}} transition={{ease: 'linear', duration:25, repeat: Infinity}} className=' whitespace-nowrap'>/ {name} / {title} / Moved to {city} / {date} / Live now / {name} / {title} / Moved to {city} / {date} / Live now / {name} / {title} / Moved to {city} / {date} / Live now </motion.h1>
        </div>
        <div className='w-2/5 bg-[#ECECEC] border-2 border-zinc-600 rounded-lg flex overflow-hidden items-center absolute top-[25%] left-[10%] '>
            <div className='w-2/5 h-full border-r-2 border-zinc-600'>
                <img className='w-full h-full object-cover' src={image} alt="" />
            </div>
            <div className='px-5'>
                <div className='flex justify-between items-center mb-2'>
                    <h1 className='text-xl font-bold'>{name}</h1>
                    <h1 className=' text-sm text-zinc-600'>{label}</h1>
                </div>
                <div>
                    <p className='text-lg font-medium'>Bio</p>
                    <p className=' text-sm text-zinc-600'>{description}</p>
                </div>
                <div className='mt-4 w-full bg-zinc-900 rounded-md border-2 overflow-hidden border-black'>
                    <h1 className=' text-center font-medium w-1/2 bg-white rounded-md'>{title}</h1>
                </div>
            </div>
        </div>
        <Video vdata = {videos} />
    </div>
  )
}

export default Profile