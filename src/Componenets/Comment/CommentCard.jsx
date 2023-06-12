import React from 'react'

const CommentCard = () => {
    return (
        <div>
            <div className='flex items-center justify-between py-5'>
                <div className='flex items-center '>
                    <div>
                        <img className='w-9 h-9 rounded-full' src="https://th.bing.com/th/id/OIP.JcjsRrSBaO2tTFpZGNICXgHaHa?pid=ImgDet&rs=1" alt="" />
                    </div>
                    <div className='ml-3'>
                        <p>
                            <span className='font-semibold'>username</span>
                            <span className='ml-2'>Nice pic</span>
                        </p>

                    </div>
                </div>
            </div>
        </div>
    )
}

export default CommentCard