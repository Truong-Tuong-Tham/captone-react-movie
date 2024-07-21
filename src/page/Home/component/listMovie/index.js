import React, { useEffect, useState } from "react";
import { Button } from "antd";
import { movieService } from "../../../../services/movieService";
import { useNavigate } from "react-router-dom";

const ListMovie = () => {
  const navigate = useNavigate();
  const [listMovie, setListMovie] = useState([]);

  const fetchListMovie = () => {
    movieService.getMovie()
      .then((res) => {
        setListMovie(res.data.content);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchListMovie();
  }, []);

  const renderListMovie = () => {
    return listMovie.map((m) => {
      const shortDescription = m.moTa.length > 80 ? m.moTa.substring(0, 80) + '...' : m.moTa;

      return (
        <div
          key={m.maPhim}
          className="bg-white shadow-md rounded-lg overflow-hidden transition-transform transform hover:scale-105 hover:shadow-xl cursor-pointer"
          onClick={() => { navigate(`/detail/${m.maPhim}`); }}
        >
          <div className="relative">
            <img 
              src={m.hinhAnh} 
              alt={m.tenPhim} 
              className="w-full h-64 object-cover object-center"
            />
            <div className="absolute bottom-0 left-0 bg-gradient-to-t from-black to-transparent text-white p-4 w-full">
              <h4 className="text-xl font-semibold">{m.tenPhim}</h4>
              <p className="text-sm mt-2">{shortDescription}</p>
            </div>
          </div>
        </div>
      );
    });
  };

  return (
    <div className="w-4/5 mx-auto">
      <h3 className="text-4xl font-extrabold text-gray-100 bg-gray-800 py-4 px-6 rounded-lg shadow-lg text-center mt-10 mb-6">
        Danh sách phim
      </h3>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {renderListMovie()}
      </div>
    </div>
  );
};

export default ListMovie;
