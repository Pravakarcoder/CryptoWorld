import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';


const  cryptoApiHeaders = {
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com',
    'X-RapidAPI-Key': '81311a0ecdmshf8e50a9def571a3p1c8ac3jsn9584d1377f0e',  
}


 
const baseUrl = 'https://coinranking1.p.rapidapi.com';


const createRequest = (url) => ({ url, headers: cryptoApiHeaders });

export const cryptoApi = createApi({
   reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({ baseUrl }),
   endpoints : (bulider) => ({
            getCryptos: bulider.query({
             query: (count) => createRequest(`/coins?limit=${count}`),
            }),
            getCryptoDetails: bulider.query({
                query: (coinId) => createRequest(`/coin/${coinId}`),
            }),
            getCryptoHistory: bulider.query({
                query: ({coinId,  timePeriod}) => createRequest(`/coin/${coinId}/history/${timePeriod}`),

                //query: ({ coinId, timeperiod }) => createRequest(`coin/${coinId}/history?timeperiod=${timeperiod}`),
            }),
   })
}); 


export const {
    useGetCryptosQuery, useGetCryptoDetailsQuery, useGetCryptoHistoryQuery } = cryptoApi;
 





 