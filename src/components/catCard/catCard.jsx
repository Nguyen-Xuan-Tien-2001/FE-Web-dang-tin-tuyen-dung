import React from 'react'
import { Link } from 'react-router-dom'
import "./catCard.css"
import { useContext } from "react";

import { UserContext } from '../../App';

 const CatCard = ({item,catCartId}) => {

  const {handleOnclickCatDetail} = useContext(UserContext);
 
// Lấy src Img  set cứng tưng ứng với id từ file data.js
  const cardImg = catCartId.filter((card) => {
    return card.id === item.category_detail_id;
  })


  return (
    <Link to ='/Products' onClick={() => handleOnclickCatDetail(item.category_detail_id)}>
        <div className="catCard">
            <img src={cardImg[0].img} alt="card-item" />
            <span className="desc">{cardImg[0].desc}</span>
            <span className="title">{item.category_detail_name}</span>
        </div>
    </Link>
  )
}

export default CatCard
