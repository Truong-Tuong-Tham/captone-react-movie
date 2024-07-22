import React from "react";
import {
  logOutAction,
  postLogOutAction,
} from "../../../../redux/user/userSlice";
import { NavLink, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { Button } from "antd";
import {
  UserOutlined,
  LoginOutlined,
  UserAddOutlined,
} from "@ant-design/icons";
const NavLoginDesktop = ({ userInfo }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  if (userInfo) {
    return (
      <div className="flex items-center space-x-4 sm:space-x-6">
        <p className="text-sm sm:text-lg md:text-xl lg:text-2xl text-white">
          {userInfo.hoTen}
        </p>
        <Button
          onClick={() => dispatch(postLogOutAction())}
          className="bg-slate-50 border border-transparent rounded-full p-2 hover:bg-slate-200 transition-colors duration-200"
          icon={<UserOutlined />}
          size="large"
        >
          Log Out
        </Button>
        <Button
          onClick={() => navigate("/infouser")}
          className="bg-slate-50 border border-transparent rounded-full p-2 hover:bg-slate-200 transition-colors duration-200"
          icon={<UserOutlined />}
          size="large"
        >
          INFO
        </Button>
      </div>
    );
  } else {
    return (
      <div className="flex space-x-4">
        <Button
          onClick={() => navigate("/auth/login")}
          className="relative inline-flex items-center justify-center bg-slate-950 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors duration-200"
          icon={<LoginOutlined />}
        >
          Login
        </Button>
        <Button
          onClick={() => navigate("/auth/register")}
          className="relative inline-flex items-center justify-center bg-slate-950 text-white rounded-lg px-4 py-2 hover:bg-slate-800 transition-colors duration-200"
          icon={<UserAddOutlined />}
        >
          Register
        </Button>
      </div>
    );
  }
};

export default NavLoginDesktop;
