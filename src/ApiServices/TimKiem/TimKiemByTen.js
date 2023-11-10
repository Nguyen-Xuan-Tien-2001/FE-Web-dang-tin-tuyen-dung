
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const TimKiemByTenService = () => {


    const { response: TimKiemByTenResponse,
        error: TimKiemByTenError,
        isLoading: TimKiemByTenIsLoading,
        axiosFetch: TimKiemByTenRefetch } = useAxiosFunction();

    const callTimKiemByTenRefetch = (tenCViec) => {
    let TimKiemByTenUrl = `/CongViec/congviec-by-tencviec?tenCViec=${tenCViec}`;

        TimKiemByTenRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: TimKiemByTenUrl,
            requestConfig: {}
        })
    }  


    return { TimKiemByTenResponse, TimKiemByTenIsLoading, TimKiemByTenError, callTimKiemByTenRefetch }
}


