import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {createSearchParams, useNavigate} from 'react-router-dom';
import { APIKEY } from '../utils/data';
import NewsBar from './NewsBar'

function Technology() {
    const [techNews, setTechNews] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(`https://newsapi.org/v2/everything?q=tech&apiKey=${APIKEY}`);
            const articleArray = data?.data?.articles?.slice(0,5);
            setTechNews(articleArray);
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
    <>
    <div className='hidden sm:flex h-[30px] w-full mt-3'>
        <div className='w-full border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                TECH REVIEWS
            </span>
            <span className='px-6 font-mono'>
                PRODUCT REVIEWS AND BUYING GUIDES
            </span>
        </div>
    </div>
    <div className='hidden w-full sm:flex flex-row justify-between pb-6 border-b-2 border-gray-300 '>
        <div className='w-[60%] h-[450px]'>
            <img 
                src={techNews[0]?.urlToImage} 
                alt="tech-pic"
                className='w-full h-full object-cover' />
        </div>
        <div className='w-[39%] h-[450px] flex flex-col justify-between'>
            <div onClick={()=>showDetailedNews(techNews[0]?.title, techNews[0]?.description, techNews[0]?.urlToImage)} className='cursor-pointer font-sans text-5xl font-bold'>
                {techNews[0]?.title}
            </div>
            <div className='font-mono text-lg text-gray-500 pb-4'>
                {techNews[0]?.description}
            </div>
        </div>
    </div>
    <div className='hidden w-full sm:flex flex-row justify-between mt-3 mb-3 pb-6'>
        <div className='w-[24%]'>
            <NewsBar news={techNews[1]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBar news={techNews[2]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBar news={techNews[3]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBar news={techNews[4]} showDetailedNews={showDetailedNews}/>
        </div>
    </div>


    {/* mobile */}

   <div className='sm:hidden flex flex-row h-[30px] w-full justify-between'>
         <div className='w-full border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                TECH REVIEWS
            </span>
            <span className='px-6 font-mono'>
                PRODUCT REVIEWS AND BUYING GUIDES
            </span>
        </div>
     </div>
     <div className='sm:hidden w-full flex flex-col'>
        <div className='w-full flex flex-col'>
            <div className='w-full h-[250px] border-2'>
                <img 
                    onClick={() => showDetailedNews(techNews[0].title, techNews[0].description, techNews[0].urlToImage)}
                    className='cursor-pointer w-full h-full object-cover' src={techNews[0]?.urlToImage} alt="" />
            </div>
            <div>
                <p 
                  onClick={() => showDetailedNews(techNews[0].title, techNews[0].description, techNews[0].urlToImage)}
                  className='cursor-pointer font-mono text-2xl font-bold pb-5'>{techNews[0]?.title}</p>
            </div>
        </div>
        <NewsBar news={techNews[1]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={techNews[2]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={techNews[3]} showDetailedNews={showDetailedNews}/>
     </div>
    </>
  )
}

export default Technology