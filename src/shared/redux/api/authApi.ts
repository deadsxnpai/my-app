/* eslint-disable @typescript-eslint/no-unused-vars */
/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
import { createApi, fetchBaseQuery, } from '@reduxjs/toolkit/query/react'
import { DOMAIN as URL, } from '@/shared/constants/endpoints'

export const authApi = createApi({
  reducerPath: 'auth/sso',
  baseQuery: fetchBaseQuery({
    baseUrl: `https://${ URL }/api`,
    credentials: 'include',
    prepareHeaders: (headers, { getState, }) => {
      // const { me } = getState().auth;
      // headers.set('account', me.email);
      if (localStorage.getItem('access_token')) {
        headers.set('x-access-token', localStorage.getItem('access_token'))
      }
      console.log('Setting headers', Array.from(headers))
      return headers
    },
    headers: localStorage.getItem('access_token') ? {
      'x-access-token': localStorage.getItem('access_token'),
      // Cookie: `sessionId=${localStorage.getItem('sessionId')}`,
    } : {},

  }),
  endpoints: build => ({
    userInfo: build.query({
      query: () => ({
        url: '/userinfo',
        credentials: 'include',
        headers: localStorage.getItem('access_token') ? {
          'x-access-token': localStorage.getItem('access_token'),
          // Cookie: `sessionId=${localStorage.getItem('sessionId')}`,
        } : {},
      }),
    }),
    logout: build.query({
      query: () => ({ url: '/endsession?redirect=http://localhost:3000', }),
      transformResponse: (response => {
        console.log('REPONSE', response)
        return response
      }),
    }),
  }),
})

export const { useLazyUserInfoQuery, useUserInfoQuery, useLogoutQuery, } = authApi
