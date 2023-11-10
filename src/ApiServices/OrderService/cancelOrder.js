
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const CancelOderService = () => {


    const { response: cancelOrderResponse,
        error: cancelOrderError,
        isLoading: cancelOrderIsLoading,
        axiosFetch: cancelOrderRefetch } = useAxiosFunction();

    const callCancelOrderRefetch = (id) => {
    let cancelOrderUrl = `/orders/${id}/cancel`

        cancelOrderRefetch({
            axiosInstance: httpClient,
            method: 'GET',
            url: cancelOrderUrl,
            requestConfig: {}
        })
    }  


    return { cancelOrderResponse, cancelOrderIsLoading, cancelOrderError, callCancelOrderRefetch }
}


