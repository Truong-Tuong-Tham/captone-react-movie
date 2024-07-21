import React from "react";
import { useSelector } from "react-redux";
import { Card, Table, Typography, Divider, Row, Col } from "antd";

const { Title, Text } = Typography;

const ChairCart = () => {
  const { infoStichketRoom, listChair } = useSelector(
    (state) => state.movieReducer
  );
  const { userInfo } = useSelector((state) => state.userReducer);

  const columns = [
    {
      title: "Mã Ghế",
      dataIndex: "tenGhe",
      key: "tenGhe",
      align: "center",
      render: (text) => (
        <Text className="font-semibold text-gray-700">{text}</Text>
      ),
    },
    {
      title: "Giá Tiền",
      dataIndex: "giaVe",
      key: "giaVe",
      align: "center",
      render: (text) => (
        <Text className="font-semibold text-gray-700">
          {new Intl.NumberFormat().format(text)} VND
        </Text>
      ),
    },
  ];

  const totalPrice = listChair?.reduce(
    (pre, current) => pre + current.giaVe,
    0
  );

  return (
    <div className="p-4 sm:p-8 bg-gray-50 min-h-screen">
      <Card
        className="shadow-lg bg-white rounded-lg border border-gray-200"
        bordered={false}
        cover={
          <div className="p-4 sm:p-6 bg-gradient-to-r from-teal-300 to-teal-500 text-center text-white rounded-t-lg">
            <Title level={3} className="text-white">
              Thông Tin Phim
            </Title>
          </div>
        }
      >
        <Row gutter={16}>
          <Col span={24} md={12} className="mb-4">
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <Text className="block mb-2 text-base sm:text-lg font-semibold text-gray-800">
                {infoStichketRoom?.thongTinPhim?.tenPhim}
              </Text>
              <Text className="block mb-2 text-gray-600">
                {infoStichketRoom?.thongTinPhim?.tenCumRap} -{" "}
                {infoStichketRoom?.thongTinPhim?.tenRap}
              </Text>
              <Text className="block mb-2 text-gray-600">
                {infoStichketRoom?.thongTinPhim?.ngayGioChieu}
              </Text>
              <Text className="block text-gray-600">
                {infoStichketRoom?.thongTinPhim?.diaChi}
              </Text>
            </div>
          </Col>
          <Col span={24} md={12}>
            <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
              <Title level={4} className="text-center mb-4 text-gray-800 text-base sm:text-lg">
                Danh Sách Ghế
              </Title>
              <Table
                columns={columns}
                dataSource={listChair}
                pagination={false}
                rowKey="tenGhe"
                bordered
                className="shadow-md"
                size="small"
              />
              <Divider />
              <div className="flex justify-between font-bold text-base sm:text-xl text-gray-800">
                <Text>Tổng Tiền:</Text>
                <Text className="text-red-600">
                  {new Intl.NumberFormat().format(totalPrice)} VND
                </Text>
              </div>
            </div>
          </Col>
        </Row>
        <Divider />
        <div className="p-4 bg-white rounded-lg shadow-md border border-gray-200">
          <Title level={4} className="text-center mb-4 text-gray-800 text-base sm:text-lg">
            Thông Tin Người Dùng
          </Title>
          <Text className="block mb-2 text-base sm:text-lg font-semibold text-gray-800">
            {userInfo?.hoTen}
          </Text>
          <Text className="block text-base sm:text-lg text-gray-600">{userInfo?.email}</Text>
        </div>
      </Card>
    </div>
  );
};

export default ChairCart;
