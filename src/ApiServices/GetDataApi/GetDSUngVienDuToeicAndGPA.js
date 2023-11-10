import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const GetDSUngVienDuToeicAndGPAService = () => {

    
    const { response: GetDsUngVienDuToeicAndGPAResponse,
        error: GetDsUngVienDuToeicAndGPAError,
        isLoading: GetDsUngVienDuToeicAndGPAIsLoading,
        axiosFetch: QuenMatKhauRefetch } = useAxiosFunction();
        
        const GetDsUngVienDuToeicAndGPARefetch = (idCongViec) => {
        const GetDsUngVienDuToeicAndGPAUrl = `/UngTuyen/dudiemTOEICandGPA?congviecId=${idCongViec}`;
        
        QuenMatKhauRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetDsUngVienDuToeicAndGPAUrl,
            requestConfig: {}
        })
    }


    return { GetDsUngVienDuToeicAndGPAResponse, GetDsUngVienDuToeicAndGPAIsLoading, GetDsUngVienDuToeicAndGPAError, GetDsUngVienDuToeicAndGPARefetch }
}