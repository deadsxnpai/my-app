import {
	clearME,
	logoff,
	setRole,
	setToken,
	login,
	updateME,
	setPosition,
} from '@/shared/redux/auth-slice/auth';
import { gql, useQuery } from '@apollo/client';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

const ME = gql(`
  query getME {
    me
  }
`);

const USER = gql(`
  query UserInfo($user_id: String!) {
    userInfo(user_id: $user_id)
  }
`);

const useME = () => {
	// const meRes = useQuery(ME);
	// console.log(meRes);
	const meRes = {
		error: null,
		data: {
			me: {
				groups: ['tester', 'some-other-group'],
				positions: ['tester-position'],
				data: {
					guid: '00000000-0000-0000-0000-000000000000',
				},
			},
		},
		loading: false,
	};

	const dispatch = useDispatch();
	useEffect(() => {
		const { error, data } = meRes;

		function getUserType(arr: any) {
			if (arr.includes('tester')) {
				return 'tester';
			} else if (arr.includes('teacher')) {
				return 'worker';
			} else if (arr.includes('uonid-moder')) {
				return 'uonid-moder';
			} else if (arr.includes('teacherGPH')) {
				return 'teacherGPH';
			} else if (arr.includes('dm-moder')) {
				return 'dm-moder';
			} else if (arr.includes('ukp-moder')) {
				return 'ukp-moder';
			} else if (arr.includes('tpd-moder')) {
				return 'tpd-moder';
			} else if (arr.includes('urvo-moder')) {
				return 'urvo-moder';
			} else if (arr.includes('osrv-moder')) {
				return 'osrv-moder';
			} else if (arr.includes('urtos-moder')) {
				return 'urtos-moder';
			} else if (arr.includes('student-rakus')) {
				return 'student-rakus';
			} else if (arr.includes('student')) {
				return 'student';
			} else if (arr.includes('prosmotr-moe-obuchenie')) {
				return 'prosmotr-moe-obuchenie';
			} else if (arr.includes('employee')) {
				return 'employee';
			}
			return 'selfsignup';
		}

		if (error) {
			dispatch(clearME());
			dispatch(logoff());
			dispatch(setRole(null));
			// @ts-expect-error TS(2554): Expected 1 arguments, but got 0.
			dispatch(setToken());
			return;
		} else if (data) {
			const userType = getUserType(data.me.groups);
			dispatch(login());
			dispatch(setRole(userType));
			dispatch(updateME(data.me));
			dispatch(setPosition(data.me.positions));
		}
	}, [dispatch, meRes]);
	return meRes;
};

const useUserInfo = (user_id: any) => {
	return useQuery(USER, { variables: { user_id } });
};

export { useME, useUserInfo };
