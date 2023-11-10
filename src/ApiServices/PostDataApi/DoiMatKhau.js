import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const DoiMatKhauService = () => {
    const { response: DoiMatKhauResponse,
        error: DoiMatKhauError,
        isLoading: DoiMatKhauIsLoading,
        axiosFetch: DoiMatKhauRefetch } = useAxiosFunction();

    const callDoiMatKhauRefetch = (data) => {
        const idUser = localStorage.getItem('iduser');
        const DoiMatKhauUrl = `/auth/change-password/${idUser}`
        DoiMatKhauRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: DoiMatKhauUrl,
            requestConfig: { data: data }
        })
    }


    return { DoiMatKhauResponse, DoiMatKhauIsLoading, DoiMatKhauError, callDoiMatKhauRefetch }
}


