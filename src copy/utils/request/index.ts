import instance from './interceptor';
import { AxiosRequestConfig, Method } from 'axios';

function request<T>(
    url: string,
    params: any,
    method: Method,
    config?: AxiosRequestConfig,
): Promise<T> {
    return new Promise((resolve, reject) => {
        let data = {};
        if (method === 'get') {
            data = { params };
        }
        if (method === 'post') {
            data = params ? { data: params } : {};
        }

        instance({
            url,
            method,
            ...config,
            ...data,
        })
            .then((res) => {
                // 当取消请求时，res里没有data会导致报错
                if (res?.data) {
                    resolve(res?.data);
                }
                if (res?.data === '') {
                    resolve(res?.data);
                }
                if (typeof res?.data === 'boolean') {
                    resolve(res?.data as unknown as T);
                }
            })
            .catch((error) => {
                reject(error);
            });
    });
}

export function get<T>(url: string, params?: any, config?: AxiosRequestConfig) {
    return request<T>(url, params, 'get', config);
}

export function post<T>(
    url: string,
    params?: any,
    config?: AxiosRequestConfig,
) {
    return request<T>(url, params, 'post', config);
}
