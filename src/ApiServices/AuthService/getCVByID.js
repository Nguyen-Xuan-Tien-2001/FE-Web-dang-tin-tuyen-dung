import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCVByIDService = () => {
    const id = localStorage.getItem('iduser')
    const getCVByIDUrl = `/CV/${id}`;

    const { response: getCVByIDResponse,
        isLoading: getCVByIDIsLoading,
        error: getCVByIDError,
        refetch: getCVByIDRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getCVByIDUrl,
            requestConfig: {}
        });


    return { getCVByIDResponse, getCVByIDIsLoading, getCVByIDError, getCVByIDRefetch }
}


