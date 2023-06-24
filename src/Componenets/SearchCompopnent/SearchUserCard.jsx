import React from 'react'

const SearchUserCard = () => {
    return (
        <div className='flex ml-2'>
            <div>
                <img className='w-10 h-10 rounded-full' src='https://cdn.pixabay.com/photo/2023/06/07/17/24/field-8047711_1280.jpg' alt='' />
            </div>
            <div className='ml-3'>
                <p>Full name</p>
                <p className='opacity-70'>contractor name</p>
                <p className='opacity-70'>C-number</p>
            </div>
        </div>
    )
}

export default SearchUserCard