import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const GetAllUsersUrl = '/user-manager/getall';



export const GetAllUsersService = () => {

    const { response: GetAllUsersResponse,
        isLoading: GetAllUsersIsLoading,
        error: GetAllUsersError,
        refetch: GetAllUsersRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllUsersUrl,
            requestConfig: {}
        });

    return { GetAllUsersResponse, GetAllUsersIsLoading, GetAllUsersError, GetAllUsersRefetch }
}


