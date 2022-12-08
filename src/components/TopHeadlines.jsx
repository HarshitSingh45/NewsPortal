import axios from 'axios';
import React, { useState, useEffect } from 'react'
import {useSearchParams} from 'react-router-dom';
import {createSearchParams, useNavigate} from 'react-router-dom';
import { APIKEY } from '../utils/data';
import NewsBar from './NewsBar'
import NewsBox from './NewsBox'

function TopHeadlines() {
    const [headLines, setHeadLines] = useState([]);
    const [myPosts, setMyPosts] = useState([]);
    const [searchParams] = useSearchParams();

    const chk = searchParams.get('selectedimage');
    let postData = {
        title: searchParams.get('title'),
        description: searchParams.get('description'),
        urlToImage: chk
    }

    useEffect(() => {
        const fetchData = async() => {
            const data = await axios.get(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${APIKEY}`);
            const articleArray = data?.data?.articles?.slice(0,4);
            setHeadLines(articleArray);
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
    // Desktop 
    <>
    <div className='hidden sm:flex flex-row h-[30px] w-full justify-between'>
        <div className='w-[69%] border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                TODAY'S PICK
            </span>
        </div>
        <div className='w-[30%] border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                MY POSTS
            </span>
        </div>
    </div>
    <div className='hidden sm:flex flex-row h-600 w-full justify-between'>
        <div className='w-[69%]  flex justify-between'>
            <div className='w-[36%] h-full flex flex-col overflow-scroll'>
                <NewsBox news={headLines[1]} showDetailedNews={showDetailedNews} />
                <NewsBox news={headLines[2]} showDetailedNews={showDetailedNews}/>
            </div>
            <div className='w-[62%] h-full'>
                <div className='w-[full] h-[60%] '>
                    <img 
                       src={headLines[0]?.urlToImage} 
                       alt="news img"
                       className='w-full h-full object-cover' />
                </div>
                <div className='w-[full] h-[40%] overflow-hidden'>
                    <p
                      onClick={() => showDetailedNews(headLines[0].title, headLines[0].description, headLines[0].urlToImage)} 
                      className='cursor-pointer text-2xl font-mono font-bold pt-3 pb-2'>{headLines[0]?.title}</p>
                    <p className='text-lg font-sans text-gray-500'>{headLines[0]?.description}</p>
                    <p className='pt-2'>{headLines[0]?.author}</p>
                </div>
            </div>
        </div>
        <div className='w-[30%] border-2'>
            {postData.title ?
            <div className='w-full h-auto flex flex-col justify-between'>
                <div className='w-full h-[250px] border-2 '>
                    <img 
                        src={postData?.urlToImage} 
                        alt="post img" 
                        onClick={() => showDetailedNews(postData.title, postData.description, postData.urlToImage)}
                        className='cursor-pointer w-full h-full object-cover'/>
                </div>
                <div>
                    <p 
                    onClick={() => showDetailedNews(postData.title, postData.description, postData.urlToImage)}
                    className='cursor-pointer font-mono font-bold text-2xl pt-4 pb-6 px-1'>{postData?.title}</p>
                    <p className='font-mono px-1'>{postData?.description}</p>
                </div>
            </div>
            :
            <div className='flex h-full px-4 items-center justify-center text-gray-400 font-bold text-2xl'> No posts has been added by you yet !!</div>
            }
            
        </div>
    </div>

    {/* mobile */}
    <div className='sm:hidden'>
    {postData.urlToImage ?
    <>
        <div className=' flex flex-row h-[30px] w-full justify-between'>
            <div className='w-full border-t-4 border-black'>
                <span className='py-1 px-2 bg-black text-white font-mono'>
                    MY POSTS
                </span>
            </div>
        </div>
        <div className=' w-full flex flex-col'>
            <div className='w-full flex flex-col'>
                <div className='w-full h-[250px] border-2'>
                    <img className='w-full h-full object-cover' src={postData.urlToImage} alt="" />
                </div>
                <div>
                    <p className='font-mono text-2xl font-bold'>{postData.title}</p>
                    <p className='font-mono text-lg'>{postData.description}</p>
                </div>
            </div>
        </div>
    </>
    :
    <></>
    }
    </div>
    
    <div className='sm:hidden flex flex-row h-[30px] w-full justify-between'>
        <div className='w-full border-t-4 border-black'>
            <span className='py-1 px-2 bg-black text-white font-mono'>
                TODAY'S PICK
            </span>
        </div>
     </div>
     <div className='sm:hidden w-full flex flex-col'>
        <div className='w-full flex flex-col'>
            <div className='w-full h-[250px] border-2'>
                <img 
                    onClick={() => showDetailedNews(headLines[0].title, headLines[0].description, headLines[0].urlToImage)}
                    className='cursor-pointer w-full h-full object-cover' src={headLines[0]?.urlToImage} alt="" />
            </div>
            <div>
                <p 
                   onClick={() => showDetailedNews(headLines[0].title, headLines[0].description, headLines[0].urlToImage)}
                   className='cursor-pointer font-mono text-2xl font-bold pb-5'>{headLines[0]?.title}</p>
            </div>
        </div>
        <NewsBar news={headLines[1]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={headLines[2]} showDetailedNews={showDetailedNews}/>
        <NewsBar news={headLines[3]} showDetailedNews={showDetailedNews}/>
     </div>
        
    
    </>
  )
}
export default TopHeadlines