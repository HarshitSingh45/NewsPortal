import axios from 'axios';
import React, { useContext, useState } from 'react'
import {createSearchParams, useNavigate} from 'react-router-dom';

function CreatePost() {
    const [selectedimage, setselectedImage] = useState();
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();
    

    let formData = new FormData();
    const onSelectFile = (e) => {
        formData.append('file',e.target.files[0])
        const selectedFile = e.target.files;
        // console.log(selectedFile);
        // const selectedfilesarray = Array.from(selectedFile);
        // console.log(selectedfilesarray);
        const image = URL.createObjectURL(selectedFile[0]);
        setselectedImage(image);
    }
    const params = { title, description, selectedimage };
    
    const submit = async() => {
        navigate({
            pathname: '/',
            search: createSearchParams({
                title: title,
                description: description,
                selectedimage: selectedimage
            }).toString()
        })
    }
  return (
    <>
    <h1 className='flex items-center justify-center text-purple-500 mt-8 font-mono text-4xl font-bold'>Post your story</h1>
    <div className='hidden w-full mb-20 sm:flex mt-10 justify-center'>
        <div className='w-[75%] pb-10 h-auto border-2 border-gray-400 rounded-xl'>
            <div className='ml-4 mt-10'>
                <div>
                    <span className='align-top font-semibold'>Enter your story title</span> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <textarea onChange={(e)=>setTitle(e.target.value)} value={title} cols="60" className='overflow-hidden border-2 text-lg' rows="1"></textarea>
                </div>
                <div>
                    <span className='align-top font-semibold'>Enter your story description</span> &nbsp; &nbsp;
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='border-2' rows="10" cols="90"></textarea>
                </div>
                <div>
                    <span className='align-top font-semibold'>Enter your story description</span> &nbsp; &nbsp;
                    <input type="file" onChange={onSelectFile} />
                </div>
                { 
                    selectedimage && 
                    <div>
                        <img src={selectedimage} 
                             alt="selected-pic" 
                             className='w-[60px] h-[60px]'/></div>
                }
                <div className='flex items-center justify-center'>
                    <div onClick={submit} className='mt-6 w-[100px] h-[40px] bg-purple-400 text-white flex items-center justify-center rounded-lg cursor-pointer font-semibold '>Submit</div>
                </div>
            </div>
            
        </div>
    </div>
    <div className='sm:hidden w-full mb-20 flex mt-10 justify-center'>
        <div className='w-[75%] pb-10 h-auto border-2 border-gray-400 rounded-xl'>
            <div className='ml-4 mt-10'>
                <div>
                    <span className='align-top font-semibold'>Enter your story title</span> &nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp; &nbsp;&nbsp;
                    <textarea onChange={(e)=>setTitle(e.target.value)} value={title} cols="20" className='overflow-hidden border-2 text-lg' rows="1"></textarea>
                </div>
                <div>
                    <span className='align-top font-semibold'>Enter your story description</span> &nbsp; &nbsp;
                    <textarea onChange={(e)=>setDescription(e.target.value)} value={description} className='border-2' rows="10" cols="30"></textarea>
                </div>
                <div>
                    <span className='align-top font-semibold'>Enter your story description</span> &nbsp; &nbsp;
                    <input type="file" onChange={onSelectFile} />
                </div>
                { 
                    selectedimage && 
                    <div>
                        <img src={selectedimage} 
                             alt="selected-pic" 
                             className='w-[60px] h-[60px]'/></div>
                }
                <div className='flex items-center justify-center'>
                    <div onClick={submit} className='mt-6 w-[100px] h-[40px] bg-purple-400 text-white flex items-center justify-center rounded-lg cursor-pointer font-semibold '>Submit</div>
                </div>
            </div>
            
        </div>
    </div>
    </>
  )
}

export default CreatePost