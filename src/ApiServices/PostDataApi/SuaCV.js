import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const EditCVService = () => {
    const iduser = localStorage.getItem('idCV');
    const EditCVUrl = `/CV/sua/${iduser}`;

    const { response: EditCVResponse,
        error: EditCVError,
        isLoading: EditCVIsLoading,
        axiosFetch: EditCVRefetch } = useAxiosFunction();

    const callEditCVRefetch = (data) => {
        EditCVRefetch({
            axiosInstance: httpClient,
            method: 'PUT',
            url: EditCVUrl,
            requestConfig: {data: data}
        })
    }  


    return { EditCVResponse, EditCVIsLoading, EditCVError, callEditCVRefetch }
}


