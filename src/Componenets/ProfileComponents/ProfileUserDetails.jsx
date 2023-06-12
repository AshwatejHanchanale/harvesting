import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://cdn.pixabay.com/photo/2018/03/12/12/32/woman-3219507_1280.jpg" alt="" />
                </div>
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p>username</p>
                        <button>EditProfile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>posts</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>follower</span>
                        </div>
                        <div>
                            <span className='font-semibold mr-2'>5</span>
                            <span>following</span>
                        </div>
                    </div>
                    <div>
                        <p className='font-semibold'>full name</p>
                        <p className='font-thin text-sm'>bio</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails