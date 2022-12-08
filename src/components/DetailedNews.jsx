import React, { useState } from 'react'
import {useSearchParams} from 'react-router-dom';

function DetailedNews() {
    const [searchParams] = useSearchParams();
    // const chk = searchParams.get('selectedimage');
    const title = searchParams.get('title');
    const description = searchParams.get('description');
    const selectedImage = searchParams.get('selectedimage');


  return (
    <div className='pt-4 w-full flex flex-col'>
        <div className='flex items-center justify-center'>
            <div className='w-[85%] h-[275px] sm:w-[40%] sm:h-[400px] border-2'>
                <img 
                   src={selectedImage} 
                   alt="news image"
                   className='w-full h-full object-contain' />
            </div>
        </div>
        <div className='flex flex-col items-center justify-center'>
            <p className='pt-10 pb-6 font-bold font-serif text-3xl'>{title}</p>
            <p className='pb-28 font-semibold font-serif text-lg'>{description}</p>
        </div>
    </div>
  )
}

export default DetailedNews