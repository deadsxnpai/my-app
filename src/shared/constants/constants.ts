/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import {
  MAIN_ROUTE,
} from './routes'
import { UserRoles } from './userRoles'

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
        path: '/tracks',
      },
      {
        value: 'Помощь в выборе',
        icon: 'projects-all',
        path: '/helper-bot',
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

