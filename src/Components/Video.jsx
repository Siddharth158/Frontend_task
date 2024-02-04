import React from 'react'

function Video({vdata}) {

    let totalFunds = 0
    let totalShares = 0
    let totalCoFunds = 0

    console.log(vdata)

    function calcTotal (data){
        data.map((item)=>{
            totalShares += item.shares
            totalCoFunds += item.coearning
            totalFunds += item.raised
        })
    }

    calcTotal(vdata);

  return (
    <div className=' w-full py-32 px-20'>
        <div className=' mt-10 flex gap-8 m-auto'>
            <div className=' basis-1/2 border-r-2 border-zinc-600'>
                <h1 className=' text-xl font-bold'>
                    Releases
                </h1>
                <p className=' italic text-zinc-600'>Videos that you upload with collaboration with aBit appears here</p>
            </div>
            <div className='border-r-2 border-zinc-600 w-32'>
                <h1 className=' text-xl font-bold'>{vdata.length}</h1>
                <p className='text-zinc-600'>shared videos</p>
            </div>
            <div className='border-r-2 border-zinc-600 w-32'>
                <h1 className=' text-xl font-bold'>${totalFunds}</h1>
                <p className='text-zinc-600'>Funds Raised</p>
            </div>
            <div className='border-r-2 border-zinc-600 w-32'>
                <h1 className=' text-xl font-bold'>{totalShares}</h1>
                <p className='text-zinc-600'>Co-owner Community</p>
            </div>
            <div className=' w-32'>
                <h1 className=' text-xl font-bold'>${totalCoFunds}</h1>
                <p className='text-zinc-600'>Co-owner Earnings</p>
            </div>
        </div>
        <div className='mt-20 flex gap-8 '>
            <div className=' flex flex-col p-10 cursor-pointer items-center w-80 rounded-lg h-80 bg-[#EDEDED] justify-center '>
                <h1 className='text-7xl font-bold text-zinc-600'>+</h1>
                <p className='text-center text-zinc-600 text-sm mt-5'>You haven't uploaded any videos with aBit yet. Add now!</p>
            </div>
            {vdata.map((item , index)=>(
                <div key={index} className=' flex flex-col relative p-4 cursor-pointer items-center overflow-hidden bg-black/20 w-80 rounded-lg h-80 justify-between '>
                <h1 className='text-xl font-bold text-white'>{item.Vtitle}</h1>
                <img className='w-full h-full absolute top-0 left-0 object-cover -z-10 ' src={item.vimage} alt="" />
                <div className=' w-full flex bg-white/10 justify-evenly rounded-xl py-2 gap-3 backdrop-blur-lg text-white'>
                    <div className=' text-center'>
                        <h1 className='text-sm'>Shares</h1>
                        <p className='text-lg font-medium'>{item.shares}</p>
                    </div>
                    <div className=' text-center'>
                        <h1 className='text-sm'>Offered</h1>
                        <p className='text-lg font-medium'>{item.offered}</p>
                    </div>
                    <div className=' text-center'>
                        <h1 className='text-sm'>Raised</h1>
                        <p className='text-lg font-medium'>${item.raised}</p>
                    </div>
                    
                </div>
            </div>
            ))}
        </div>
    </div>
  )
}

export default Video