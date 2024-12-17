/* eslint-disable no-console */
/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { useEffect, } from 'react'
import {
  useNavigate,
} from 'react-router-dom'
import { useDispatch, useSelector, } from 'react-redux'
import { Preloader, } from '@/shared'
import { client } from '@/shared/api/base/base'
import { EndPoints } from '@/shared/constants/endpoints'
import { setRole, chooseRole, clearME, setToken, setLogged } from '@/shared/redux/auth-slice/auth'
import { persistor } from '@/shared/redux/store'
import React from 'react'


const Logout2 = () => {
  // @ts-expect-error TS(2571): Object is of type 'unknown'.
  const isLogged = useSelector(state => state.auth.isLogged)
  const dispatch = useDispatch()
  const navigate = useNavigate()

  useEffect(() => {
    if (isLogged) {
      new Promise(resolve => {
        console.log('Logout !', isLogged)
        dispatch(setRole(null))
        dispatch(chooseRole(null))
        dispatch(clearME())
        dispatch(setToken(null))
        dispatch(setLogged(false))
        localStorage.removeItem("access_token")

      })

        .then(() => {
          console.log('TIME FOR REDIDECT')
          window.location.replace(EndPoints.endSession)
        })
    }
  }, [
    isLogged,
    dispatch,
    navigate,
  ])


  return <Preloader />
}


const Logout = () => {
  const dispatch = useDispatch()
  useEffect(() => {
    client.resetStore()
      .then(() => {
        new Promise(resolve => {
          dispatch(setRole(null))
          dispatch(chooseRole(null))
          dispatch(clearME())
          dispatch(setToken(null))
          dispatch(setLogged(false))
          dispatch(setLogged(false))
          localStorage.removeItem("access_token")
        })
      })
      .then(() => {
        persistor.purge()
          .then(() => {
            window.location.replace(EndPoints.endSession)
          })
      })
  }, [
    dispatch,
  ])
  return <Preloader />
}

export default Logout
