/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MAIN_ROUTE,
} from './routes'
import { UserRoles } from './userRoles'

export const URL = "lk-dev.tsutmb,ru"
export const dev = 'lk-dev.tsutmb.ru'


const defaultRoles = [
  UserRoles.ADMIN, 
  UserRoles.STUDENT, 
  UserRoles.TESTER
]

export const navItems = [
  {
    value: 'Главная',
    role: defaultRoles,
    path: MAIN_ROUTE,
    icon: 'home',
  },

  {
    value: 'Учебный процесс',
    role: defaultRoles,
    icon: 'notebook',
    items: [
      {
        value: 'Дисциплины по выбору',
        role: defaultRoles,
        icon: 'contacts-book',
        path: '/minors',
      },
      {
        value: 'Помощь с выбором',
        icon: 'projects-all',
        path: '/helper',
        role: defaultRoles,
      },
    ],
  },

  {
    value: 'Информация',
    role: [...defaultRoles],
    icon: 'news',
    path: '/about',
  },
  
]

