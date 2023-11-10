import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCTYByHRService = () => {
    const id = localStorage.getItem('iduser')
    const GetCTYByHRUrl = `/CongViec/${id}`;

    const { response: GetCTYByHRResponse,
        isLoading: GetCTYByHRIsLoading,
        error: GetCTYByHRError,
        refetch: GetCTYByHRRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetCTYByHRUrl,
            requestConfig: {}
        });

    return { GetCTYByHRResponse, GetCTYByHRIsLoading, GetCTYByHRError, GetCTYByHRRefetch }
}


