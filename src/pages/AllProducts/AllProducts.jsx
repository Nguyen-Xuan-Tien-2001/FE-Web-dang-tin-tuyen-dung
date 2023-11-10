import React, { useEffect, useState } from 'react'
// import { useLocation } from 'react-router'

import './AllProduct.css'
import Footer from '../../components/Footer/footer'
import { Products } from '../../components/Products/Products'
import { SlidePageProduct } from '../../components/SlidePageProduct/SlidePageProduct'

import { SearchJob } from '../../components/SearchJob/SearchJob'

//API Tìm kiếm
import { TimKiemCongViecService } from '../../ApiServices/TimKiem/TimKiemCongViec'



const AllProducts = () => {
  //call API

  const { TimKiemCongViecResponse, TimKiemCongViecIsLoading, TimKiemCongViecError, callTimKiemCongViecRefetch } = TimKiemCongViecService();

  
  const [dataSearch,setDataSearch] = useState({
    TenCViec: "",
    DiaChi: 0,
    ChuyenNganh: "",
    Luong: "",
  });

  const [dataCongViec, setDataCongViec] = useState([]);

  const handleDataSearch = (dataSearch) => {
    setDataSearch(dataSearch);
  };
  useEffect(() => {
    callTimKiemCongViecRefetch(dataSearch);
  },[dataSearch]);

  useEffect(() => {
    if(TimKiemCongViecResponse){
      if(TimKiemCongViecResponse.success){
        setDataCongViec(TimKiemCongViecResponse);
      }else{
        setDataCongViec(TimKiemCongViecResponse);
      }
    }
  },[TimKiemCongViecResponse])


  return (
    <>
      <div className="background_header">
        <SlidePageProduct />

        <SearchJob  handleDataSearch={handleDataSearch} />
      </div>
      {
        dataCongViec?.data ? <Products CongViec={dataCongViec.data} /> :

          <Products />

      }
      <Footer />
    </>
  )
}
export default AllProducts
