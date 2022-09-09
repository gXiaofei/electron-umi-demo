import axios, { AxiosRequestConfig, AxiosRequestHeaders, Method } from 'axios';
import jsCookie from 'js-cookie';
import { message } from 'antd';

interface PendingType {
    url?: string;
    method?: Method;
    params: any;
    data: any;
    cancel: any;
}

const service = axios.create({
    baseURL: '/ibps',
    headers: {
        'Content-Type': 'application/json;charset=UTF-8',
        'Access-Control-Allow-Origin-Type': '*',
    },
    timeout: 3 * 60 * 1000,
});

/**
 * 请求失败后的错误统一处理
 * @param {Number} status 请求失败的状态码
 */
const errorHandle = (
    status: number,
    msg?: {
        errorMsg?: string;
    },
) => {
    // 状态码判断
    switch (status) {
        case 401:
            message.error(msg?.errorMsg ?? '账号尚未登录，正在前往登录');
            break;
        case 403:
            message.error(msg?.errorMsg ?? '账号登录过期，正在前往登录');
            jsCookie.set('auth.token', '');
            // jsCookie.set('auth.sysid', '');
            // jsCookie.set('auth.permit', '');
            break;
        default:
            message.error(msg?.errorMsg ?? '请求失败，请稍后重试');
    }
};

// 取消重复请求
const pending: Array<PendingType> = [];
const CancelToken = axios.CancelToken;

// 移除重复请求
const removePending = (config: AxiosRequestConfig) => {
    pending.forEach((item, index) => {
        // 当前请求在数组中存在时执行函数体
        if (
            item.url === config.url &&
            item.method === config.method &&
            JSON.stringify(item.params) === JSON.stringify(config.params) &&
            JSON.stringify(item.data) === JSON.stringify(config.data)
        ) {
            // 执行取消操作
            item.cancel('操作太频繁，请稍后再试');
            // 从数组中移除记录
            pending.splice(index, 1);
        }
    });
};

// Request 拦截器
service.interceptors.request.use(
    (config) => {
        removePending(config);
        config.cancelToken = new CancelToken((c) => {
            pending.push({
                url: config.url,
                method: (config as any).method,
                params: config.params,
                data: config.data,
                cancel: c,
            });
        });
        // TODO:
        const headers = config.headers as AxiosRequestHeaders;
        const token = jsCookie.get('auth.token') || '';
        const sysid = jsCookie.get('auth.sysid') || '';
        const permit = jsCookie.get('auth.permit') || '';

        token && (headers['auth.token'] = token);
        permit && (headers['auth.permit'] = permit);
        sysid && (headers['auth.sysid'] = sysid);
        config.headers = headers;
        return config;
    },
    (error) => {
        message.error(error?.data?.error?.message ?? '');
        return Promise.reject(error);
    },
);

// Response 拦截器
service.interceptors.response.use(
    (response) => {
        if (response.status === 200) {
            return Promise.resolve(response);
        }
        return Promise.reject(response);
    },
    (error) => {
        const { response } = error;
        if (response) {
            errorHandle(response.status, response.data);

            return Promise.reject(response);
        }
        return Promise.reject();
    },
);

export default service;
