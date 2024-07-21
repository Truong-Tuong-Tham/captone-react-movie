import axios from "axios";
import { https } from "./urlConfig";

export const userService = {
  postLogin: (values) => {
    let uri = "/api/QuanLyNguoiDung/DangNhap";
    let promise = https.post(uri, values);
    return promise;
  },
  postRegister: (values) => {
    let uri = "/api/QuanLyNguoiDung/DangKy";
    let promise = https.post(uri, values);
    return promise;
  },
  getInfoUser: () => {
    let uri = "/api/QuanLyNguoiDung/ThongTinTaiKhoan";

    return https.post(uri);
  },
};
