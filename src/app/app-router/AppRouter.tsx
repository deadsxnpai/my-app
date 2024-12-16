import React from 'react'

import { Routes, Route, } from 'react-router-dom'
import { ProtectedRoute } from '@/shared/ui/protected-route'
import { AuthRoutes } from '@/shared/constants/routes'



const AppRouter = () => {
  return (
    <Routes>
      { AuthRoutes.map(({ path, Component, roles, }) => <Route key={ path } path={ path } element={
        <ProtectedRoute key={ path } path={ path } element={ Component } roles={ roles } exact />
      } />
      ) }
    </Routes>
  )
}

export default AppRouter
