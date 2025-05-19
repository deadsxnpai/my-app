import React from 'react';
import { Card } from '@/shared';
import { VStack, HStack } from '@/shared/ui/Stack';
import { Text } from '@/shared/ui/Text/Text';
import { useGetCurrentUser } from '../api/api';

import useRedirect from '@/shared/api/useRedirect/useRedirect';
import { Button } from '@/shared/ui/button-new/button';
import { RESULT_ROUTE } from '@/shared/constants/routes';
import { data } from '@/entities/student-skills/api/api';

type SkillData = { skill: string; value: number };

type StudentInfoCardProps = {
	show: boolean;
	finalData: SkillData[];
};

export const StudentInfoCard: React.FC<StudentInfoCardProps> = ({
	show,
	finalData,
}) => {
	const { data: studentData, loading, error } = useGetCurrentUser();
	const redirect = useRedirect();

	if (loading) return <Text text='Загрузка данных...' />;
	if (error || !studentData)
		return (
			<Text
				text='Ошибка загрузки данных'
				variant='error'
			/>
		);

	const { fullName, group, faculty, course } = studentData;

	return (
		<Card padding='16'>
			<VStack
				gap='8'
				align='start'>
				<Text
					color='white'
					size='l'
					text={`👤 ${fullName}`}
				/>
				<Text
					color='white'
					text={`🎓 Группа: ${group}`}
				/>
				<Text
					color='white'
					text={`🏛 Факультет: ${faculty}`}
				/>
				<Text
					color='white'
					text={`📘 Курс: ${course}`}
				/>
			</VStack>
			<Card> </Card>
			{show && (
				<VStack
					gap='8'
					align='start'>
					<Text
						color='white'
						size='l'
						text='🛠 Ваши навыки:'
					/>
					<VStack
						gap='4'
						align='start'>
						{finalData.map((s) => (
							<Text
								color='white'
								key={s.skill}
								text={`• ${s.skill}: ${s.value} балл(ов)`}
							/>
						))}
					</VStack>
					<Button
						style={{ marginTop: 20 }}
						onClick={() => {
							redirect(RESULT_ROUTE);
						}}>
						Посмотреть рекомендованные дисциплины
					</Button>
				</VStack>
			)}
		</Card>
	);
};
