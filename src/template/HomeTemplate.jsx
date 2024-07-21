import React from 'react'
import { Outlet } from 'react-router-dom'
import HeaderPage from '../component/HeaderPage'

const HomeTemplate = () => {
  return (
    <div className='bg-white h-screen w-screen' >
<HeaderPage/>
   <Outlet/>
    </div>
  )
}

export default HomeTemplate
