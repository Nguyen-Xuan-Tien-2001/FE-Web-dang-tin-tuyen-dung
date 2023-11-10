import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const TaoBaiDangUrl = '/CongViec/them'



export const TaoBaiDangService = () => {
    const { response: TaoBaiDangResponse,
        error: TaoBaiDangError,
        isLoading: TaoBaiDangIsLoading,
        axiosFetch: TaoBaiDangRefetch } = useAxiosFunction();

    const callTaoBaiDangRefetch = (data) => {

        TaoBaiDangRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: TaoBaiDangUrl,
            requestConfig: {data: data}
        })
    }  


    return { TaoBaiDangResponse, TaoBaiDangIsLoading, TaoBaiDangError, callTaoBaiDangRefetch }
}


