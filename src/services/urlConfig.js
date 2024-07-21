import axios from "axios";
import { userLocal } from "./localService";

const headerCustom = {
  TokenCybersoft:
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0ZW5Mb3AiOiJCb290Y2FtcCA2NyIsIkhldEhhblN0cmluZyI6IjE1LzEyLzIwMjQiLCJIZXRIYW5UaW1lIjoiMTczNDIyMDgwMDAwMCIsIm5iZiI6MTcwNTU5NzIwMCwiZXhwIjoxNzM0MzY4NDAwfQ.6KzwosGeCdFyoJDkANd3FzSA5C_iSLO1L8Q903zqZ44",
    Authorization: "Bearer " + userLocal.get()?.accessToken, 
};
export const https = axios.create({
  headers:
    headerCustom,
    baseURL: 'https://movienew.cybersoft.edu.vn',

});
