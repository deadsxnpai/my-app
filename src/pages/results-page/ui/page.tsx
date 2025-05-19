import React from 'react';
import { MainLayout } from '@/shared/layouts';
import cls from './styles.module.less';

import { VStack } from '@/shared/ui/Stack';

const ResultPage = () => {
	return (
		<MainLayout className={cls.main}>
			<VStack className={cls.container}>?</VStack>
		</MainLayout>
	);
};

export default ResultPage;
