import { HomePage } from "@/pages/HomePage"
import { UserRoles } from "./userRoles"
import Login from "@/pages/Login/Login"
import Logout from "@/pages/Logout/Logout"

export const MAIN_ROUTE = '/'
export const LOGIN_ROUTE = '/login'
export const LOGOUT = '/logout'


export const AuthRoutes = [
    {
      path: MAIN_ROUTE,
      Component: HomePage,
      roles: [
        UserRoles.ADMIN,
        UserRoles.TESTER,
        UserRoles.STUDENT
      ],
    },
  ]
  

export const publicRoutes = [
    {
      path: LOGIN_ROUTE,
      Component: Login,
    },
    {
      path: LOGOUT,
      Component: Logout,
    },
  ]

  