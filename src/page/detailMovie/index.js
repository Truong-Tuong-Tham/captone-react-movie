import React, { useEffect, useRef } from "react";
import { useParams } from "react-router-dom";
import { movieService } from "../../services/movieService";
import HeaderPage from "../../component/HeaderPage";
import DcsDetail from "./component/dcsDetail";
import ScheDuleMovie from "./component/schedule-movie";
import { useDispatch } from "react-redux";
import {
  getInfoDetai,
  getInfoDetail,
  getScheduleDetailMovie,
} from "../../redux/movie/movieSlice";
import moment from "moment";

const DetailMovie = () => {
  const refschedulemovie = useRef();
  let dispatch = useDispatch();
  let { idMovie } = useParams();
  console.log("id movie", idMovie);
  let fecthDetailMovie = () => {
    let promise = movieService.getMovieDetail(idMovie);

    promise

      .then((res) => {
        console.log(res.data.content);
        dispatch(getInfoDetail(res.data.content));
      })
      .catch((err) => {
        console.log(err);
      });
  };
  let fecthScheduleMovie = () => {
    let promise = movieService.getScheduleDetailMovie(idMovie);

    promise
      .then((res) => {
        console.log(res.data.content.heThongRapChieu);
        dispatch(getScheduleDetailMovie(res.data.content.heThongRapChieu));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    fecthDetailMovie();
    fecthScheduleMovie();
  }, [idMovie]);
  return (
    <div className="bg-gray-900" >  
      <DcsDetail refschedulemovie={refschedulemovie} />
      <ScheDuleMovie refschedulemovie={refschedulemovie} />
    </div>
  );
};

export default DetailMovie;
