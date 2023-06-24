import React from 'react'
import HomeRight from '../../Componenets/HomeRight/HomeRight';
import PostCard from '../../Componenets/post/PostCard';



const Homepage = () => {
    return (
        <div >
            <div className='mt-5 flex w-[100%] justify-center'>
                <div className='w-[50%] px-10 '>
                    {/* <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full mt-10'>
                        <input name="myInput" />
                    </div> */}

                    <div className='space-y-10 w-full  '>
                        {[1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1,].map((item) => <PostCard />)}
                    </div>
                </div>
                <div className='w-[28%]'>
                    <div className='space-y-10 w-full mx-20  sticky top-0  flex'>
                        <HomeRight />

                    </div>

                </div>
            </div>

        </div>
    )
}

export default Homepage;