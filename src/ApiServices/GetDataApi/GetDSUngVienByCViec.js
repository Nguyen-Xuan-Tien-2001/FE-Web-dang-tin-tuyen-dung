import useAxios from "../../components/hook/useAxios";

import httpClient from "../../utils/axiosInstance";




export const GetDSUngVienByCVIECService = (idCongViec) => {

    const GetDsUngVienUrl = `/UngTuyen/byCongviec?congviecId=${idCongViec}`;

    const { response: GetDsUngVienResponse,
        isLoading: GetDsUngVienIsLoading,
        error: GetDsUngVienError,
        refetch: GetDsUngVienRefetch } = useAxios({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetDsUngVienUrl,
            requestConfig: {}
        });

    return { GetDsUngVienResponse, GetDsUngVienIsLoading, GetDsUngVienError, GetDsUngVienRefetch }
}


