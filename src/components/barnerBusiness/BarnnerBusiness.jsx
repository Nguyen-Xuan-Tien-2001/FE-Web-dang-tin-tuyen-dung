import React from 'react'
import { Button } from 'react-bootstrap'
import "./BarnnerBusiness.css"

const BarnnerBusiness = () => {
  return (
    <div className="BarnnerBusiness">
      <div className="container">
        <div className="business-text">
          <div className="business-logo">
            <h2>fiverr</h2>
            <p>NEW</p>
          </div>

          <h2 className="font-domaine">
            Kiến tạo sự nghiệp của riêng bạn với ứng dụng Fiverr
          </h2>

          <p className="tbody-4">
            <b>“Tất cả trong một”</b>
          </p>
          
            <div className="item">
              <div className="title">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>    
                Nhà tuyển dụng uy tín
              </div>
              <div className="title">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
                Doanh nghiệp hàng đầu  
                </div>
              <div className="title">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
                2.000.000+ Việc làm đã được kết nối  
              </div>
              <div className="title">
                <svg width="16" height="16" viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg"><path d="M8 1.75C4.54822 1.75 1.75 4.54822 1.75 8C1.75 11.4518 4.54822 14.25 8 14.25C11.4518 14.25 14.25 11.4518 14.25 8C14.25 4.54822 11.4518 1.75 8 1.75ZM0.25 8C0.25 3.71979 3.71979 0.25 8 0.25C12.2802 0.25 15.75 3.71979 15.75 8C15.75 12.2802 12.2802 15.75 8 15.75C3.71979 15.75 0.25 12.2802 0.25 8Z"></path><path d="M11.5303 5.46967C11.8232 5.76256 11.8232 6.23744 11.5303 6.53033L7.53033 10.5303C7.23744 10.8232 6.76256 10.8232 6.46967 10.5303L4.46967 8.53033C4.17678 8.23744 4.17678 7.76256 4.46967 7.46967C4.76256 7.17678 5.23744 7.17678 5.53033 7.46967L7 8.93934L10.4697 5.46967C10.7626 5.17678 11.2374 5.17678 11.5303 5.46967Z"></path></svg>
                1.200.000+ Lượt tải ứng dụng
              </div>
            </div>
          <Button>Đến với chúng tôi</Button>
        </div>

        <div className="business-image">
          <picture>
            <source media="(min-width: 1160px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624768/business-desktop-870-x2.png 2x"/>
            <source media="(min-width: 900px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624769/business-desktop-585-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_585,dpr_2.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624759/business-desktop-585-x2.png 2x"/>
            <source media="(min-width: 600px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-836-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_836,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114278/business-mobile-836-x2.png 2x"/>
            <source media="(min-width: 361px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_552,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114277/business-mobile-552-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_552,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114289/business-mobile-552-x2.png 2x"/>
            <source media="(max-width: 360px)" srcSet="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_1.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114294/business-mobile-312-x1.png 1x, https://fiverr-res.cloudinary.com/q_auto,f_auto,w_312,dpr_2.0/v1/attachments/generic_asset/asset/7d30a5eab61a328ed8c036a1d998595d-1599837114288/business-mobile-312-x2.png 2x"/>
            <img alt="Fiverr Business freelancers" src="https://fiverr-res.cloudinary.com/q_auto,f_auto,w_870,dpr_1.0/v1/attachments/generic_asset/asset/d9c17ceebda44764b591a8074a898e63-1599597624757/business-desktop-870-x1.png" loading="lazy"/>

            </picture>
        </div>
      </div>
    </div>
  )
}
export default BarnnerBusiness