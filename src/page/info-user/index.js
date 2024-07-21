import React, { useEffect } from "react";
import { userService } from "../../services/userService";
import { useDispatch, useSelector } from "react-redux";
import {
  Avatar,
  Card,
  Input,
  message,
  Button,
  Typography,
  Row,
  Col,
  Divider,
} from "antd";
import {
  EditOutlined,
  MailOutlined,
  PhoneOutlined,
  UserOutlined,
  HomeOutlined,
} from "@ant-design/icons";
import { useNavigate } from "react-router-dom";

const { Title, Text } = Typography;

const InfoUser = () => {
  const { userInfo } = useSelector((state) => state.userReducer);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const fetchInfoUser = async () => {
    try {
      let dataInfoUser = await userService.getInfoUser();
      console.log("dataInfoUser: ", dataInfoUser);
      // dispatch(userInfo(dataInfoUser));
    } catch (error) {
      console.log("error: ", error);
      message.error("Failed to fetch user info");
    }
  };

  useEffect(() => {
    if (!userInfo) {
      navigate("/auth/login");
      message.warning("Vui lòng đăng nhập");
    } else {
      fetchInfoUser();
    }
  }, [userInfo, navigate]);

  return (
    <div className="bg-gradient-to-r from-blue-500 to-teal-400 min-h-screen flex flex-col items-center justify-center p-6">
      <Card
        className="shadow-2xl rounded-2xl bg-white w-full max-w-lg p-8"
        bordered={false}
      >
        <div className="relative flex flex-col items-center">
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-yellow-400 via-red-500 to-pink-500 rounded-full p-1 shadow-lg border-4 border-white">
            <Avatar
              size={120}
              src={
                userInfo?.avatar ||
                "https://api.dicebear.com/7.x/miniavs/svg?seed=10"
              }
              className="border-4 border-white shadow-lg"
            />
          </div>
        </div>
        <Title level={2} className="text-center text-gray-800 mt-6 mb-4">
          {userInfo?.hoTen || "User Name"}
        </Title>
        <Divider />
        <Row gutter={16}>
          <Col span={24}>
            <Text className="text-gray-700 font-medium">Username</Text>
            <Input
              prefix={<UserOutlined />}
              value={userInfo?.hoTen || "Username"}
              disabled
              className="w-full mt-2 bg-gray-100 rounded-lg shadow-sm"
              style={{ color: "#1f2937", fontWeight: "bold" }}
            />
          </Col>
          <Col span={24}>
            <Text className="text-gray-700 font-medium">Password</Text>
            <Input.Password
              prefix={<EditOutlined />}
              value={userInfo?.matKhau || "Password"}
              disabled
              className="w-full mt-2 bg-gray-100 rounded-lg shadow-sm"
              style={{ color: "#1f2937", fontWeight: "bold" }}
            />
          </Col>
          <Col span={24}>
            <Text className="text-gray-700 font-medium">Phone Number</Text>
            <Input
              prefix={<PhoneOutlined />}
              value={userInfo?.soDT || "Phone Number"}
              disabled
              className="w-full mt-2 bg-gray-100 rounded-lg shadow-sm"
              style={{ color: "#1f2937", fontWeight: "bold" }}
            />
          </Col>
          <Col span={24}>
            <Text className="text-gray-700 font-medium">Email</Text>
            <Input
              prefix={<MailOutlined />}
              value={userInfo?.email || "Email"}
              disabled
              className="w-full mt-2 bg-gray-100 rounded-lg shadow-sm"
              style={{ color: "#1f2937", fontWeight: "bold" }}
            />
          </Col>
          <Col span={24}>
            <Text className="text-gray-700 font-medium">Account </Text>
            <Input
              prefix={<UserOutlined />}
              value={userInfo?.taiKhoan || "Account Number"}
              disabled
              className="w-full mt-2 bg-gray-100 rounded-lg shadow-sm"
              style={{ color: "#1f2937", fontWeight: "bold" }}
            />
          </Col>
        </Row>
        <Divider />
        <div className="flex justify-between mt-6">
          <Button
            type="primary"
            className="bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105"
            onClick={() => navigate("/")}
          >
            <HomeOutlined className="mr-2" />
            Back to Home
          </Button>
          <Button
            type="default"
            className="bg-gray-300 hover:bg-gray-400 text-black font-bold py-3 px-6 rounded-lg flex items-center transition-transform transform hover:scale-105"
            onClick={() => navigate("/profile/edit")}
          >
            <EditOutlined className="mr-2" />
            Edit Profile
          </Button>
        </div>
      </Card>
    </div>
  );
};

export default InfoUser;
