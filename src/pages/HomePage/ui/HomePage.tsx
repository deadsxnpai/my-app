import { MainLayout } from '@/shared/layouts';
import { HomeWidget } from '@/widgets/HomeWidget';
import React from 'react';
import cls from './HomePage.module.less';

const HomePage = () => {
	return (
		<MainLayout className={cls.main}>
			<HomeWidget />
		</MainLayout>
	);
};

export default HomePage;
