import { HomePage } from "@/pages/HomePage"
import { UserRoles } from "./userRoles"
import Login from "@/pages/Login/Login"
import Logout from "@/pages/Logout/Logout"
import { AboutPage } from "@/pages/AboutPage"
import { TracksPage } from "@/pages/TracksPage"

export const MAIN_ROUTE = '/'
export const LOGIN_ROUTE = '/login'
export const LOGOUT = '/logout'
export const ABOUT_ROUTE = '/about'
export const TRACKS_ROUTE = '/tracks'


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
    {
      path: ABOUT_ROUTE,
      Component: AboutPage,
      roles: [
        UserRoles.ADMIN,
        UserRoles.TESTER,
        UserRoles.STUDENT
      ],
    },
    {
      path: TRACKS_ROUTE,
      Component: TracksPage,
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

  