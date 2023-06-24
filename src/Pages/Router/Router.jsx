import React from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Sidebar from '../../Componenets/Sidebar'
import Profile from '../Profile/Profile';
import Auth from '../Auth/Auth';


const Router = () => {
    const location = useLocation();

    return (
        <div>

            {(location.pathname !== "/login" && location.pathname !== "/signup") && (
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
            )}
            {(location.pathname === "/login" || location.pathname === "/signup") && (
                <div>
                    <Routes>
                        <Route path='/signup' element={<Auth />}></Route>
                        <Route path='/login' element={<Auth />}></Route>
                    </Routes>

                </div>
            )}
        </div>
    );
};

export default Router;
