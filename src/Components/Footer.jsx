import React from 'react'

function Footer() {
  return (
    <div className='w-[90%] py-20 border-t-2 m-auto flex gap-10'>
        <div className=' basis-4/5 border-r-2 border-zinc-400'>
            <h1 className=' text-7xl font-bold'>aBit.</h1>
            <p className=' text-xl font-semibold text-zinc-500 mt-3'>Changing the way in which creators and fans interact.</p>
        </div>
        <div className=' flex flex-col gap-2'>
            <h1 className='text-lg font-semibold cursor-pointer'>HOME</h1>
            <h1 className='text-lg font-semibold  cursor-pointer'>Are you a Creator ?</h1>
            <h1 className='text-lg font-semibold cursor-pointer'>Support</h1>
        </div>
    </div>
  )
}

export default Footer