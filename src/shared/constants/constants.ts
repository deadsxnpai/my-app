/* eslint-disable no-unused-vars */
/* eslint-disable @typescript-eslint/no-unused-vars */
import { MAIN_ROUTE, PROFILE_ROUTE, RESULT_ROUTE } from './routes';
import { UserRoles } from './userRoles';

const defaultRoles = [UserRoles.ADMIN, UserRoles.STUDENT, UserRoles.TESTER];

export const navItems = [
	{
		value: 'Главная',
		role: defaultRoles,
		path: MAIN_ROUTE,
		icon: 'home',
	},
	{
		value: 'Профиль',
		role: [...defaultRoles],
		icon: 'contacts-book',
		path: PROFILE_ROUTE,
	},

	{
		value: 'Допольнительная информация',
		icon: 'projects-all',
		path: '/help',
		role: defaultRoles,
	},
	{
		value: 'Результат',
		role: [...defaultRoles],
		icon: 'personStar',
		path: RESULT_ROUTE,
	},
	{
		value: 'Дисциплины по выбору',
		role: defaultRoles,
		icon: 'book',
		path: '/tracks',
	},
	{
		value: 'Информация',
		role: [...defaultRoles],
		icon: 'news',
		path: '/about',
	},
];
