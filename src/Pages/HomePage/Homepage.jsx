import React from 'react'
import HomeRight from '../../Componenets/HomeRight/HomeRight';
import PostCard from '../../Componenets/post/PostCard';
import CreatePostModel from '../../Componenets/post/CreatePostModel';

const Homepage = () => {
    return (
        <div>
            <div className='mt-10 flex w-[100%] justify-center'>
                <div className='w-[44%] px-10'>
                    <div className='storyDiv flex space-x-2 border p-4 rounded-md justify-start w-full mt-10'>
                        <input name="myInput" />
                    </div>

                    <div className='space-y-10 w-full mt-10'>
                        {[1, 1].map((item) => <PostCard />)}
                    </div>
                </div>
                <div className='w-[35%]'>
                    <HomeRight />
                </div>
            </div>
            <CreatePostModel />
        </div>
    )
}

export default Homepage;