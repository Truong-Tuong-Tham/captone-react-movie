import moment from "moment";
import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import { Image, Rate } from "antd";
import { useNavigate } from "react-router-dom";
import { ArrowLeftOutlined } from "@ant-design/icons"; // Import the arrow icon

const DcsDetail = ({ refschedulemovie }) => {
  const { infoDetailMovie } = useSelector((state) => state.movieReducer);
  const navigate = useNavigate();
  const [randomRating, setRandomRating] = useState(0);

  useEffect(() => {
    // Generate a random rating between 2.5 and 4.5 (inclusive) with half star intervals
    const minRating = 2.5;
    const maxRating = 4.5;
    const randomRate = (
      Math.random() * (maxRating - minRating) +
      minRating
    ).toFixed(1);
    setRandomRating(parseFloat(randomRate));
  }, []);

  return (
    <div className="bg-gray-800 py-10 relative">
      <button
        onClick={() => navigate("/")} // Navigate to home
        className="absolute top-4 left-4 flex items-center justify-center bg-gray-700 hover:bg-gray-800 text-white rounded-full p-3 shadow-lg transition duration-300 ease-in-out transform hover:scale-105"
      >
        <ArrowLeftOutlined className="text-xl mr-2" />
        <span className="text-sm font-semibold">Về trang chủ</span>
      </button>
      <div className="max-w-4xl mx-auto flex flex-col md:flex-row items-center md:items-start space-y-8 md:space-y-0 md:space-x-10">
        <div className="md:w-2/5 w-full flex justify-center md:justify-end mt-10">
          <Image
            src={infoDetailMovie.hinhAnh}
            alt={infoDetailMovie.tenPhim}
            className="rounded-lg shadow-lg"
            width={300}
          />
        </div>
        <div className="md:w-3/5 w-full text-gray-100 space-y-6 px-4 md:px-0">
          <h1 className="text-3xl text-center font-bold">
            {infoDetailMovie.tenPhim}
          </h1>
          <div className="flex flex-col items-center">
            <h2 className="text-xl mb-4">Rate This</h2>
            <Rate
              character="★"
              allowHalf
              style={{ fontSize: 40, color: "#ffcc00" }}
              value={randomRating} // Set the random rating value
            />
          </div>
          <p className="text-lg text-center">
            {moment(infoDetailMovie.ngayKhoiChieu).format("DD/MM/YYYY")}
          </p>
          <p className="text-base">{infoDetailMovie.moTa}</p>
          <div className="flex justify-center gap-4">
            <button
              onClick={() => {
                let element = refschedulemovie.current;
                element.scrollIntoView({ behavior: "smooth" });
              }}
              className="bg-purple-600 hover:bg-purple-700 text-white py-3 px-6 rounded-lg shadow-md transition duration-300"
            >
              Mua vé
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DcsDetail;
