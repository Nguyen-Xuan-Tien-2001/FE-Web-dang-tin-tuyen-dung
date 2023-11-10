import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const ThemCongTyService = () => {
    const ThemCongTyUrl = `/ChuyenNganh/them`;

    const { response: ThemCongTyResponse,
        error: ThemCongTyError,
        isLoading: ThemCongTyIsLoading,
        axiosFetch: ThemCongTyRefetch } = useAxiosFunction();

    const callThemCongTyRefetch = (data) => {
        ThemCongTyRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: ThemCongTyUrl,
            requestConfig: {data: data}
        })
    }  


    return { ThemCongTyResponse, ThemCongTyIsLoading, ThemCongTyError, callThemCongTyRefetch }
}


