import React, {useEffect, useState} from 'react'
import {Link} from 'react-router-dom';
import {motion} from 'framer-motion';
import {BiRupee, BiWalletAlt} from 'react-icons/bi'
import {AiOutlineDown, AiOutlineMenu} from 'react-icons/ai'
import axios from 'axios';

export default function Header() {
    const [isMenu, setIsMenu] = useState(false);
    const [lang, setLang] = useState(false);

    // useEffect(()=>{
    //     let fetchData = async() => {
    //         let data = await axios.get('https://newsapi.org/v2/top-headlines?country=us&apiKey=300be0372ce64ead840346911752051c')
    //         console.log(data);
    //     }
    //     fetchData();
    // })

  return (
    <div className='w-screen fixed z-50 p-2 px-4 md:p-6 md:px-16 bg-headerBg border-b-2 border-gray-300'>
    {/* desktop and tablet */}
    <div className='hidden md:flex w-full h-full items-center justify-between'>
        <div className='flex items-center gap-16'> 
            <Link to='/' className='text-headingColor cursor-pointer text-2xl font-bold'>THE NEWS</Link>
            <p className='text-lg'>24 Hour News Source</p>
        </div>
        <div className='flex items-center gap-8 text-lg'>            
            <div className='relative'>
                <div onClick={()=>setLang(!lang)}
                    className='flex items-center justify-center shadow-lg p-2 border-[1px] w-[100px] overflow-hidden border-gray-100 cursor-pointer'>
                    English
                </div>
                {
                    lang && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-40 bg-headerBg shadow-xl rounded-lg absolute top-10 left-0 '>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>English </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Hindi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Marathi </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Malayalam </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Kannada </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Tamil </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Telugu </p>
                        </motion.div>
                    )
                }
            </div>
            <Link to='/create' className='flex items-center justify-center shadow-lg p-2 border-[1px] border-gray-100 cursor-pointer'>
                <p>CREATE POST</p>
            </Link>
            <div className='relative'>
                <motion.img 
                    whileTap={{scale:0.6}} 
                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                    alt="profilePic" 
                    onClick={()=>setIsMenu(!isMenu)}
                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl cursor-pointer' 
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-60 bg-headerBg shadow-xl rounded-lg absolute top-10 right-0 '>
                            <div className='flex flex-col items-center justify-center gap-2 mt-8'>
                                <img 
                                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                                    alt="profilePic" 
                                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl' 
                                />
                                <p>Harshit Singh</p>
                            </div>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Posts History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Subscription History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Followed Articles </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Account Setting </p>
                            <p className='px-4 py-2 flex items-center justify-center gap-3 text-headingColor cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-base'>Logout </p>
                        </motion.div>
                    )
                }
            </div>
        </div> 
    </div>
    {/* mobile */}
    <div className='flex items-center justify-between md:hidden w-full h-full'>

        <div className='flex items-center gap-16'>
            <Link to='/' className='text-headingColor text-2xl font-bold'>THE NEWS</Link>
        </div>
        <div className='flex items-center gap-4 text-lg'>
            <div className='relative'>
                <Link
                    to='/create'
                    className='flex items-center justify-center shadow-lg p-2 border-[1px] overflow-hidden border-gray-100 cursor-pointer'>
                    Create Post
                </Link>
                
            </div>
            <div className='relative'>
                <AiOutlineMenu
                    onClick={()=>setIsMenu(!isMenu)}
                    className='text-3xl text-gray-500 shadow-2xl cursor-pointer' 
                />
                {
                    isMenu && (
                        <motion.div 
                          initial={{opacity:0, scale: 0.6}}
                          animate={{opacity:1, scale: 1}}
                          exit={{opacity:0, scale: 0.6}}
                          className='flex flex-col w-60 bg-headerBg shadow-xl rounded-lg absolute top-10 right-0 '>
                            <div className='flex flex-col items-center justify-center gap-2 mt-8'>
                                <img 
                                    src= 'https://www.w3schools.com/howto/img_avatar.png'
                                    alt="profilePic" 
                                    className='rounded-full w-10 min-w-[40px] h-10 min-h-[40px] shadow-2xl' 
                                />
                                <p>Philpy</p>
                            </div>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Order History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Recharge History </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Followed Astrologer </p>
                            <p className='px-4 py-2 flex items-center gap-3 cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-textColor text-base'>Account Setting </p>
                            <p className='px-4 py-2 flex items-center justify-center gap-3 text-headingColor cursor-pointer hover:bg-slate-200 transition-all ease-in-out duration-100 text-base'>Logout </p>
                        </motion.div>
                    )
                }
            </div>
        </div>
    </div>
    </div>
  )}
