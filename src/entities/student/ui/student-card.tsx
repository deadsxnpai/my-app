import React from 'react';
import { Card } from '@/shared';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { useGetCurrentUser } from '../model/api';

export const StudentInfoCard = () => {
	const { data, loading, error } = useGetCurrentUser();

	if (loading) return <Text text='Загрузка данных...' />;
	if (error || !data)
		return (
			<Text
				text='Ошибка загрузки данных'
				variant='error'
			/>
		);

	const { fullName, group, faculty, course } = data;

	return (
		<Card padding='16'>
			<VStack
				gap='8'
				align='start'>
				<Text
					size='l'
					text={`👤 ${fullName}`}
				/>
				<Text text={`🎓 Группа: ${group}`} />
				<Text text={`🏛 Факультет: ${faculty}`} />
				<Text text={`📘 Курс: ${course}`} />
			</VStack>
		</Card>
	);
};
