import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import AuthTemplate from "./template/AuthTemplate";
import Login from "./page/login";
import Register from "./page/register";
import HomePage from "./page/Home";
import HomeTemplate from "./template/HomeTemplate";
import DetailMovie from "./page/detailMovie";
import SticketRoon from "./page/sticketRoom";
import InfoUser from "./page/info-user";
import Autherization from "./HOC/autherization";

function App() {
  return (
    <BrowserRouter>
    
      <Routes>
      <Route path="" element={<HomeTemplate/>}>
    <Route index element={<HomePage/>}></Route>
    
    <Route path="detail/:idMovie" element={<DetailMovie/>}></Route>
    </Route>
    <Route path="sticketroom/:idschedule" element={<SticketRoon/>}/>
    <Route path="infouser" element={<InfoUser/>}/>
        <Route path="/auth" element={<AuthTemplate />}>
          <Route path="login" element={<Login />}></Route>
          <Route path="register" element={<Register />}></Route>
        </Route>
      
      </Routes>
    </BrowserRouter>
  );
}

export default App;
