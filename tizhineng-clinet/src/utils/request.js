import Cookie from "js-cookie"
const headers = new Headers({
    'Accept': 'application/json',
    'Content-Type': 'application/json',
    'authorization': Cookie.get('authorization'),
    'api-request':"yes"
});
let farams = (data) => {
    return Object.entries(data).map(item => `${item[0]}=${typeof item[1] === 'object' ? JSON.stringify(item[1]):item[1]}`).join("&")
}

export default {
    get(url,data={}){
        return fetch(url+"?"+farams(data),{
            method:"GET",
            headers
        }).then(res=>{
            if(res.ok){
                return res.json()
            }else{
                return Promise.reject(res)
            }
        })
    },
    post(url,data){
        return fetch(url, {
            method: "POST",
            mode: 'cors',
            credentials: 'include',
            headers,
            body:JSON.stringify(data)
        }).then(res => {
            if (res.ok) {
                return res.json();
            } else {
                return Promise.reject(res)
            }
        })
    }
}