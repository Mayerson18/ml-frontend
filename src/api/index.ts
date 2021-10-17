import axios from "axios";
import config from "../config";

export const fetchItems = (search: string) => {
    const promise = axios({
        url: `${config.API_URL}/items?q=${search}`, //your url
        method: 'GET'
    });
    return promise
};

export const fetchItemById = (id: string) => {
    const promise = axios({
        url: `${config.API_URL}/items/${id}`, //your url
        method: 'GET'
    });
    return promise
};