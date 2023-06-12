import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Sidebar from '../../Componenets/Sidebar'
import Profile from '../Profile/Profile';

const Router = () => {
    return (
        <div>
            <div className="flex">
                <div className='w-[20%] border border-l-slate-700 '>
                    <Sidebar />
                </div>
                <div className='w-full'>
                    <Routes>
                        <Route path='/' element={<Homepage />}></Route>
                        <Route path='/username' element={<Profile />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
};

export default Router;
