import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const UngTuyenUrl = '/UngTuyen/them'



export const UngTuyenService = () => {
    const { response: UngTuyenResponse,
        error: UngTuyenError,
        isLoading: UngTuyenIsLoading,
        axiosFetch: UngTuyenRefetch } = useAxiosFunction();

    const callUngTuyenRefetch = (data) => {

        UngTuyenRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: UngTuyenUrl,
            requestConfig: {data: data}
        })
    }  


    return { UngTuyenResponse, UngTuyenIsLoading, UngTuyenError, callUngTuyenRefetch }
}


