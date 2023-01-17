import React from 'react'
import {
  Switch,
  Route
} from 'react-router-dom'
import Home from './pages/Home'
import Index from './pages/Index'
import NotFound from './pages/NotFound'

const AppRoutes = () => {
    return (
          <Routes>
            <Route path='/' element={<Index/>} />
            <Route path='/home' element={<Home/>} />
            <Route path = '*' element={<NotFound/>} />
        </Routes>
    )
}

export default AppRoutes
