import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const QuenMatKhauService = () => {
    const { response: QuenMatKhauResponse,
        error: QuenMatKhauError,
        isLoading: QuenMatKhauIsLoading,
        axiosFetch: QuenMatKhauRefetch } = useAxiosFunction();

    const callQuenMatKhauRefetch = (email) => {
        const QuenMatKhauUrl = `/auth/forgot-password?email=${email}`
        QuenMatKhauRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: QuenMatKhauUrl,
            requestConfig: {}
        })
    }


    return { QuenMatKhauResponse, QuenMatKhauIsLoading, QuenMatKhauError, callQuenMatKhauRefetch }
}


