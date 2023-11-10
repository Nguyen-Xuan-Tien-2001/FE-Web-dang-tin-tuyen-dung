import React from 'react'
import "./Slide.css"
import CatCard from '../catCard/catCard.jsx'
import ProjectCard from '../projectCard/projectCart.jsx';



export default function Slide({projectCard,catCart,catDetail,postList}) {
  const Item = projectCard? postList : catDetail;
  return (
    <div className='slide-card'>
        <div className="container">
          <h2>Tin tuyển dụng,Việc làm tốt nhất</h2> 
          <div className="row">
            <div className="MultiCarousel" data-items="1,3,5,6" data-slide="1" id="MultiCarousel"  data-interval="1000">
                    <div className="MultiCarousel-inner">
                      {catDetail ?
                        Item.map(function (item){
                          return (
                            <div key={catCart? "catCard" + item.category_detail_id : "projectCard" +item.post_id} className="item">
                              {catCart ? <CatCard item={item} catCartId={catCart}/>: ''}
                            </div>
                          )
                        })
                      : null}
                      {postList?
                      Item.map(function (item){
                        return (
                          <div key={catCart? "catCard" + item.category_detail_id : "projectCard" +item.post_id} className="item">
                            {projectCard? <ProjectCard  item={item} projectCard={projectCard}/> : ''}
                          </div>
                        )
                      }): null}
                        
                    </div>
                </div>
          </div>
        </div>
    </div>
  )
}
