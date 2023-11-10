import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";

const GetAllBaiDangUrl = '/CongViec/getall';



export const GetAllBaiDangService = () => {

    const { response: GetAllBaiDangResponse,
        isLoading: GetAllBaiDangIsLoading,
        error: GetAllBaiDangError,
        refetch: GetAllBaiDangRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllBaiDangUrl,
            requestConfig: {}
        });

    return { GetAllBaiDangResponse, GetAllBaiDangIsLoading, GetAllBaiDangError, GetAllBaiDangRefetch }
}


