import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetAllCongViecService = () => {
    const GetAllCongViecUrl = '/CongViec/getall';

    const { response: GetAllCongViecResponse,
        isLoading: GetAllCongViecIsLoading,
        error: GetAllCongViecError,
        refetch: GetAllCongViecRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllCongViecUrl,
            requestConfig: {}
        });

    return { GetAllCongViecResponse, GetAllCongViecIsLoading, GetAllCongViecError, GetAllCongViecRefetch }
}


