import React from 'react'
import { Outlet } from 'react-router-dom';

import "react-toastify/dist/ReactToastify.css";
import { ToastContainer } from 'react-toastify';
import Header from '../Pages/Shared/Header/Header';
import Footer from '../Pages/Shared/Footer/Footer';

const Main = () => {
    return (
        <div className='max-w-7xl mx-auto px-12'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
            <ToastContainer></ToastContainer>
        </div>
    )
}

export default Main