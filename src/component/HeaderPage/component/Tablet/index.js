import React, { useState } from "react";
import { Button, Drawer, Space } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { postLogOutAction } from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";
const NavLoginTablet = ({ userInfo }) => {
    console.log('userInfo: ',userInfo);
 const dispatch = useDispatch();   
 const navigate = useNavigate();
  const [open, setOpen] = useState(false);
  const showDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
  const renderUserLogin = () => {
    if (userInfo) {
      return (
        <>
          <Space>
            <div>{userInfo.hoTen}</div>
            <Button  onClick={() => dispatch(postLogOutAction())} className="bg-red-600">Log out</Button>
            <Button>Info</Button>
          </Space>
        </>
      );
    } else {
      return (
        <>
          <Space>
            <Button  onClick={() => navigate('/auth/login')} >Login</Button>
            <Button onClick={() => navigate('/auth/register')}>Regis</Button>
          </Space>
        </>
      );
    }
  };
  return (
    <>
      <Button
        icon={<UnorderedListOutlined />}
        type="primary"
        onClick={showDrawer}
      ></Button>
      <Drawer title={renderUserLogin()} onClose={onClose} open={open}>
        <p>Some contents...</p>
        <p>Some contents...</p>
        <p>Some contents...</p>
      </Drawer>
    </>
  );
};

export default NavLoginTablet;
