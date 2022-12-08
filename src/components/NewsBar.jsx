import React from 'react'

function NewsBar({news, showDetailedNews}) {
  return (
    <>
    {news ?
    <div className='w-full p-2 border-b-2 border-gray-200 flex flex-row'>
        <div className='w-[70%] h-full'>
            <p onClick={()=>showDetailedNews(news?.title, news?.description ,news?.urlToImage)} 
               className='cursor-pointer font-mono text-lg font-semibold pt-2 pb-3'>
                {news?.title}
            </p>
            <p className='font-mono text-gray-500'>{news?.author}</p>
        </div>
        <div className='w-[30%] h-full'>
            <img 
            src={news?.urlToImage}
            alt="pic"
            className='w-full h-full object-contain flex items-center justify-center' />
        </div>
    </div>
    :
    <div></div>
    }
    </>
    
  )
}

export default NewsBar