import React from 'react'
import { Link } from 'react-router-dom'
import "./ProjectCard.css"

 const ProjectCard = ({item,projectCard}) => {
  // Lấy src Img  set cứng tưng ứng với id từ file data.js
  const ProjectImg = projectCard.filter((card) => {
    return card.id === item.post_id;
  })



  return (
    <Link className='projectItem' to ="/Products">
        <div className="projectCard">
            <img src={ProjectImg[0] ? ProjectImg[0].img : ''} alt="project img" />
            <div className='infor'>
              <img src={ProjectImg[0] ? ProjectImg[0].pp : ''} alt="projectAuthor Img" />
              <div className="texts">
                <h5>{item.post_detail.profile_user}</h5>
                <span>{item.category_detail_name}</span>
              </div>
            </div>
        </div>
    </Link>
  )
}

export default ProjectCard
