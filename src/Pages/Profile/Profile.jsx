import React from 'react'
import ProfileUserDetails from '../../Componenets/ProfileComponents/ProfileUserDetails'
import ReqUserPostPart from '../../Componenets/ProfileComponents/ReqUserPostPart'

const Profile = () => {
    return (
        <div className='px-20'>
            <div >
                <ProfileUserDetails />
            </div>
            <div>
                <ReqUserPostPart />
            </div>
        </div>
    )
}

export default Profile