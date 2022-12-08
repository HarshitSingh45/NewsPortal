import React from 'react'
import Footer from './Footer'
import MixedNews from './MixedNews'
import Technology from './Technology'
import TopHeadlines from './TopHeadlines'
import Trending from './Trending'


export default function MainContainer() {
  return (
    <>
    <div className='w-full h-auto flex flex-col items-center justify-center gap-6'>
        <TopHeadlines />
        <Trending />
        <Technology />
        <MixedNews />
        
    </div>
    </>
  )
}
