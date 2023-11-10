import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const TThemDiaChiCTYService = () => {
    const { response: TThemDiaChiCTYResponse,
        error: TThemDiaChiCTYError,
        isLoading: TThemDiaChiCTYIsLoading,
        axiosFetch: TThemDiaChiCTYRefetch } = useAxiosFunction();

    const callTThemDiaChiCTYRefetch = (data) => {
        const TThemDiaChiCTYUrl = `/diachi/them`
        TThemDiaChiCTYRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: TThemDiaChiCTYUrl,
            requestConfig: { data: data }
        })
    }


    return { TThemDiaChiCTYResponse, TThemDiaChiCTYIsLoading, TThemDiaChiCTYError, callTThemDiaChiCTYRefetch }
}


