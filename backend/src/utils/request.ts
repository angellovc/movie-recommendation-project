import axios, { AxiosRequestConfig } from 'axios';

const request = async (url:string, options:AxiosRequestConfig) => {
    const response = await axios(url, options);
    return response.data;
}

export default request;