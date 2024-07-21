import { message } from 'antd';
import React, { useEffect } from 'react'
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

const Autherization = ({children}) => {
    let { userInfo } = useSelector((state) => state.userReducer);
    const navigate = useNavigate();

    useEffect(() => {
        if (!userInfo) {
            navigate("/auth/login");
            message.warning("Vui lòng đăng nhập");
        } 
    })   
  return (
    <div>
      
    </div>
  )
}

export default Autherization
