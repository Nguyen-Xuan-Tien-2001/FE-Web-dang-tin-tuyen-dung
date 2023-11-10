import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { faDollar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


import LogoCTY1 from '../../../accets/LogoCTY/1.jpg'
import LogoCTY2 from '../../../accets/LogoCTY/2.jpg'
import LogoCTY3 from '../../../accets/LogoCTY/3.jpg'
import LogoCTY4 from '../../../accets/LogoCTY/4.jpg'
import LogoCTY5 from '../../../accets/LogoCTY/5.jpg'

import './ProductItem.css'

export const ProductItem = ({ data, indexImg }) => {

  return (
    <Link style={{textDecoration:'none',color:'#1dbf73'}} to={`/user/JobDetail/${data.id}`} >
      <div className='ProductItem'>
        <div className="Logo_CTY">
        {
                indexImg === 0 ?
                  <img src={LogoCTY1} alt="LogoCTY" />
                  : indexImg === 1 ?
                    <img src={LogoCTY2} alt="LogoCTY" />
                    : indexImg === 2 ?
                      <img src={LogoCTY3} alt="LogoCTY" />
                      : indexImg === 3 ?
                        <img src={LogoCTY4} alt="LogoCTY" />
                        : indexImg === 4 ?
                          <img src={LogoCTY5} alt="LogoCTY" />
                          :
                          indexImg === 5 ?
                            <img src={LogoCTY1} alt="LogoCTY" />
                            : indexImg === 6 ?
                              <img src={LogoCTY2} alt="LogoCTY" />
                              : indexImg === 7 ?
                                <img src={LogoCTY3} alt="LogoCTY" />
                                : indexImg === 8 ?
                                  <img src={LogoCTY4} alt="LogoCTY" />
                                  : indexImg === 9 ?
                                    <img src={LogoCTY5} alt="LogoCTY" />
                                    :
                                    <img src={LogoCTY1} alt="LogoCTY" />
              }
        </div>
        <div className="ProductItem_Body">
          <div className="Body__Content">
            <div>
              <h3 className="JobName">
                {data.tenCViec}
              </h3>
              <h3 className="CTY_name">
                {data.chinhanh.congty.tenCTY}
              </h3>
            </div>
            <div className="label__content">
              <div className='label__address'>
                {data.chinhanh.diachi.tenDC}
              </div>
              <div className='label__time'>
                Hạn ứng tuyển: {data.hanUngTuyen}
              </div>
              <div className='label__time'>
                Trạng thái: {data.trangThai}
              </div>
              <div className='label__time'>
                Số lượng: {data.soluong}
              </div>
            </div>
          </div>
          <div className="Body__Apply">
            <div className="Luong__Job">
              <span style={{fontSize:"18px"}}>Lên tới ~</span> {data.luong} 
              <FontAwesomeIcon icon={faDollar} size="1x" color="#00c056" style={{ marginRight: 8 + 'px' }} id="searchIcon" />
            </div>
            {data.trangThai === "Còn hạn" ? 
            <Button variant='success' className='Job--btn' size='md' block='true'>Ứng tuyển</Button>
          :
            <Button danger className='Job--btn--hethan' size='md' block='true'>Hết hạn</Button>
          }
          </div>
        </div>
      </div>
    </Link>
  )
}
