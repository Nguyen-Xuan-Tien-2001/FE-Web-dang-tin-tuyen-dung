
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const TimKiemCongViecService = () => {


    const { response: TimKiemCongViecResponse,
        error: TimKiemCongViecError,
        isLoading: TimKiemCongViecIsLoading,
        axiosFetch: TimKiemCongViecRefetch } = useAxiosFunction();

    const callTimKiemCongViecRefetch = (dataSearch) => {
        let minLuong = 0;
        let maxLuong = 999999;
        if (dataSearch.Luong !== "") {
            if (dataSearch.Luong === "1") {
                minLuong = 0;
                maxLuong = 999999;
            }
            else if (dataSearch.Luong === "2") {
                minLuong = 100;
                maxLuong = 1000;
            }
            else if (dataSearch.Luong === "3") {
                minLuong = 1000;
                maxLuong = 2000;
            }
            else if (dataSearch.Luong === "4") {
                minLuong = 2000;
                maxLuong = 999999;
            }
        }


        let TimKiemCongViecUrl = `/CongViec/by-tenCV-diachi-tenChuyenNganh-luong?tenCV=${dataSearch.TenCViec}&idDiaChi=${dataSearch.DiaChi}&tenChuyenNganh=${dataSearch.ChuyenNganh}&minLuong=${minLuong}&maxLuong=${maxLuong}`;

        TimKiemCongViecRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: TimKiemCongViecUrl,
            requestConfig: {}
        })
    }


    return { TimKiemCongViecResponse, TimKiemCongViecIsLoading, TimKiemCongViecError, callTimKiemCongViecRefetch }
}


