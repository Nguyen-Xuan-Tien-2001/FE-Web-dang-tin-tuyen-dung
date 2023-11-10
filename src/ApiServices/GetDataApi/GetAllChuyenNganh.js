import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetAllChuyenNganhService = () => {
    const GetAllChuyenNganhUrl = 'ChuyenNganh/getall';

    const { response: GetAllChuyenNganhResponse,
        isLoading: GetAllChuyenNganhIsLoading,
        error: GetAllChuyenNganhError,
        refetch: GetAllChuyenNganhRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetAllChuyenNganhUrl,
            requestConfig: {}
        });

    return { GetAllChuyenNganhResponse, GetAllChuyenNganhIsLoading, GetAllChuyenNganhError, GetAllChuyenNganhRefetch }
}


