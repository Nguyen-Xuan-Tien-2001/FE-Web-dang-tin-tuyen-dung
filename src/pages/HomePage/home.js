import React, { useEffect } from "react";
import { useNavigate } from "react-router";


import BarnnerBusiness from "../../components/barnerBusiness/BarnnerBusiness.jsx";
import { Feature } from "../../components/feature/Feature.jsx";
import Footer from "../../components/Footer/footer";
import Slide from "../../components/slide/Slide.jsx";
import SliderHome from '../../components/barnerSlider/slider.js';
import { TrustedBy } from "../../components/trustedBy/TrustedBy.js";
import { cards } from "../../data.js"

//Call API Get List Post


const Home = () =>{

    const user = localStorage.getItem('token');
    const navigate = useNavigate();
    useEffect(()=>{
        if(user){
           navigate('/user');
        }
        
    },[user])



    return(
        <div  className="bgColor">
            <SliderHome/>
            <TrustedBy />
            <Feature/>
            <BarnnerBusiness/>
            <Footer/>
        </div>
    )
}
export default Home;