
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const CompleteOderService = () => {


    const { response: completeOrderResponse,
        error: completeOrderError,
        isLoading: completeOrderIsLoading,
        axiosFetch: completeOrderRefetch } = useAxiosFunction();

    const callCompleteOrderRefetch = (id) => {
    let completeOrderUrl = `/order/${id}/payment`

        completeOrderRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: completeOrderUrl,
            requestConfig: {}
        })
    }  


    return { completeOrderResponse, completeOrderIsLoading, completeOrderError, callCompleteOrderRefetch }
}


