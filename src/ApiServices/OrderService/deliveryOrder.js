
import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const DeliveryOderService = () => {


    const { response: deliveryOrderResponse,
        error: deliveryOrderError,
        isLoading: deliveryOrderIsLoading,
        axiosFetch: deliveryOrderRefetch } = useAxiosFunction();

    const callDeliveryOrderRefetch = (id) => {
    let deliveryOrderUrl = `/order/${id}/delivery`

        deliveryOrderRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: deliveryOrderUrl,
            requestConfig: {}
        })
    }  


    return { deliveryOrderResponse, deliveryOrderIsLoading, deliveryOrderError, callDeliveryOrderRefetch }
}


