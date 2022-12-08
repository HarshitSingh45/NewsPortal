import React from 'react'
import Mixnew from './Mixnew'

function MixedNews() {
  return (
    <>
    <div className='hidden w-full h-auto sm:flex flex-row 
                    justify-between pb-6'>
                <Mixnew type={'BUSINESS'} image = {'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000'}/>
                <Mixnew type={'CULTURE'} image={'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1507740000/1507739998.jpg'} />
                <Mixnew type={'SCIENCE'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2ijo1xgq0ayHz-aeb-EtsHqecqQmE2yQNQ&usqp=CAU'}/>
                <Mixnew type={'SPORTS'} image={'https://newsonair.com/wp-content/uploads/2022/04/6-2.jpeg'}/>
    </div>

    {/* mobile */}

    <div className='sm:hidden w-full h-auto flex flex-col 
                    justify-between pb-6'>
                <Mixnew type={'BUSINESS'} image = {'https://img.freepik.com/free-photo/group-diverse-people-having-business-meeting_53876-25060.jpg?w=2000'}/>
                <Mixnew type={'CULTURE'} image={'https://res.cloudinary.com/people-matters/image/upload/fl_immutable_cache,w_624,h_351,q_auto,f_auto/v1507740000/1507739998.jpg'} />
                <Mixnew type={'SCIENCE'} image={'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn2ijo1xgq0ayHz-aeb-EtsHqecqQmE2yQNQ&usqp=CAU'}/>
                <Mixnew type={'SPORTS'} image={'https://newsonair.com/wp-content/uploads/2022/04/6-2.jpeg'}/>
    </div>

    </>
  )
}

export default MixedNews