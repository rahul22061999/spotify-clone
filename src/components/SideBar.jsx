import React from 'react';
import { assets } from '../assets/assets.js';

export const SideBar = () => {
  return (
    <div className='w-[25%] h-full flex-col gap-2 text-white hidden lg:flex'>
      {/* Top Section */}
      <div className='bg-[#121212] h-[15%] rounded flex flex-col justify-around'>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.home_icon} alt="Home Icon" />
          <p className='font-bold'>Home</p>
        </div>
        <div className='flex items-center gap-3 pl-8 cursor-pointer'>
          <img className='w-6' src={assets.search_icon} alt="Search Icon" />
          <p className='font-bold'>Search</p>
        </div>
      </div>

      {/* Bottom Section */}
      <div className='bg-[#121212] h-[85%] rounded'>
        {/* Library Header */}
        <div className='p-4 flex items-center justify-between'>
          <div className='flex items-center gap-3'>
            <img className='w-8' src={assets.stack_icon} alt="Library Icon" />
            <p className='font-semibold'>Your Library</p>
          </div>
          <div className='flex items-center gap-3'>
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plays_icon} alt="Plays Icon" />
          </div>
        </div>
        <div className='p-4 bg-[#242424] m-4 rounded font-semibold flex flex-col items-start gap-1'>
          <h1>Create your own playlist</h1>
          <p className='font-light'>It’s easy, we will help you</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Create Playlist</button>
        </div>
        <div className='p-4 bg-[#242424] m-4 rounded font-semibold flex flex-col items-start gap-1 mt-4'>
          <h1>Podcasts to follow</h1>
          <p className='font-light'>Create new podcasts</p>
          <button className='px-4 py-1.5 bg-white text-[15px] text-black rounded-full mt-4'>Browse podcasts</button>
        </div>
      </div>
    </div>
  );
};
