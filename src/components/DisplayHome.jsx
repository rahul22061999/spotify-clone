import React from 'react';
import Navbar from './Navbar';
import { albumsData, songsData } from '../assets/assets';
import Albumitem from './Albumitem';
import Songitem from './Songitem';

const DisplayHome = () => {
  return (
    <>
      <Navbar/>
      <div className='mb-4'>
        <h1 className='my-5 font-bold text-2xl'>Featured Charts</h1>
        <div className='flex overflow-auto'>
        {albumsData.map((item, index) => (<Albumitem image={item.image} name={item.name} desc={item.desc} key={index} id={item.id}/>))}
      </div>
      <h1 className='my-5 font-bold text-2xl'>Today's biggest hits</h1>
        <div className='flex overflow-auto'>
        {songsData.map((item, index) => (<Songitem image={item.image} name={item.name} desc={item.desc} key={index} id={item.id}/>))}
      </div>
      </div>
    </>
  )
}

export default DisplayHome