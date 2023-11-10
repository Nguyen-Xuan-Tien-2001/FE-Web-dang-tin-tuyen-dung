import './App.css';
import Home from './pages/HomePage/home.js';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route } from 'react-router-dom'
import JoinForm from './pages/SignUp/join.jsx';
import User from './pages/UserHomePage/user.js';
import Header from "./components/Header/header.js";
import PrivateRoute from './components/hook/PrivateRoute';
import SignIn from './pages/SignIn/signin.jsx';
import DetailProduct from './pages/DetailProduct/DetailProduct.jsx';
import Message from './pages/UserHomePage/MessagePage/message';
import PostARequest from './pages/UserHomePage/BuyerHomePage/PostRequest/PostARequest';
import { MyCV } from './pages/UserHomePage/MyCV/MyCV';
import MyPost from './pages/UserHomePage/BuyerHomePage/MyPost/MyPost';
import MyJob from './pages/UserHomePage/MyJob/MyJob';

import { createContext,useState } from "react";
import ProductsByCat from './pages/AllProducts/ProductsByCat/ProductsByCat';
import MyCTY from './pages/UserHomePage/CongTy/myCongTy';
import FormThemCV from './components/FormInput/FormThemCV/FormThemCV';
import QuanLyUser from './pages/ADMIN/QuanLyUsers';
import QuanLyAllCV from './pages/ADMIN/QuanLyCVNguoiDung';
import QuanLyALLBaiDang from './pages/ADMIN/QuanLyBaiDang';
import QuanLyALLCongTy from './pages/ADMIN/QuanLyCongTy';
import DSUngVien from './pages/UserHomePage/BuyerHomePage/MyPost/DanhSachUngVien/DanhSachUngVien';
import QuenMK from './pages/SignIn/QuenMK';
import QuanLyDiaChiCTY from './pages/ADMIN/QuanLyDiaChiCTY';
export const UserContext = createContext()


function App() {
 const [ idCongViec, setIdCongViec ] = useState();


 const handleSetIDCongViec = (id) =>{
  setIdCongViec(id);
 }

  return (
    <UserContext.Provider value={{idCongViec,handleSetIDCongViec}} >
      <Header />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/join' element={<JoinForm />} />
        <Route path='/signin' element={<SignIn />} />
        <Route path='/Products' element={<ProductsByCat />} />
        <Route path='/QuenMatKhau' element={<QuenMK />} />

        <Route path='/user' element={<PrivateRoute />}>
          <Route path='/user' element={<User />} />

          <Route path='/user/myCV' element={<MyCV />} />
          <Route path='/user/message' element={<Message />} />
          <Route path='/user/myCongTy' element={<MyCTY />} />
          <Route path='/user/myJob' element={<MyJob />} />
          <Route path='/user/JobDetail/:id' element={<DetailProduct />} />
          <Route path='/user/UngTuyen/DanhSachUV/:id' element={<DSUngVien />} />
          <Route path='/user/postRequest' element={<PostARequest />} />
          <Route path='/user/myPost' element={<MyPost />} />
          <Route path='/user/TaoCV' element={<FormThemCV />} />
    
          <Route path='/user/QuanLyUser' element={<QuanLyUser />} />
          <Route path='/user/QuanLyCVUsers' element={<QuanLyAllCV />} />
          <Route path='/user/QuanLyBaiDang' element={<QuanLyALLBaiDang />} />
          <Route path='/user/QuanLyCongTy' element={<QuanLyALLCongTy />} />
          <Route path='/user/QuanLyDiaChi' element={<QuanLyDiaChiCTY />} />
        </Route>
      </Routes>
    </UserContext.Provider>
  );
}

export default App;
