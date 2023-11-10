
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const XoaBaiDangService = () => {


    const { response: XoaBaiDangResponse,
        error: XoaBaiDangError,
        isLoading: XoaBaiDangIsLoading,
        axiosFetch: XoaBaiDangRefetch } = useAxiosFunction();

    const callXoaBaiDangRefetch = (id) => {
    let XoaBaiDangUrl = `/CongViec/xoa/${id}`

        XoaBaiDangRefetch({
            axiosInstance: httpClient,
            method: 'DELETE',
            url: XoaBaiDangUrl,
            requestConfig: {}
        })
    }  


    return { XoaBaiDangResponse, XoaBaiDangIsLoading, XoaBaiDangError, callXoaBaiDangRefetch }
}


