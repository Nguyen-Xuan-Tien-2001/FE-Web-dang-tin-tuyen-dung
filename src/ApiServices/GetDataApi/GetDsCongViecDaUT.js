import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCViecDaUTService = (idCV) => {
    const GetCViecDaUTUrl = `/UngTuyen/byCV?CVId=${idCV}`;

    const { response: GetCViecDaUTResponse,
        isLoading: GetCViecDaUTIsLoading,
        error: GetCViecDaUTError,
        refetch: GetCViecDaUTRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetCViecDaUTUrl,
            requestConfig: {}
        });

    return { GetCViecDaUTResponse, GetCViecDaUTIsLoading, GetCViecDaUTError, GetCViecDaUTRefetch }
}


