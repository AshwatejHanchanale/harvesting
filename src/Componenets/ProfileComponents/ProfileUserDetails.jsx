import React from 'react'
import { TbCircleDashed } from 'react-icons/tb'
const ProfileUserDetails = () => {
    return (
        <div className='py-10 w-full'>
            <div className='flex items-center'>
                <div className='w-[15%]'>
                    <img className='w-32 h-32 rounded-full' src="https://th.bing.com/th/id/OIP.JgUqyng_APinWy8Xk5-CZwHaEo?w=306&h=191&c=7&r=0&o=5&dpr=1.3&pid=1.7" alt="" />
                </div>
                <div className='space-y-5'>
                    <div className='flex space-x-10 items-center'>
                        <p className='font-semibold'>Ashwatej9191</p>
                        <button>EditProfile</button>
                        <TbCircleDashed></TbCircleDashed>
                    </div>
                    <div className='flex space-x-10'>
                        <div>
                            <span className='font-semibold mr-2'>10</span>
                            <span>posts</span>
                        </div>
                    </div>
                    <div className=''>
                        <p className='font-semibold'>Ashwatej Hanchanale</p>
                        <p className='font-thin text-sm'>Agriculture is the most healthful, most useful, and most noble employment of man.</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ProfileUserDetails