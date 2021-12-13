// 通过axios-mock-adapter生成代理api地址，可以模拟后台的数据返还
import axios from "axios";
import MockAdapter from "axios-mock-adapter";

import {
  initData
} from './data/data.js'

export default {
  // 第一个拦截返还函数
  init() {
    // 新建一个拦截对象
    let mock = new MockAdapter(axios);
    mock.onGet('/initData').reply(
      // 无传进来的参数，因此是无参箭头函数
      () => {
        //   如果时有参数的请求，那么可以在这里进行解析
        // 返还一个Promise对象
        return new Promise(resolve => {
          //   resolve表示成功返还
          //   是一个数组，其中第一个200是返还数据的头部信息状态code
          resolve([200, {
            //   这里供开发者使用
            code: 200,
            // 重点是要将初始的数据拿过来
            initData,
          }]);
        })
      }
    )
  }
}
