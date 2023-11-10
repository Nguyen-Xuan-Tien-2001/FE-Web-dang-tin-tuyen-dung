import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const createProfileUrl = '/user/create-profile'



export const CreateProfileService = () => {
    const { response: createProfileResponse,
        error: createProfileError,
        isLoading: createProfileIsLoading,
        axiosFetch: createProfileRefetch } = useAxiosFunction();

    const callCreateProfileRefetch = (data) => {
    
        createProfileRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: createProfileUrl,
            requestConfig: { data: data }
        })
    }


    return { createProfileResponse, createProfileIsLoading, createProfileError, callCreateProfileRefetch }
}







