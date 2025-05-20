import TracksList from '@/entities/tracks/ui/TrackList';
import { MainLayout } from '@/shared/layouts';
import React from 'react';
import { useSelector } from 'react-redux';
import cls from './TracksPage.module.less';
import useGetRole from '@/shared/api/useGetRole/useGetRole';

const TracksPage = () => {
	// const currentUserId = useSelector((state: any) => state.auth.me.data.guid);
	const currentUserId = '00000000-0000-0000-0000-000000000000';
	const nameSpec: any =
		'10.05.05 - Безопасность информационных технологий в правоохранительной сфере';
	const role = useGetRole();
	return (
		<MainLayout className={cls.main}>
			<TracksList
				nameSpec={nameSpec}
				role={role}
				currentUserId={currentUserId}
			/>
			,
		</MainLayout>
	);
};

export default TracksPage;
