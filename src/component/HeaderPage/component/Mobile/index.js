import React, { useState } from "react";
import { Button, Drawer, Space, Avatar } from "antd";
import { UnorderedListOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { postLogOutAction } from "../../../../redux/user/userSlice";
import { useNavigate } from "react-router-dom";

const NavLoginMobile = ({ userInfo }) => {
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
        <div className="flex flex-col items-center space-y-4">
          <Avatar
            size={64}
            src={
              userInfo.avatar ||
              `https://robohash.org/${userInfo.hoTen}?set=set5`
            } // Random avatar from Robohash
          />
          <div className="text-lg font-semibold">{userInfo.hoTen}</div>
          <Button
            onClick={() => dispatch(postLogOutAction())}
            className="bg-red-600 text-white w-full"
            type="primary"
            block
          >
            Log out
          </Button>
          <Button
            onClick={() => navigate("/infouser")}
            className="bg-blue-500 text-white w-full"
            type="primary"
            block
          >
            Info
          </Button>
        </div>
      );
    } else {
      return (
        <div className="flex flex-col items-center space-y-4">
          <Button
            onClick={() => navigate("/auth/login")}
            className="bg-green-500 text-white w-full"
            type="primary"
            block
          >
            Login
          </Button>
          <Button
            onClick={() => navigate("/auth/register")}
            className="bg-yellow-500 text-white w-full"
            type="primary"
            block
          >
            Register
          </Button>
        </div>
      );
    }
  };

  return (
    <>
      <Button
        icon={<UnorderedListOutlined />}
        type="primary"
        onClick={showDrawer}
        className="fixed top-4 right-4 z-50 bg-gray-800 border-none hover:bg-gray-700"
      />
      <Drawer
        title={userInfo ? `Welcome, ${userInfo.hoTen}` : "Welcome"}
        onClose={onClose}
        open={open}
        className="ant-drawer-light"
        headerStyle={{ borderBottom: "1px solid #f0f0f0", textAlign: "center" }}
        bodyStyle={{ padding: "24px", textAlign: "center" }}
        width="100%"
        placement="right"
      >
        {renderUserLogin()}
        <div className="mt-8 space-y-4">
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Upcoming Events</h3>
            <p className="text-gray-600">
              Stay updated with the latest events and promotions.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Recent Activities</h3>
            <p className="text-gray-600">
              Check your recent activities and updates here.
            </p>
          </div>
          <div className="bg-gray-100 p-4 rounded-lg shadow-md">
            <h3 className="text-lg font-semibold">Account Settings</h3>
            <p className="text-gray-600">
              Manage your account settings and preferences.
            </p>
          </div>
        </div>
      </Drawer>
    </>
  );
};

export default NavLoginMobile;
