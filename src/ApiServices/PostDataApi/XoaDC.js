import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";



export const XoaDCService = () => {
    const { response: XoaDCResponse,
        error: XoaDCError,
        isLoading: XoaDCIsLoading,
        axiosFetch: XoaDCRefetch } = useAxiosFunction();

    const callXoaDCRefetch = (id) => {
        const XoaDCUrl = `/diachi/xoa/${id}`

        XoaDCRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: XoaDCUrl,
            requestConfig: {}
        })
    }  


    return { XoaDCResponse, XoaDCIsLoading, XoaDCError, callXoaDCRefetch }
}


