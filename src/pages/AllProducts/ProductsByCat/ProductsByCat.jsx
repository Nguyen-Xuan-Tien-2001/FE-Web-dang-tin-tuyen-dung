import React, { useEffect } from 'react'

import '../AllProduct.css'
import Footer from '../../../components/Footer/footer'
import { Products } from '../../../components/Products/Products' 
import { SlidePageProduct } from '../../../components/SlidePageProduct/SlidePageProduct' 

import { useContext } from "react";
import { UserContext } from '../../../App'


//Call API get Post by Id

 const ProductsByCat = () => {
  const {idCatDetail} = useContext(UserContext);

  //call API
  

  return (
    <>
        <div className="background_header"></div>
        <SlidePageProduct/>

        <Products /> 
        
        <Footer />
    </>
  )
}
export default ProductsByCat
