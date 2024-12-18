import React from 'react';
import {assets} from '../assets/assets.js'

export const SideBar = () => {
  return (
    <div className='w-[25%] h-full flex-col gap-2 text-white hidden lg:flex'>
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
              <img className ='w-6' src={assets.home_icon} alt="" />
              <p className='font-bold'>Home</p>
          </div>
          <div className='flex items-center gap-3 pl-8 cursor-pointer'>
              <img className ='w-6' src={assets.search_icon} alt="" />
              <p className='font-bold'>Search</p>
          </div>
      </div>
      <div className='bg-[#121212] h-[85%] rounded'>
          <div className='p-4 flex items-center justify-between '>
              <div className='flex items-center gap-3'>
                  <img className='w-8'src={assets.stack_icon} alt="" />
                  <p className='font-semibold'>Your Library</p>
              </div>
            <div className='flex items-center gap-3'>
                <img className ="w-5" src={assets.arrow_icon} alt="" />
                <img className ="w-5" src={assets.plays_icon} alt="" />
            </div>
          </div>
      </div>
    </div>
  )
}
