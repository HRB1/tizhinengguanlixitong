function queryString(obj){
  if(!obj){
    return '';
  }
  return Object.keys(obj).map(item => {
    return `${item}=${obj[item]}`;
  }).join('&');
}


const request = (url, options = {}) => {
  let defaultOptions = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    },
    ...options
  };
  //   console.log(queryString(defaultOptions.body));
  if(defaultOptions.method === 'GET'){
    url = `${url}?${queryString(defaultOptions.body)}`; 
    if(defaultOptions.body){
      delete defaultOptions.body;
    }
  }else{
    defaultOptions.body = JSON.stringify(defaultOptions.body);
  }
  return fetch(url,{
    ...defaultOptions
  }).then(res => res.json()).then(data => data);
};

window.request = request;