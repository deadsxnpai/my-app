import { HomePage } from '@/pages/HomePage';
import { UserRoles } from './userRoles';
import Login from '@/pages/Login/Login';
import Logout from '@/pages/Logout/Logout';
import { AboutPage } from '@/pages/AboutPage';
import { TracksPage } from '@/pages/TracksPage';
import { HelpPage } from '@/pages/help-page';
import { ResultPage } from '@/pages/results-page';
import ProfilePage from '@/pages/profile-page/ui/page';

export const MAIN_ROUTE = '/';
export const LOGIN_ROUTE = '/login';
export const LOGOUT = '/logout';
export const ABOUT_ROUTE = '/about';
export const TRACKS_ROUTE = '/tracks';
export const HELP_ROUTE = '/help';
export const RESULT_ROUTE = '/results';
export const PROFILE_ROUTE = '/profile';

export const AuthRoutes = [
	{
		path: MAIN_ROUTE,
		Component: HomePage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
	{
		path: ABOUT_ROUTE,
		Component: AboutPage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
	{
		path: TRACKS_ROUTE,
		Component: TracksPage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
	{
		path: HELP_ROUTE,
		Component: HelpPage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
	{
		path: RESULT_ROUTE,
		Component: ResultPage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
	{
		path: PROFILE_ROUTE,
		Component: ProfilePage,
		roles: [UserRoles.ADMIN, UserRoles.TESTER, UserRoles.STUDENT],
	},
];

export const publicRoutes = [
	{
		path: LOGIN_ROUTE,
		Component: Login,
	},
	{
		path: LOGOUT,
		Component: Logout,
	},
];
