import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";


export const updatePostService = (idPost) => {

    const updatePostUrl = `/post/update-post/${idPost}`
    
    const { response: updatePostResponse,
        error: updatePostError,
        isLoading: updatePostIsLoading,
        axiosFetch: updatePostRefetch } = useAxiosFunction();

    const callUpdatePostRefetch = (data) => {

        updatePostRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: updatePostUrl,
            requestConfig: {data: data}
        })
    }  


    return { updatePostResponse, updatePostIsLoading, updatePostError, callUpdatePostRefetch }
}


