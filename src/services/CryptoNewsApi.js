import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

const cryptoNewsHeader =    {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': '81311a0ecdmshf8e50a9def571a3p1c8ac3jsn9584d1377f0e',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
  }

  const baseUrl = 'https://bing-news-search1.p.rapidapi.com';

  const createRequest = (url) => ({ url, headers:  cryptoNewsHeader });


  export const cryptoNewsApi = createApi({
    reducerPath: 'cryptoNewsApi',
     baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints : (bulider) => ({
             getCryptoNews: bulider.query({
                query: ({ newsCategory, count }) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`),
             })
    })
 }); 

 export const { useGetCryptoNewsQuery } =  cryptoNewsApi;