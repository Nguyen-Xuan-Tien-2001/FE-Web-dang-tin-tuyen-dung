import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const TaoCVService = () => {
    const TaoCVUrl = `/CV/them`;

    const { response: TaoCVResponse,
        error: TaoCVError,
        isLoading: TaoCVIsLoading,
        axiosFetch: TaoCVRefetch } = useAxiosFunction();

    const callTaoCVRefetch = (data) => {
        TaoCVRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: TaoCVUrl,
            requestConfig: {data: data}
        })
    }  


    return { TaoCVResponse, TaoCVIsLoading, TaoCVError, callTaoCVRefetch }
}


