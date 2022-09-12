import axios, {AxiosResponse} from 'axios';

const configOMB = {
    baseURL: 'http://www.omdbapi.com',
};
const key = '5fc61bba';
const axiosInstance = axios.create(configOMB);


const API = {
    searchFilmsByTitle: (title: string) => {
        return axiosInstance.get(`?t=${title}&apikey=${key}`)
            .then((value) => {
                return value
            })
            .catch(() => {
                console.log('err')
            })
    },
    searchFilmsByType: (title: string, type: string) => {
    }
};

export default API;
