import {default as axios} from 'axios';

const protocol = 'http';
const domainName = '192.168.0.24';
const port = '9005';

export const Api = axios.create({
    baseURL: `${protocol}://${domainName}:${port}/api/general`,
});

export interface Response<T> {
    intResponse: number;
    strAnswer: string;
    Result: T;
}