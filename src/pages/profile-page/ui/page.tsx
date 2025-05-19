import React from 'react';
import { MainLayout } from '@/shared/layouts';
import cls from './styles.module.less';

import { VStack } from '@/shared/ui/Stack';
import { StudentInfoCard } from '@/entities/student/ui/student-card';
import { ProfileForm } from '@/features/fill-profile-form';
import { ProfileProgressChart } from '@/features/profile-analitycs';

const ProfilePage = () => {
	return (
		<MainLayout className={cls.main}>
			<VStack className={cls.container}>
				<ProfileProgressChart />
				<StudentInfoCard />
				<ProfileForm />
			</VStack>
		</MainLayout>
	);
};

export default ProfilePage;
