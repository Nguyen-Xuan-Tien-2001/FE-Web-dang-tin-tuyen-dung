
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const ConfirmAndPaymentService = () => {


    const { response: confirmAndPaymentResponse,
        error: confirmAndPaymentError,
        isLoading: confirmAndPaymentIsLoading,
        axiosFetch: confirmAndPaymentRefetch } = useAxiosFunction();

    const callConfirmAndPaymentRefetch = (id) => {
    let confirmAndPaymentUrl = `/order/${id}/deposit`

        confirmAndPaymentRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: confirmAndPaymentUrl,
            requestConfig: {}
        })
    }  


    return { confirmAndPaymentResponse, confirmAndPaymentIsLoading, confirmAndPaymentError, callConfirmAndPaymentRefetch }
}


