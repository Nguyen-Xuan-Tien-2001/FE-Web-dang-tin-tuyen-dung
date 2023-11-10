import React, { useState } from 'react'
import { useEffect } from 'react'
import { faStar, faClock, faCheck, faLocationArrow } from "@fortawesome/free-solid-svg-icons"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { Link, useNavigate, useParams } from 'react-router-dom'
import { Button, Container } from 'react-bootstrap'
import { message } from 'antd'

import './DetailProduct.css'
import LogoCTY1 from '../../accets/LogoCTY/1.jpg'
import LogoCTY2 from '../../accets/LogoCTY/2.jpg'
import LogoCTY3 from '../../accets/LogoCTY/3.jpg'
import LogoCTY4 from '../../accets/LogoCTY/4.jpg'
import LogoCTY5 from '../../accets/LogoCTY/5.jpg'
import ExamImgGig from '../../accets/examImgGig.jpg'
import ExamImgAuthor from '../../accets/img_form/user.jpg'
import Footer from '../../components/Footer/footer'
import UserHeader from '../../components/user/userHeader/userHeader'
import { FormXacNhan } from '../../components/FormXacNhan/FormXacNhan'

//Call API kiểm tra user đã tạo CV hay chưa
import { GetCVByIDService } from '../../ApiServices/AuthService/getCVByID'
//Call API ứng tuyển
import { UngTuyenService } from '../../ApiServices/PostDataApi/UngTuyen'
//Call Thông tin chi tiết công việc
import { GetCongViecByIDService } from '../../ApiServices/GetDataApi/GetCongViecByID'

const DetailProduct = () => {
  const { UngTuyenResponse, UngTuyenIsLoading, UngTuyenError, callUngTuyenRefetch } = UngTuyenService();

  const navigate = useNavigate()
  const idCV = localStorage.getItem('idCV');
  const { id } = useParams();
  const { GetCongViecByIDResponse } = GetCongViecByIDService(id);

  const [toggle, setToggle] = useState(false);
  const handleUngTuyen = () => {
    setToggle(true);
  }

  const [messageApi, contextHolder] = message.useMessage();
  const success = (mes) => {
    messageApi.open({
      type: 'success',
      content: mes,
    });
  };
  const error = (mes) => {
    messageApi.open({
      type: 'error',
      content: mes,
    });
  };
  const role = localStorage.getItem('role');
  const handleXacNhanUngTuyen = () => {
    const data = {
      cv: {
        id: idCV
      },
      congviec: {
        id: id
      }
    }
    if (role === 'USER') {
      callUngTuyenRefetch(data);
    } else {
      error('Nhà tuyển dụng không thể ứng tuyển !')
    }
  }

  useEffect(() => {
    if (UngTuyenResponse) {
      success('Ứng tuyển thành công')
      navigate('/user/myJob');
    }
    else if (UngTuyenError) {
      alert('Bạn Không Thể Ứng Tuyển')
    }
  }, [UngTuyenResponse, UngTuyenError])


  //Khai báo call api 
  const { getCVByIDResponse, getCVByIDIsLoading, getCVByIDError, getCVByIDRefetch } = GetCVByIDService();


  //Call API Chi tiết sản phẩm

  useEffect(() => {
    if (getCVByIDResponse) {
      if (!getCVByIDResponse.success) {
        navigate('/user/TaoCV');
      }
    }
  }, [getCVByIDResponse]);

  return (
    <>
    {contextHolder}
      <UserHeader />
      <hr />
      {GetCongViecByIDResponse ?
        <Container className='Container__gigPage'>
          <div className="Main_gigPage">
            <h2 className="gigTitle">
              {GetCongViecByIDResponse.data.tenCViec}
            </h2>
            <div className="AuthorGig">
              {
                id === '0' ?
                  <img src={LogoCTY1} alt="LogoCTY" />
                  : id === '1' ?
                    <img src={LogoCTY2} alt="LogoCTY" />
                    : id === '2' ?
                      <img src={LogoCTY3} alt="LogoCTY" />
                      : id === '3' ?
                        <img src={LogoCTY4} alt="LogoCTY" />
                        : id === '4' ?
                          <img src={LogoCTY5} alt="LogoCTY" />
                          :
                          id === '5' ?
                            <img src={LogoCTY1} alt="LogoCTY" />
                            : id === '6' ?
                              <img src={LogoCTY2} alt="LogoCTY" />
                              : id === '7' ?
                                <img src={LogoCTY3} alt="LogoCTY" />
                                : id === '8' ?
                                  <img src={LogoCTY4} alt="LogoCTY" />
                                  : id === '9' ?
                                    <img src={LogoCTY5} alt="LogoCTY" />
                                    :
                                    <img src={LogoCTY1} alt="LogoCTY" />
              }
              <h5 className="AuthorName">{GetCongViecByIDResponse.data.chinhanh.congty.tenCTY}</h5>
              <div className="col__line"></div>
              <div className="star_feedback">
                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
              </div>
            </div>
            <div className="imageGigDetail">
              <img src={GetCongViecByIDResponse.data.image} alt="ExamImgGig" />
            </div>
            <div className="ContentGig">
              <h4 className="Content_Title">Mô Tả Công Việc</h4>
              <span className='ContentGig__text'>
                {GetCongViecByIDResponse.data.moTa}
              </span>
              <h4 className="Content_Title">Yêu cầu:</h4>
              <span className='ContentGig__text'>
                {GetCongViecByIDResponse.data.yeuCau}
              </span>
              <h4 className="Content_Title">Quyền lợi: </h4>
              <span className='ContentGig__text'>
                Quyền lợi được hưởng
                - Thu nhập từ 200 - 350 triệu/năm<br />

                - Thời gian làm việc từ thứ 2 đến thứ 6 (nghỉ thứ 7, Chủ nhật)<br />

                - Quyền lợi về Bảo hiểm xã hội/thất nghiệp và các phúc lợi hấp dẫn khác, gói bảo hiểm y tế quyền lợi đến $8000<br />

                - Các chế độ bồi dưỡng, phụ cấp ăn trưa, thuê bao nội bộ<br />

                - Được đào tạo phát triển bản thân, nâng cao các kỹ năng và chuyên môn nghề nghiệp<br />

                - Làm việc tại môi trường chuyên nghiệp, năng động, trẻ trung và trải nghiệm các hoạt động văn hóa doanh nghiệp đặc sắc<br />
              </span>
            </div>
            <hr />
            <div className="About_Author">
              <h4 className="AuthorTitle">
                Người đăng tuyển
              </h4>
              <div className='AuthorDetail'>
                <img src={ExamImgAuthor} alt="AvatarAuthor" />
                <div className='AuthorDetail__text'>
                  <h4 className="AuthorName">{GetCongViecByIDResponse.data.chinhanh.congty.user ? GetCongViecByIDResponse.data.chinhanh.congty.user.email : "HR Ẩn Danh"}</h4>
                  <span className="AuthorDescription">Professional Graphic Designer</span>
                  <div className="Stars">
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                    <FontAwesomeIcon icon={faStar} size="1x" color="#FFC100"></FontAwesomeIcon>
                  </div>
                  <Link>
                    <div className='ContactMeBtn'>Liên hệ HR</div>
                  </Link>
                </div>

              </div>
            </div>

          </div>
          <div className="packages__infor">
            <div className="packages__tabs">
              <Button className='activeTab'>Chi tiết công việc</Button>
            </div>
            <div className="package__content">
              <div className="header-recurring">
                <h4 className="Package__price">
                  Mức lương: <p style={{ color: '#1dbf73' }}>{GetCongViecByIDResponse.data.luong} $ / tháng</p>
                </h4>
                <div className="Package__Description">
                  <b>Thông tin chung:</b>
                </div>

                <div className="Article">
                  <div className="Package__Description">
                    <FontAwesomeIcon icon={faLocationArrow} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    <span >Địa điểm làm việc: {GetCongViecByIDResponse.data.chinhanh.diachi.tenDC}</span>
                  </div>
                  <div className="Package__Description">
                    <FontAwesomeIcon icon={faClock} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                    <span >Hình thức làm việc:  Fulltime</span>
                  </div>
                  <ul className="features">
                    <li className="flex-items-center">
                      <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                      Số lượng tuyển : {GetCongViecByIDResponse.data.soluong}
                    </li>
                    <li className="flex-items-center">
                      <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                      Cấp bậc : Nhân viên
                    </li>
                    <li className="flex-items-center">
                      <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                      Kinh nghiệm: Dưới 1 năm
                    </li>
                    <li className="flex-items-center">
                      <FontAwesomeIcon icon={faCheck} size="1x" color="#62646a" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                      Giới tính: Không yêu cầu
                    </li>
                    <li className="flex-items-center">
                      <FontAwesomeIcon icon={faCheck} size="1x" color="#1dbf73" style={{ marginRight: 20 + 'px' }}></FontAwesomeIcon>
                      Hạn nộp Hồ sơ: {GetCongViecByIDResponse.data.hanUngTuyen}
                    </li>
                  </ul>
                </div>
              </div>
              <div className="Footer__Package">
                {
                  GetCongViecByIDResponse.data.trangThai === "Hết hạn" ?
                    <Button className='package__Btn__hethan'>Hết hạn ứng tuyển</Button>
                    :
                    <Button className='package__Btn' onClick={handleUngTuyen}>Ứng tuyển ngay</Button>
                }
              </div>
            </div>
          </div>

          {
            toggle ?
              <FormXacNhan setToggle={setToggle} message={'Bạn chắc chắn ứng tuyển ?'} action={handleXacNhanUngTuyen} />
              : ''
          }
        </Container>
        : ''
      }
      <Footer />
    </>
  )
}

export default DetailProduct
