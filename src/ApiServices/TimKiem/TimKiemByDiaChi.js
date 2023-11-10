
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const TimKiemByDiaChiService = () => {


    const { response: TimKiemByDiaChiResponse,
        error: TimKiemByDiaChiError,
        isLoading: TimKiemByDiaChiIsLoading,
        axiosFetch: TimKiemByDiaChiRefetch } = useAxiosFunction();

    const callTimKiemByDiaChiRefetch = (diachiId) => {
    let TimKiemByDiaChiUrl = `/CongViec/congviec-by-diachi?diachiId=${diachiId}`;

        TimKiemByDiaChiRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: TimKiemByDiaChiUrl,
            requestConfig: {}
        })
    }  


    return { TimKiemByDiaChiResponse, TimKiemByDiaChiIsLoading, TimKiemByDiaChiError, callTimKiemByDiaChiRefetch }
}


