import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";


const getAllCVUrl = "/CV/getall";


export const GetAllCV = () => {

    const { response: getAllCVResponse,
        isLoading: getAllCVIsLoading,
        error: getAllCVError,
        refetch: getAllCVRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: getAllCVUrl,
            requestConfig: {}
        });


    return { getAllCVResponse, getAllCVIsLoading, getAllCVError, getAllCVRefetch }
}


