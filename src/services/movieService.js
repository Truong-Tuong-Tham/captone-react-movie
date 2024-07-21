import { https } from "./urlConfig";

export const movieService = {
  getBanner: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachBanner";
    let promise = https.get(uri);
    return promise;
  },
  getMovie: () => {
    let uri = "/api/QuanLyPhim/LayDanhSachPhim?maNhom=GP03";
    let promise = https.get(uri);
    return promise;
  },
  getMovieDetail: (id) => {
    let uri = `/api/QuanLyPhim/LayThongTinPhim?MaPhim=${id}`;
    let promise = https.get(uri);
    return promise;
  },
  getScheduleDetailMovie: (idMovie) => {
    // query maPhong , MaPhim
    let uri = `/api/QuanLyRap/LayThongTinLichChieuPhim?MaPhim=${idMovie}`;

    return https.get(uri);
  },
  getListDataTicketRoom: (idSchedule) => {
    let uri = `/api/QuanLyDatVe/LayDanhSachPhongVe?MaLichChieu=${idSchedule}`;

    return https.get(uri);
  },
};
