import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const GetDSUngVienDuToeicService = () => {

    
    const { response: GetDsUngVienDuToeicResponse,
        error: GetDsUngVienDuToeicError,
        isLoading: GetDsUngVienDuToeicIsLoading,
        axiosFetch: QuenMatKhauRefetch } = useAxiosFunction();
        
        const GetDsUngVienDuToeicRefetch = (idCongViec) => {
        const GetDsUngVienDuToeicUrl = `/UngTuyen/dudiemTOEIC?congviecId=${idCongViec}`;
        
        QuenMatKhauRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetDsUngVienDuToeicUrl,
            requestConfig: {}
        })
    }


    return { GetDsUngVienDuToeicResponse, GetDsUngVienDuToeicIsLoading, GetDsUngVienDuToeicError, GetDsUngVienDuToeicRefetch }
}