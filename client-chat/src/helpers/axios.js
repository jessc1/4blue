import axios from "axios";

const axiosService = axios.create({
    baseURL:"http://localhost:8000",
    headers:{
        "Content-Type": "application/json",
    },
    withCredentials: true,
});
axiosService.interceptors.request.use(async (config) => {
    const authCredentials = localStorage.getItem('basicAuthCredentials');
    if(authCredentials){
        config.headers.Authorization = `Basic ${authCredentials}`;
        
    }    
    return config;
});

axiosService.interceptors.response.use(
  (res) => Promise.resolve(res),
  (err) => Promise.reject(err)
);   
   

export function fetcher(url) {
  return axiosService.get(url).then((res) => res.data);
}

export default axiosService;
