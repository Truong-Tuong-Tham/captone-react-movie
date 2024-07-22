import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { postLogOutAction } from '../../redux/user/userSlice'
import { Button } from 'antd'
import { UserOutlined, LoginOutlined, UserAddOutlined } from '@ant-design/icons'
import { DesktopResponsive, MobileResponsive, TabletResponsive } from '../../HOC/responsive'
import NavLoginDesktop from './component/Desktop'
import NavLoginTablet from './component/Tablet'
import NavLoginMobile from './component/Mobile'

const HeaderPage = () => {
  const dispatch = useDispatch()
  const navigate = useNavigate()
  const { userInfo } = useSelector((state) => state.userReducer)

  const renderNavUserLogin = () => {
return (
<>
<DesktopResponsive>
  <NavLoginDesktop  userInfo={userInfo} />
</DesktopResponsive>
<TabletResponsive  >
  <NavLoginTablet userInfo={userInfo}/>
</TabletResponsive>
<MobileResponsive>
  <NavLoginMobile userInfo={userInfo} />
</MobileResponsive>

</>
)
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
