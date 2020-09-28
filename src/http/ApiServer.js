//引入进度条相关的环境
import NProgress from "nprogress"
import "nprogress/nprogress.css"


import axios from "axios";
const axiosins = axios.create({
    baseURL:"/api",
    timeout:15000
})
// 添加请求拦截器
axiosins.interceptors.request.use(function (config) {
    //开启进度条
    NProgress.start();
    return config;
});

// 添加响应拦截器
axiosins.interceptors.response.use(function (response) {
    //关闭进度条
    NProgress.done();
    return response.data;
}, function (error) {
    //关闭进度条
    NProgress.done();
    return Promise.reject(error);
});


export default axiosins;