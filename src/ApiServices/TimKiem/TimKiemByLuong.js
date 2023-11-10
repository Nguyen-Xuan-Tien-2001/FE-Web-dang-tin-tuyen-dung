
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const TimKiemByLuongService = () => {


    const { response: TimKiemByLuongResponse,
        error: TimKiemByLuongError,
        isLoading: TimKiemByLuongIsLoading,
        axiosFetch: TimKiemByLuongRefetch } = useAxiosFunction();

    const callTimKiemByLuongRefetch = (minSalary,maxSalary) => {
    let TimKiemByLuongUrl = `/CongViec/Luong?minSalary=${minSalary}&maxSalary=${maxSalary}`;

        TimKiemByLuongRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: TimKiemByLuongUrl,
            requestConfig: {}
        })
    }  


    return { TimKiemByLuongResponse, TimKiemByLuongIsLoading, TimKiemByLuongError, callTimKiemByLuongRefetch }
}


