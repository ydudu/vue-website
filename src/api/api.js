import {get, post, deletes, put} from './axios'

let base_url = 'https://v1.itooi.cn/tencent'
//全部歌单
export const getAllListHot = ()=>{
    return get(`${base_url}/songList/hot?categoryId=10000000&sortId=5&pageSize=20&page=1`)
}
export const songList = (id)=>{
    return get(`${base_url}/songList?id=${id || 7073731347}`)
}
export const search = (id)=> {
    return get(`${base_url}/search?keyword=${id}&type=song&pageSize=100&page=0`)
}
export const wea = () =>{
    return get(`https://www.tianqiapi.com/api/?version=v1&appid=86986721&appsecret=eXm5G85Y`)
}
