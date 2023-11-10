import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const createOrderNewUrl = '/order/create-order'



export const CreateOrderNewService = () => {
    const { response: createOrderNewResponse,
        error: createOrderNewError,
        isLoading: createOrderNewIsLoading,
        axiosFetch: createOrderNewRefetch } = useAxiosFunction();

    const callCreateOrderNewRefetch = (data) => {

        createOrderNewRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: createOrderNewUrl,
            requestConfig: {data: data}
        })
    }  


    return { createOrderNewResponse, createOrderNewIsLoading, createOrderNewError, callCreateOrderNewRefetch }
}


