import React from "react";
import { useSelector } from "react-redux";

const LoadingPage = () => {
    let { isLoading } = useSelector((state) => state.loadingReducer);
  return (
    <div className={`bg-black w-screen h-screen fixed z-10 ${
        isLoading ? '' : 'hidden'
      } `}>
      <div className="flex justify-center items-center w-full h-full">
      <div className="loader">
        <div className="modelViewPort">
          <div className="eva">
            <div className="head">
              <div className="eyeChamber">
                <div className="eye" />
                <div className="eye" />
              </div>
            </div>
            <div className="body">
              <div className="hand" />
              <div className="hand" />
              <div className="scannerThing" />
              <div className="scannerOrigin" />
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  );
};

export default LoadingPage;
