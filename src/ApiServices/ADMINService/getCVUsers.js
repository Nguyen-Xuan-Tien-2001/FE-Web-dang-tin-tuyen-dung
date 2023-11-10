import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const GetAllCVUsersUrl = '/CV/getall';



export const GetAllCVUsersService = () => {

    const { response: GetAllCVUsersResponse,
        isLoading: GetAllCVUsersIsLoading,
        error: GetAllCVUsersError,
        refetch: GetAllCVUsersRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllCVUsersUrl,
            requestConfig: {}
        });

    return { GetAllCVUsersResponse, GetAllCVUsersIsLoading, GetAllCVUsersError, GetAllCVUsersRefetch }
}


