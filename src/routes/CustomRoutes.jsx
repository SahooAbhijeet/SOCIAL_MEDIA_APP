import React from 'react'
import { Route, Routes } from 'react-router-dom'
import UserDetails from '../components/UserDetails'
import SocialApp from '../components/SocialApp'

const CustomRoutes = () => {
    return (

        <Routes>
            <Route path='/' element={<SocialApp /> }/>
            <Route path='/user/:userId' element={<UserDetails />} />
        </Routes>

    )
}

export default CustomRoutes