import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const loginUrl = '/auth/login'



export const LoginService = () => {
    const { response: loginResponse,
        error: loginError,
        isLoading: loginIsLoading,
        axiosFetch: loginRefetch } = useAxiosFunction();

    const callLoginRefetch = (dataUser) => {
        loginRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: loginUrl,
            requestConfig: {data: dataUser}
        })
    }  


    return { loginResponse, loginIsLoading, loginError, callLoginRefetch }
}


