import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postLogOutAction } from '../../redux/user/userSlice'
import { Button } from 'antd'
import { UserOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'

const HeaderPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.userReducer)

  const renderNavUserLogin = () => {
    if (userInfo) {
      return (
        <div className="flex items-center space-x-4 sm:space-x-6">
          <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white">{userInfo.hoTen}</p>
          <Button
            onClick={() => dispatch(postLogOutAction())}
            className="bg-slate-50 border border-transparent rounded-full p-2 hover:bg-slate-200 transition-colors duration-200"
            icon={<UserOutlined />}
            size="large"
          >
            Log Out
          </Button>
          <Button
            onClick={() => navigate('/infouser')}
            className="bg-slate-50 border border-transparent rounded-full p-2 hover:bg-slate-200 transition-colors duration-200"
            icon={<UserOutlined />}
            size="large"
          >
            INFO
          </Button>
        </div>
      )
    } else {
      return (
        <div className="flex space-x-4">
          <Button
            onClick={() => navigate('/auth/login')}
            className="relative inline-flex items-center justify-center bg-slate-950 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors duration-200"
            icon={<LoginOutlined />}
          >
            Login
          </Button>
          <Button
            onClick={() => navigate('/auth/register')}
            className="relative inline-flex items-center justify-center bg-slate-950 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors duration-200"
            icon={<UserAddOutlined />}
          >
            Register
          </Button>
        </div>
      )
    }
  }

  return (
    <header className="bg-gray-900 h-24 sm:h-32 md:h-40 lg:h-48 xl:h-56 flex items-center">
      <div className="w-full max-w-screen-lg mx-auto flex items-center justify-between px-4 sm:px-6 md:px-8">
        <div className="flex items-center space-x-4 sm:space-x-6 md:space-x-8 flex-grow">
          <img
            className="w-20 sm:w-24 md:w-32 lg:w-40 xl:w-48 h-auto"
            src="https://codetheworld.io/wp-content/uploads/2024/06/ghost.png"
            alt="Ghost Logo"
          />
          <p className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl text-white flex-grow text-left">
            MOVIE CAPTONE
          </p>
        </div>
        {renderNavUserLogin()}
      </div>
    </header>
  )
}

export default HeaderPage
