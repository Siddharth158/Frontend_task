import React from 'react'
import { IoWallet } from "react-icons/io5";
import { FaBell } from "react-icons/fa";
import { IoIosArrowDown } from "react-icons/io";


function Navbar() {
    return (
        <div className='w-full px-5 py-2 flex justify-between border-b-2 bg-[#DEE0E2] border-zinc-200 '>
            <h1 className=' text-5xl'>
                aBit
            </h1>
            <div className='flex gap-6 items-center'>
                <button className=' border-2 rounded-full px-4 py-2 border-zinc-400'>Share new video</button>
                <div className=' text-2xl text-zinc-700'>
                    <IoWallet />
                </div>
                <div className=' text-2xl text-zinc-700'>
                    <FaBell />
                </div>
                <div className=' w-14 h-14 overflow-hidden rounded-full border-2 border-black '>
                    <img className=' w-full h-full object-cover' src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                </div>
                <button className=''>
                    <IoIosArrowDown />
                </button>
            </div>
        </div>
    )
}

export default Navbar