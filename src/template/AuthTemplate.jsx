import React, { useEffect } from 'react'
import { useSelector } from 'react-redux'
import { Outlet, useNavigate } from 'react-router-dom'


const AuthTemplate = () => {
  const navigate=useNavigate();
  const {userInfo} = useSelector((state) => state.userReducer);
  useEffect(()=> {
  if(userInfo){
  navigate('/')
  }
  },[])
  return (
    <div
      className=' flex justify-center items-center'
      // style={{
      //   backgroundImage: 'url(https://images.pexels.com/photos/1200450/pexels-photo-1200450.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1)',
      //   backgroundSize: 'cover',
      //   backgroundPosition: 'center',
      // }}
    >
      <Outlet />
    </div>
  )
}

export default AuthTemplate
