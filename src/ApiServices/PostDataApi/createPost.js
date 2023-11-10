import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const createPostUrl = '/post/create-post'



export const CreatePostService = () => {
    const { response: createPostResponse,
        error: createPostError,
        isLoading: createPostIsLoading,
        axiosFetch: createPostRefetch } = useAxiosFunction();

    const callCreatePostRefetch = (data) => {

        createPostRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: createPostUrl,
            requestConfig: {data: data}
        })
    }  


    return { createPostResponse, createPostIsLoading, createPostError, callCreatePostRefetch }
}


