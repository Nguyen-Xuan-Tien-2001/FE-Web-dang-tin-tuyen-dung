
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const ConfirmOderService = () => {


    const { response: confirmOrderResponse,
        error: confirmOrderError,
        isLoading: confirmOrderIsLoading,
        axiosFetch: confirmOrderRefetch } = useAxiosFunction();

    const callConfirmOrderRefetch = (id) => {
    let confirmOrderUrl = `/order/${id}/confirm`

        confirmOrderRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: confirmOrderUrl,
            requestConfig: {}
        })
    }  


    return { confirmOrderResponse, confirmOrderIsLoading, confirmOrderError, callConfirmOrderRefetch }
}


