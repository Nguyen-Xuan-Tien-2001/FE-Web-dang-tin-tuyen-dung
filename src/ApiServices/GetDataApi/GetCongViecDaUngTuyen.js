import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetCongViecDaUngTuyenService = () => {

    const GetCongViecDaUngTuyenUrl = `/CongViec/byChinhanh?chinhanhId=${localStorage.getItem('idChiNhanh')}`;

    const { response: GetCongViecDaUngTuyenResponse,
        isLoading: GetCongViecDaUngTuyenIsLoading,
        error: GetCongViecDaUngTuyenError,
        refetch: GetCongViecDaUngTuyenRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetCongViecDaUngTuyenUrl,
            requestConfig: {}
        });

    return { GetCongViecDaUngTuyenResponse, GetCongViecDaUngTuyenIsLoading, GetCongViecDaUngTuyenError, GetCongViecDaUngTuyenRefetch }
}


