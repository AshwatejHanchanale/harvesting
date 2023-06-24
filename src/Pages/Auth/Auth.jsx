import React from 'react'
import "./Auth.css";
import { Signin } from '../../Componenets/Register/Signin';
import { Signup } from '../../Componenets/Register/Signup';

import { useLocation } from 'react-router-dom';


function Auth() {
    const location = useLocation();
    return (

        <div className=''>

            <div className='mt-10'>
                {location.pathname === "/login" ? <Signin /> : <Signup />}
            </div>
        </div>
    );
}

export default Auth