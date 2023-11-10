import { Outlet, Navigate } from "react-router";
import { LoginStatus } from "./CheckLogin.js";

const PrivateRoute=()=>{
    const {login,checking}=LoginStatus()


    if(checking){
        return(
            <>
            <div></div>
            </>
        )
    }

    return login?<Outlet/> :<Navigate to ='/'/>
   
}
export default PrivateRoute;