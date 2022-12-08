import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {createSearchParams, useNavigate} from 'react-router-dom';
import { APIKEY } from '../utils/data';
import NewsBox from './NewsBox'
import NewsBar from './NewsBar';

function Trending() {
    const [trendingNews, setTrendingNews] = useState([]);

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(`https://newsapi.org/v2/everything?q=trending&apiKey=${APIKEY}`);
            const articleArray = data?.data?.articles?.slice(0,4);
            setTrendingNews(articleArray);
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
    <div className='hidden sm:flex h-[30px] w-full mt-3 mb-10'>
        <div className='w-full border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                TRENDING STORIES
            </span>
            <span className='px-6 font-mono'>
                TOP STORIES IN LAST 24 HOURS
            </span>
        </div>
    </div>
    <div className='hidden w-full sm:flex flex-row justify-between pb-6'>
        <div className='w-[24%]'>
            <NewsBox news={trendingNews[0]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBox news={trendingNews[1]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBox news={trendingNews[2]} showDetailedNews={showDetailedNews}/>
        </div>
        <div className='w-[24%]'>
            <NewsBox news={trendingNews[3]} showDetailedNews={showDetailedNews}/>
        </div>
    </div>

    {/* mobile */}

    <div className='sm:hidden flex flex-row h-[30px] w-full justify-between'>
        <div className='w-full border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                 TRENDING STORIES
            </span>
            <span className='px-6 font-mono'>
                TOP STORIES IN LAST 24 HOURS
            </span>
        </div>
     </div>
     <div className='sm:hidden w-full flex flex-col'>
        <div className='w-full flex flex-col'>
            <div className='w-full h-[250px] border-2'>
                <img 
                    onClick={() => showDetailedNews(trendingNews[0].title, trendingNews[0].description, trendingNews[0].urlToImage)}
                    className='cursor-pointer w-full h-full object-cover' src={trendingNews[0]?.urlToImage} alt="" />
            </div>
            <div>
                <p 
                  onClick={() => showDetailedNews(trendingNews[0].title, trendingNews[0].description, trendingNews[0].urlToImage)}
                  className='cursor-pointer font-mono text-2xl font-bold pb-5'>{trendingNews[0]?.title}</p>
            </div>
        </div>
        <NewsBar news={trendingNews[1]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={trendingNews[2]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={trendingNews[3]} showDetailedNews={showDetailedNews}/>
     </div>
    </>
  )
}

export default Trending