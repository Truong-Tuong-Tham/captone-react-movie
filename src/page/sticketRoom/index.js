import React, { useEffect } from "react";
import { movieService } from "../../services/movieService";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import ListChair from "./list-chair";
import ChairCart from "./chairCart";
import { getDataStichketRoom } from "../../redux/movie/movieSlice";

const SticketRoon = () => {
  const dispatch = useDispatch();
  const { idschedule } = useParams();

  const fetchSticketDataRoom = () => {
    movieService
      .getListDataTicketRoom(idschedule)
      .then((res) => {
        console.log(res.data.content);
        dispatch(getDataStichketRoom(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchSticketDataRoom();
  }, [idschedule]);

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8">
      {/* Main Container with Flex Layout */}
      <div className="flex flex-col lg:flex-row lg:space-x-6 space-y-6 lg:space-y-0">
        {/* List of Chairs Section */}
        <div className="flex-1 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          <ListChair />
        </div>

        {/* Chair Cart Section */}
        <div className="w-full lg:w-1/3 bg-white rounded-lg shadow-md p-4 sm:p-6 lg:p-8">
          <ChairCart />
        </div>
      </div>

      {/* Footer */}
      <footer className="text-center mt-8">
        <p className="text-gray-600 text-xs sm:text-sm">
          &copy; 2024 Movie Ticket Booking. All rights reserved.
        </p>
      </footer>
    </div>
  );
};

export default SticketRoon;
