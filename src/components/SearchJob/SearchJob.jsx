import React, { useState } from 'react'
import { Form, Button } from 'react-bootstrap'
import { faSearch, faTruckRampBox, faSearchLocation, faDollar } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { useNavigate } from 'react-router'
import { Select } from 'antd'

import { GetAllChiNhanhService } from '../../ApiServices/GetDataApi/GetAllChiNhanh';
import { GetAllChuyenNganhService } from '../../ApiServices/GetDataApi/GetAllChuyenNganh'


import './SearchJob.css'

export const SearchJob = ({ handleDataSearch }) => {
  const { GetAllChiNhanhResponse, GetAllChiNhanhIsLoading, GetAllChiNhanhError, GetAllChiNhanhRefetch } = GetAllChiNhanhService()
  const { GetAllChuyenNganhResponse, GetAllChuyenNganhIsLoading, GetAllChuyenNganhError, GetAllChuyenNganhRefetch } = GetAllChuyenNganhService();


  const [formData, setFormData] = useState({
    TenCViec: "",
    DiaChi: 0,
    ChuyenNganh: "",
    Luong: "",
  });


  const handleOnSubmit = (e) => {
    e.preventDefault();
    handleDataSearch(formData);
  
  }
  const handleChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }));
  };



  return (
    <div className='container'>
      <Form onSubmit={handleOnSubmit} className='FormSearch'>
        <Form.Group className="" >
          <Form.Label>
            <FontAwesomeIcon icon={faSearch} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Control onChange={handleChange} name='TenCViec' type="text" placeholder="Công việc cần tìm kiếm" />
        </Form.Group>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faSearchLocation} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='DiaChi' onChange={handleChange} aria-label="DiaChi">
            <option value={0}>Tất cả địa chỉ</option>
            {
              GetAllChiNhanhResponse ? GetAllChiNhanhResponse?.data?.map((data) => {
                return (
                  <option value={data.id}>{data.tenDC}</option>
                )
              }) : ''
            }
          </Form.Select>
        </div>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faTruckRampBox} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='ChuyenNganh' onChange={handleChange} aria-label="ChuyenNganh">
            <option value="">Tất cả ngành nghề</option>
            {
              GetAllChuyenNganhResponse ? GetAllChuyenNganhResponse?.data?.map((data) => {
                return (
                  <option value={data.id}>{data.tenChuyenNganh}</option>
                )
              }) : ''
            }
          </Form.Select>
        </div>
        <div>
          <Form.Label>
            <FontAwesomeIcon icon={faDollar} size="1x" color="black" id="searchIcon" />
          </Form.Label>
          <Form.Select name='Luong' onChange={handleChange} aria-label="Luong">
            <option value={0} >Tất cả mức lương</option>
            <option value={1} >Dưới 100$</option>
            <option value={2} >Từ 100$ ~ 1000$</option>
            <option value={3} >Từ 1000$ ~ 2000$</option>
            <option value={4} >Trên 2000$ </option>
          </Form.Select>
        </div>
        <div>
          <Button type='submit' variant='success' className='Search--btn' size='md' block='true'>Tìm kiếm</Button>
        </div>
      </Form>

    </div >
  )
}
