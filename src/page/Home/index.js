import React from 'react'
import HeaderPage from '../../component/HeaderPage'
import Banner from './component/banner'
import ListMovie from './component/listMovie'
import Autherization from '../../HOC/autherization'

const HomePage = () => {
  return (
    <div className='bg-slate-700'>
      <Banner/>
      <ListMovie/>
    </div>
  )
}

export default HomePage
