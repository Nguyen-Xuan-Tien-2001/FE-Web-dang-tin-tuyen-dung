import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetAllChiNhanhService = () => {
    const GetAllChiNhanhUrl = '/diachi/getall';

    const { response: GetAllChiNhanhResponse,
        isLoading: GetAllChiNhanhIsLoading,
        error: GetAllChiNhanhError,
        refetch: GetAllChiNhanhRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllChiNhanhUrl,
            requestConfig: {}
        });

    return { GetAllChiNhanhResponse, GetAllChiNhanhIsLoading, GetAllChiNhanhError, GetAllChiNhanhRefetch }
}


