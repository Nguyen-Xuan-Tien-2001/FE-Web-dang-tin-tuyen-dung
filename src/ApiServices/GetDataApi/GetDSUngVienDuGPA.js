import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const GetDSUngVienDuGPAService = () => {

    
    const { response: GetDsUngVienDuGPAResponse,
        error: GetDsUngVienDuGPAError,
        isLoading: GetDsUngVienDuGPAIsLoading,
        axiosFetch: QuenMatKhauRefetch } = useAxiosFunction();
        
        const GetDsUngVienDuGPARefetch = (idCongViec) => {
        const GetDsUngVienDuGPAUrl = `/UngTuyen/dudiemGPA?congviecId=${idCongViec}`;
        
        QuenMatKhauRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: GetDsUngVienDuGPAUrl,
            requestConfig: {}
        })
    }


    return { GetDsUngVienDuGPAResponse, GetDsUngVienDuGPAIsLoading, GetDsUngVienDuGPAError, GetDsUngVienDuGPARefetch }
}


