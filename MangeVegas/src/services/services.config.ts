import axios, {type AxiosResponse} from "axios";
export const GEMINI_URL = 'https://api.gemini.com/v2/ticker';

export const getAxios = ()=> {
    const createdAxios = axios.create({
        baseURL: `${GEMINI_URL}`, //"/proxy-api/api", //`${BASE_URL}/api`,
        timeout: 40000, //40 segundos
        headers: {
            "Content-Type": "application/json",
            credentials: "include",
            Authorization: `Bearer meuToken...`
        },
    });

    //createdAxios.interceptors.request.use()
    createdAxios.interceptors.response.use(getAxiosResponse);
    console.log("GEMINI_URL", GEMINI_URL)
    return createdAxios;
}

export const getAxiosResponse = (response: AxiosResponse) =>{
    return response.data;
}
