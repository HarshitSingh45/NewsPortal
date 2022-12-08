import React from 'react'

function NewsBox({news, showDetailedNews}) {
  return (
    <div className='w-[100%] h-full '>
        <div className='h-[55%] border-2'>
            <img 
                 src={news?.urlToImage}
                 alt="news img pic"
                 className="w-full h-full object-cover"
             />
        </div>
        <div className='h-[45%] border-2 px-1'>
            <p onClick={()=>showDetailedNews(news.title, news.description, news.urlToImage)} className='cursor-pointer text-xl font-mono font-bold pb-2'>
                {news?.title}
            </p>
            <p className='font-light'>{news?.author}</p>
        </div>
    </div>
  )
}

export default NewsBox