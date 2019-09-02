import axios from 'axios'
import router from '../router'

const service = axios.create({
    timeout: 30000
})
//添加request拦截器
service.interceptors.request.use(config => {
    return config
}, error => {
    Promise.reject(error)
})

// 添加respone拦截器
service.interceptors.response.use(                  
    response => {
      let res={}; 
      res.status=response.status
      res.data=response.data;
      return res;
    },
    error => {
      if(error.response && error.response.status == 404){
       router.push('/blank.vue')
      }
     
          
      return Promise.reject(error.response)
    }
  )
//封装get
  export function get(url, params = {}) {
      params.t = new Date().getTime()  //get方法加一个时间参数,解决ie下可能缓存问题.
      return service({
          url: url,
          method: 'get',
          headers: {

          },
          params
      })
      
  }
  //封装post

  export function post(url, data = {}) {
      return service({
          url: url,
          method: 'post',
          headers: {
              'Content-Type':'application/json;charset=UTF-8'
          },
          data: JSON.stringify(data)
      })
  }
  export function put(url,data = {}) {
      return service({
          url: url,
          method: 'put',
          headers: {
              'Content-Type': 'application/json;charset=UTF-8'
          },
          data: JSON.stringify(data)
      })
  }
  export function deletes(url) {
      return service({
          url: url,
          method: 'delete',
          headers: {}
      })
  }
  export {
      service
  }