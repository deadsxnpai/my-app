import React, { useEffect, } from 'react'
import { Preloader, } from '@/shared'
import { EndPoints, } from '@/shared/constants/endpoints'

const Login = () => {
  useEffect(() => {
    window.location.replace(EndPoints.auth)
  }, [])
  return <Preloader />
}

export default Login
