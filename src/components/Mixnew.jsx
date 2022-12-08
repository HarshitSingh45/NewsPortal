import axios from 'axios';
import React, { useState, useEffect } from 'react'
import { APIKEY } from '../utils/data';
import {createSearchParams, useNavigate} from 'react-router-dom';

function Mixnew({type, image}) {
    const [news, setNews] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(`https://newsapi.org/v2/everything?q=${type}&apiKey=${APIKEY}`);
            const articleArray = data?.data?.articles?.slice(0,3);
            setNews(articleArray);
        }
        fetchData(); 
    }, [])
    const navigate = useNavigate();
    const showDetailedNews = async(title, description, selectedimage) => {
        navigate({
            pathname: '/news',
            search: createSearchParams({
                title: title,
                description: description,
                selectedimage: selectedimage
            }).toString()
        })
    }
  return (
    <div className='sm:w-[23%] h-auto flex flex-col'>
        <div>
            <span className='bg-black text-white py-1 px-3'>{type}</span>
        </div>
        <div className='w-full h-[150px] border-2 '>
            <img src={image}
                 alt="pic"
                 className='w-full h-full object-cover' />
        </div>
        <div 
           onClick={()=>showDetailedNews(news[0]?.title, news[0]?.description, news[0]?.urlToImage)}
           className='cursor-pointer w-full font-mono border-b-2 border-gray-200 text-lg font-semibold py-3'>{news[0]?.title}</div>
        <div 
            onClick={()=>showDetailedNews(news[1]?.title, news[1]?.description, news[1]?.urlToImage)}
            className='cursor-pointer w-full font-mono border-b-2 border-gray-200 text-lg font-semibold py-3'>{news[1]?.title}</div>
        <div 
            onClick={()=>showDetailedNews(news[2]?.title, news[2]?.description, news[2]?.urlToImage)}
            className='cursor-pointer w-full font-mono border-b-2 border-gray-200 text-lg font-semibold py-3'>{news[2]?.title}</div>
    </div>
  )
}

export default Mixnew