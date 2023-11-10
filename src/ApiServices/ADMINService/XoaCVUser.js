
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const XoaCVUserService = () => {


    const { response: XoaCVResponse,
        error: XoaCVError,
        isLoading: XoaCVIsLoading,
        axiosFetch: XoaCVRefetch } = useAxiosFunction();

    const callXoaCVRefetch = (id) => {
    let XoaCVUrl = `/CV/xoa/${id}`

        XoaCVRefetch({
            axiosInstance: httpClient,
            method: 'DELETE',
            url: XoaCVUrl,
            requestConfig: {}
        })
    }  


    return { XoaCVResponse, XoaCVIsLoading, XoaCVError, callXoaCVRefetch }
}


