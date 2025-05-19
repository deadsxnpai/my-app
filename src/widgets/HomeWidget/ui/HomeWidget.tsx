import React from 'react';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import cls from './HomeWidget.module.less';
import second from '@/shared/assets/images/navigation_contanct.svg';
import {
	IconBook,
	IconFileAnalytics,
	IconSchool,
	IconUserCircle,
} from '@tabler/icons';
import useGetRole from '@/shared/api/useGetRole/useGetRole';
import { NavigationCard } from '@/shared/ui/NavigationCard';
import { UserRoles } from '@/shared/constants/userRoles';

const HomeWidget = () => {
	const role = useGetRole();
	const navigationCards = [
		{
			name: 'Ваш профиль',
			desc: 'Информация о вас и прогресс заполнения',
			path: '/profile',
			img: second,
			role: [UserRoles.STUDENT, UserRoles.TESTER, UserRoles.ADMIN],
			icon: (
				<IconUserCircle
					size={80}
					style={{ marginLeft: '7%' }}
					color='#000000'
					strokeWidth='1'
				/>
			),
		},
		{
			name: 'Дисциплины по выбору',
			desc: 'Перейти в раздел',
			path: '/tracks',
			img: second,
			role: [UserRoles.STUDENT, UserRoles.TESTER, UserRoles.ADMIN],
			icon: (
				<IconBook
					size={80}
					style={{ marginLeft: '7%' }}
					color='#000000'
					strokeWidth='1'
				/>
			),
		},

		{
			name: 'Рекомендации и выбранные дисциплины',
			desc: 'Перейти в раздел',
			path: '/results',
			img: second,
			role: [UserRoles.STUDENT, UserRoles.TESTER, UserRoles.ADMIN],
			icon: (
				<IconSchool
					style={{ marginLeft: '7%' }}
					size={80}
					color='#000000'
					strokeWidth='1'
				/>
			),
		},
	];
	return (
		<>
			<VStack>
				<div className={cls.Navigation}>
					<VStack
						justify='between'
						gap='24'
						align='center'>
						{navigationCards.map((i) =>
							i.role.includes(role) ? (
								<NavigationCard
									props={i}
									key={i.name}
								/>
							) : null
						)}
					</VStack>
				</div>
			</VStack>
		</>
	);
};

export default HomeWidget;
