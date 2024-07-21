import { Button, Image, Tabs } from "antd";
import React from "react";
import { useSelector } from "react-redux";
import moment from "moment";  // Import moment
import { useNavigate } from "react-router-dom";

const ScheDuleMovie = ({ refschedulemovie }) => {
  const navigate = useNavigate();
  const { scheduleDetailMovie } = useSelector((state) => state.movieReducer);

  const renderListRapChieuByCumRap = (listRapChieu) => {
    return listRapChieu.map((rapChieu) => (
      <div
        key={rapChieu.maCumRap}
        className="my-4 p-4 bg-gray-800 rounded-lg shadow-lg"
      >
        <h3 className="text-xl font-semibold mb-2 text-white">
          {rapChieu.tenCumRap}
        </h3>
        <div className="flex flex-wrap gap-2">
          {rapChieu.lichChieuPhim.map((lichChieu) => (
            <Button
             onClick={() => navigate(`/sticketroom/${lichChieu.maLichChieu}`)}
              key={lichChieu.maLichChieu}
              className="bg-white hover:bg-gray-600 text-black rounded-lg p-2 shadow-md transition-transform transform hover:scale-105"
              size="large"
            >
              {moment(lichChieu.ngayChieuGioChieu).format('DD/MM/YYYY HH:mm')}
            </Button>
          ))}
        </div>
      </div>
    ));
  };

  const renderListCumRap = () => {
    return scheduleDetailMovie.map((cumRap, index) => ({
      key: index,
      label: (
        <div className="flex items-center space-x-2">
          <Image preview={false} src={cumRap.logo} width={50} />
          <span className="text-white">{cumRap.tenCumRap}</span>
        </div>
      ),
      children: (
        <div className="bg-gray-800 p-4 rounded-lg shadow-lg">
          {renderListRapChieuByCumRap(cumRap.cumRapChieu)}
        </div>
      ),
    }));
  };

  return (
    <div
      className="w-4/5 mx-auto my-10 p-6 bg-gray-900 rounded-lg shadow-lg"
      ref={refschedulemovie}
      id="schedulemovie"
    >
      <Tabs
        className="w-full h-96 bg-gray-700 text-white rounded-lg"
        defaultActiveKey="1"
        items={renderListCumRap()}
        tabBarStyle={{
          backgroundColor: "#2D3748",
          color: "#A0AEC0",
          borderRadius: "0.5rem",
        }}
      />
    </div>
  );
};

export default ScheDuleMovie;
