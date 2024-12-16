import React from 'react'
import { useGetRoleTest } from '@/shared/api'
import { useCallback, } from 'react'
import { Navigate, } from 'react-router-dom'
import useGetRole from '@/shared/api/useGetRole/useGetRole'


const ProtectedRoute = ({
  element: Component,
  roles,
}: any) => {
  const role = useGetRole()
  const isRoute = useCallback(() => {
    return roles.includes(role)
  }, [
    role,
    roles,
  ])
  const is_route = isRoute()
  return (
    is_route ? <Component /> : <Navigate to="/" replace />
  )
}

export default ProtectedRoute
