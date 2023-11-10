import useAxiosFunction from "../../components/hook/useAxiosFunction";

import httpClient from "../../utils/axiosInstance";

const RegisterUrl = '/auth/register'



export const RegisterService = () => {
    const { response: RegisterResponse,
        error: RegisterError,
        isLoading: RegisterIsLoading,
        axiosFetch: RegisterRefetch } = useAxiosFunction();

    const callRegisterRefetch = (dataUser) => {
        RegisterRefetch({
            axiosInstance: httpClient,
            method: 'POST',
            url: RegisterUrl,
            requestConfig: {data: dataUser}
        })
    }  


    return { RegisterResponse, RegisterIsLoading, RegisterError, callRegisterRefetch }
}


