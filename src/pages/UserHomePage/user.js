import UserHeader from "../../components/user/userHeader/userHeader.js"
import { useEffect } from "react"
import AllProducts from "../AllProducts/AllProducts.jsx"
import { GetCTYByHRService } from "../../ApiServices/GetDataApi/getMyCongTy.js"

const User = () => {
    const { GetCTYByHRResponse, GetCTYByHRIsLoading, GetCTYByHRError, GetCTYByHRRefetch } = GetCTYByHRService();

        useEffect(() => {
            if(GetCTYByHRResponse){
                localStorage.setItem('idChiNhanh', GetCTYByHRResponse.data[0].id);
            }
        }, [GetCTYByHRResponse])

    return (
        <div>
            <UserHeader />
            <AllProducts />
        </div>
    )
}

export default User