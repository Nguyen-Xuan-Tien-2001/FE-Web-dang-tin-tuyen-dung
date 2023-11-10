import React, { useState } from 'react'
import { Button } from 'antd'
import { UpCircleOutlined, DownCircleOutlined } from '@ant-design/icons';

import './Products.css'
import { ProductItem } from './ProductItem/ProductItem'
import { Container } from 'react-bootstrap'




//call API để lấy tên của Categorie đó thôi

export const Products = ({ CongViec }) => {
  const [sortLuong, setSortLuowng] = useState('Tăng dần');
  let dataConHan = CongViec?.filter((value) => {
    return value.trangThai === 'Còn hạn';
  });

  if (sortLuong === 'Tăng dần') {
    dataConHan = dataConHan?.sort(function (a, b) { return b.luong - a.luong });
  } else {
    dataConHan = dataConHan?.sort(function (a, b) { return a.luong - b.luong });
  }
  console.log('dataconhan', dataConHan);
  return (
    <>
      <Container>
        <div className="List_Products">
          <div className="List_Title">
            <h2>Gợi ý việc làm phù hợp</h2>
            <div className="List_title_sort">
              <Button onClick={() => setSortLuowng('Tăng dần')}>Lương Giảm dần <DownCircleOutlined /> </Button>
              <Button onClick={() => setSortLuowng('Giảm dần')}>Lương Tăng dần <UpCircleOutlined /> </Button>
            </div>
          </div>
          <div className="Container_products">
            {
              dataConHan ? dataConHan?.map((value, index) => {
                return (
                  <ProductItem indexImg={index} data={value} />
                )
              })
                :
                <i>Không tìm thấy việc làm thích hợp!</i>
            }

          </div>
        </div>
      </Container>
    </>

  )
}
