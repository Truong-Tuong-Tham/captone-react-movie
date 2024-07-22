import { Carousel } from 'antd';
import React, { useEffect, useState } from 'react';
import { movieService } from '../../../../services/movieService';

const contentStyle = {
  height: '500px',
  color: '#fff',
  lineHeight: '160px',
  textAlign: 'center',
  background: '#364d79',
};

const Banner = () => {
  const [listBanner, setListBanner] = useState([]);

  const fetchListBanner = () => {
    movieService.getBanner()
      .then((res) => {
        let responseListBanner = res.data.content;
        setListBanner(responseListBanner);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fetchListBanner();
  }, []);

  const renderBanner = () => {
    return listBanner.map((b, index) => {
      return (
        <div key={index} className="relative mt-10">
          <img
            style={contentStyle}
            className="w-full h-full object-cover rounded-lg shadow-lg"
            src={b.hinhAnh}
            alt=""
          />
        </div>
      );
    });
  };

  return (
    <div className="relative max-w-4xl mx-auto">
      <Carousel
        autoplay
        effect="fade"
        dots={false} // Hide the dots
        autoplaySpeed={3000} // Adjust the speed (3000ms = 3s)
        prevArrow={<button className="absolute left-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 text-white z-10" style={{ top: '50%' }}>&lt;</button>}
        nextArrow={<button className="absolute right-0 transform -translate-y-1/2 p-2 bg-black bg-opacity-50 rounded-full hover:bg-opacity-80 text-white z-10" style={{ top: '50%' }}>&gt;</button>}
      >
        {renderBanner()}
      </Carousel>
    </div>
  );
};

export default Banner;
