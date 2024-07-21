import React from "react";
import { Tooltip, Button } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { getChairDangDat } from "../../../redux/movie/movieSlice";
import { useNavigate } from "react-router-dom";

const ListChair = () => {
  const { infoStichketRoom, listChair } = useSelector(
    (state) => state.movieReducer
  );
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const renderListChair = () => {
    return infoStichketRoom.danhSachGhe?.map((ghe) => {
      let buttonBgColor = ghe.daDat ? "bg-gray-600" : "bg-red-500";
      let buttonBorderColor = ghe.daDat ? "border-gray-700" : "border-red-700";
      listChair.forEach((element) => {
        if (ghe.stt === element.stt) {
          buttonBgColor = "bg-green-500";
          buttonBorderColor = "border-green-700";
        }
      });

      return (
        <Tooltip
          key={ghe.stt}
          title={`Seat Number: ${ghe.stt} - ${
            ghe.daDat
              ? "Booked"
              : listChair.find((e) => e.stt === ghe.stt)
              ? "Selected"
              : "Available"
          }`}
          placement="top"
        >
          <button
            disabled={ghe.daDat}
            onClick={() => {
              dispatch(getChairDangDat(ghe));
            }}
            className={`w-10 h-10 md:w-14 md:h-14 rounded-full ${buttonBgColor} ${buttonBorderColor} border-2 md:border-4 text-white flex items-center justify-center font-bold text-sm md:text-xl transition-transform transform hover:scale-105 md:hover:scale-110 duration-300 shadow-md md:shadow-lg focus:outline-none focus:ring-2 focus:ring-offset-2 ${
              ghe.daDat
                ? "cursor-not-allowed opacity-50"
                : "hover:bg-red-600 focus:ring-red-300"
            }`}
          >
            {ghe.stt}
          </button>
        </Tooltip>
      );
    });
  };

  return (
    <div className="p-4 sm:p-8 bg-gray-100 min-h-screen">
      {/* Back to Movie Details Button */}
      <Button
        type="primary"
        onClick={() => navigate("/detail/" + infoStichketRoom.maPhim)}
        className="mb-4 sm:mb-8"
        size="large"
        shape="round"
      >
        Quay Về
      </Button>

      {/* Seat Legend */}
      <div className="mb-4 sm:mb-8 max-w-screen-lg mx-auto bg-white p-2 sm:p-4 rounded-lg shadow-md flex justify-center items-center">
        <div className="flex flex-wrap justify-center space-x-4 text-xs sm:text-sm text-gray-800">
          <div className="flex items-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-gray-600 border-2 border-gray-700 rounded-full"></div>
            <span className="ml-1 sm:ml-2">Booked</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-green-500 border-2 border-green-700 rounded-full"></div>
            <span className="ml-1 sm:ml-2">Selected</span>
          </div>
          <div className="flex items-center">
            <div className="w-5 h-5 sm:w-6 sm:h-6 bg-red-500 border-2 border-red-700 rounded-full"></div>
            <span className="ml-1 sm:ml-2">Available</span>
          </div>
        </div>
      </div>

      {/* Screen Section */}
      <div className="bg-gray-900 text-white text-center py-4 px-6 sm:py-6 sm:px-10 w-full max-w-screen-lg mx-auto mb-6 sm:mb-10 rounded-lg shadow-lg">
        <h2 className="text-2xl sm:text-4xl font-extrabold">SCREEN</h2>
      </div>

      {/* Seats Layout */}
      <div className="grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-4 max-w-screen-lg mx-auto">
        <div className="hidden sm:block col-span-1"></div> {/* Spacer for the aisle */}
        <div className="col-span-6 sm:col-span-10 grid grid-cols-6 sm:grid-cols-12 gap-2 sm:gap-3">
          {renderListChair()}
        </div>
        <div className="hidden sm:block col-span-1"></div> {/* Spacer for the aisle */}
      </div>

      {/* Aisles */}
      <div className="w-full mt-6 sm:mt-10">
        <div className="h-4 sm:h-6 bg-gray-900"></div>
      </div>
    </div>
  );
};

export default ListChair;
