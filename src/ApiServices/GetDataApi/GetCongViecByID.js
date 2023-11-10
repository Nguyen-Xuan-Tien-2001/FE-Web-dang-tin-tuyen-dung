import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCongViecByIDService = (idCongViec) => {
    const GetCongViecByIDUrl = `/CongViec/getcongviec/${idCongViec}`;

    const { response: GetCongViecByIDResponse,
        isLoading: GetCongViecByIDIsLoading,
        error: GetCongViecByIDError,
        refetch: GetCongViecByIDRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetCongViecByIDUrl,
            requestConfig: {}
        });

    return { GetCongViecByIDResponse, GetCongViecByIDIsLoading, GetCongViecByIDError, GetCongViecByIDRefetch }
}


