import axios from 'axios'
import qs from 'qs'
// const $ajax = axios.create({
//   timeout: 10000
// })
// // 添加请求拦截器
// $ajax.interceptors.request.use((config) => {
//   // 请求前
//   if (config.token) {
//     if (config.method == 'get') {
//       config.params.token = localStorage.getItem('token');
//     } else if (config.method == 'post') {
//       config.data.token = localStorage.getItem('token');
//     }
//   }
//   return config;
// }, (e) => {
//   // 处理请求错误
//   return Promise.reject(e);
// })

// // 添加响应拦截器
// $ajax.interceptors.response.use((response) => {
//   // 处理相应数据
//   return response;
// }, (e) => {
//   console.log(e);
//   // 处理相应错误
//   return Promise.reject(e);
// })

// $ajax.get = ({
//   url = '',
//   data = {},
//   success = () => {},
//   error = () => {},
//   token = true,
//   complete = () => {},
//   config = {}
// }) => {
//   $ajax({
//     url,
//     params: data,
//     token,
//     ...config
//   }).then((res) => {
//     complete();
//     // 请求成功
//     if (res.data) {
//       success(res.data);
//     } else {
//       success(res);
//     }
//   }).catch((e) => {
//     complete(e);
//     // 请求失败
//     error(e);
//   })
// }

// $ajax.post = ({
//   url = '',
//   data = {},
//   success = () => {},
//   error = () => {},
//   token = true,
//   complete = () => {},
//   config = {}
// }) => {
//   $ajax({
//     method: 'post',
//     url,
//     data,
//     token,
//     ...config
//   }).then((res) => {
//     complete();
//     if (res.data) {
//       success(res.data);
//     } else {
//       success(res);
//     }
//   }).catch((e) => {
//     complete(e);
//     error(e);
//   })
// }
//export default $ajax;










// function errorState(response) {  
//   store.commit('UPDATE_LOADING',false)  //隐藏loading  
//   console.log(response)  
//   // 如果http状态码正常，则直接返回数据  
//   if (response && (response.status === 200 || response.status === 304 || response.status === 400)) {  
//     return response  
//       // 如果不需要除了data之外的数据，可以直接 return response.data  
//   }else{  
//     Vue.prototype.$msg.alert.show({  
//           title: '提示',  
//            content: '网络异常'  
//     })  
//   }  

// }  

// function successState(res) {  
//   store.commit('UPDATE_LOADING',false) //隐藏loading  
//   //统一判断后端返回的错误码  
//   if(res.data.errCode == '000002'){  
//        Vue.prototype.$msg.alert.show({  
//             title: '提示',  
//             content: res.data.errDesc||'网络异常',  
//             onShow () {  
//             },  
//             onHide () {  
//               console.log('确定')  
//             }  
//        })  
//   }else if(res.data.errCode != '000002'&&res.data.errCode != '000000') {  
//       Vue.prototype.$msg.alert.show({  
//             title: '提示',  
//             content: res.data.errDesc||'网络异常',  
//             onShow () {  

//             },  
//             onHide () {  
//               console.log('确定')  
//             }  
//        })  
//   }  
// }

axios.interceptors.request.use(config => {
  console.log(config);
  if (config.token) {
    if (config.method == 'get') {
      config.params.token = localStorage.getItem('token');
    } else if (config.method == 'post') {
      config.data.token = localStorage.getItem('token');
    }
  }

  return config
}, error => {
  return Promise.reject(error)
})


axios.interceptors.response.use(response => {
  return response
}, error => {
  return Promise.resolve(error.response)
})

const httpServer = (opts, data) => {
  let Public = { //公共参数  
    'srAppid':"" ,
    'token': localStorage.getItem('token')?localStorage.getItem('token'):""
  }
  const baseURL = 'api'; //请求前缀

  let httpDefaultOpts = { //http默认配置 
    method: opts.method,
    baseURL,
    url: opts.url,
    timeout: 10000,
    params: Object.assign(Public, data),
    data:qs.stringify(Object.assign(Public, data)),
    headers: opts.method == 'get' ? {
      'X-Requested-With': 'XMLHttpRequest',
      "Accept": "application/json",
      "Content-Type": "application/json; charset=UTF-8"
    } : {
      'X-Requested-With': 'XMLHttpRequest',
      'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
    }
  }

  if (opts.method == 'get') {
    delete httpDefaultOpts.data
  } else {
    delete httpDefaultOpts.params
  }

  let promise = new Promise((resolve, reject) => {
    axios(httpDefaultOpts).then(res => {
      //successState(res) 
      resolve(res);
    }).catch(error => {
      //errorState(response) 
      reject(error)
    })
  })
  return promise
}

export default httpServer
