import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Homepage from '../HomePage/Homepage'
import Sidebar from '../../Componenets/Sidebar'

const Router = () => {
    return (
        <div>
            <div className="float-left">
                <div>
                    <Sidebar />
                </div>
                <div>
                    <Routes>
                        <Route path='/' element={<Homepage />}></Route>
                    </Routes>
                </div>
            </div>
        </div>
    )
};

export default Router;
