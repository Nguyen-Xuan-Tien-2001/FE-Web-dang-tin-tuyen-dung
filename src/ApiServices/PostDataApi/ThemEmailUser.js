import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";




export const ThemEmailUserService = () => {
    const { response: ThemEmailUserResponse,
        error: ThemEmailUserError,
        isLoading: ThemEmailUserIsLoading,
        axiosFetch: ThemEmailUserRefetch } = useAxiosFunction();

    const callThemEmailUserRefetch = (data) => {
        const idUser = localStorage.getItem('iduser');
        const ThemEmailUserUrl = `/user-manager/sua/${idUser}`
        ThemEmailUserRefetch({
            axiosInstance: httpClient,
            method: 'PUT',
            url: ThemEmailUserUrl,
            requestConfig: { data: data }
        })
    }


    return { ThemEmailUserResponse, ThemEmailUserIsLoading, ThemEmailUserError, callThemEmailUserRefetch }
}


