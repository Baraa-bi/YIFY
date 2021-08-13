/* eslint-disable @typescript-eslint/no-unused-vars */
import React, {useEffect} from 'react';
import {request} from '../apis';

export const useApi = () => {
  useEffect(() => {
    const requestInterceptor = request.interceptors.request.use(
      async config => {
        /** 
         * 
         * You can add condition here for your app authorization
         * 
         * config.headers = {
         *  ...config.headers,
         *  Authorization: `Bearer {APP_USER_TOKEN_HERE}`,
         * };
         * 
         * 
         */
        return config;
      },
      function (error) {
        return Promise.reject(error);
      },
    );
    const responseInterceptor = request.interceptors.response.use(
      (response: any) => {
        if (__DEV__) console.log({data: response.data});
        if (response.data?.data) return Promise.resolve(response.data?.data);
        return Promise.resolve(response.data);
      },
      async error => {
        __DEV__ && console.log(error.response);
        return Promise.reject(error.response?.data?.data);
      },
    );
    return () => {
      request.interceptors?.request.eject(requestInterceptor);
      request.interceptors?.response.eject(responseInterceptor);
    };
  }, []);
  return null;
};
