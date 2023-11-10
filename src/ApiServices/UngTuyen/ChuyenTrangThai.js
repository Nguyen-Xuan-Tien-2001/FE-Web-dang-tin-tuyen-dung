import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const ChuyenTrangThaiService = () => {
    const { response: ChuyenTrangThaiResponse,
        error: ChuyenTrangThaiError,
        isLoading: ChuyenTrangThaiIsLoading,
        axiosFetch: ChuyenTrangThaiRefetch } = useAxiosFunction();

    const callChuyenTrangThaiRefetch = (id,data) => {
        const ChuyenTrangThaiUrl = `/UngTuyen/sua/${id}`
        ChuyenTrangThaiRefetch({
            axiosInstance: httpClient,
            method: 'PUT',
            url: ChuyenTrangThaiUrl,
            requestConfig: {data: data}
        })
    }  


    return { ChuyenTrangThaiResponse, ChuyenTrangThaiIsLoading, ChuyenTrangThaiError, callChuyenTrangThaiRefetch }
}


