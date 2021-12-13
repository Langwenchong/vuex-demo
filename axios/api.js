import axios from 'axios'
 
// 默认接口头部公有的ip地址，由于这里是本机假请求并使用mock.js拦截返还
// 因此使用本地回环地址127.0.0.1同时默认是80端口
axios.defaults.baseURL = 'http://127.0.0.1:80';
//该地址就叫URL（Uniform Resource Locator,统一资源定位器）
//Axios 是一个基于 promise 的 HTTP 库，可以用在浏览器和 node.js 中。
//API（Application Programming Interface，应用程序接口）

// 没有传递的参数
// 使用gei或者post都可以，我这里使用get请求
export const initData = () => {
    return axios.get('/initData');
}