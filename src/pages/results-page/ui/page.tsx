import React from 'react';
import { MainLayout } from '@/shared/layouts';
import cls from './styles.module.less';

import { HStack, VStack } from '@/shared/ui/Stack';
import { recommendMinors } from '@/features/recommened-minors';
import { useSelector } from 'react-redux';
import { Card, Text } from '@/shared';
import TrackCard from '@/entities/tracks/ui/TrackCard';
const ResultPage = () => {
	const skillsScores = useSelector((state: any) => state.profile.skillsScores);
	const recommendedMinors = recommendMinors(skillsScores);
	return (
		<MainLayout className={cls.main}>
			<Card padding='16'>
				<Text
					color='white'
					size='m'
					title={`Вам подходят следующие элективы:`}
				/>
			</Card>
			<HStack gap='4'>
				{recommendedMinors.length > 0 ? (
					// recommendedMinors.map((minor) => (
					//   <Card padding="16">
					//     <Text color="white" size="m" text={`${minor.name}`} />
					//   </Card>
					// ))
					recommendedMinors.map((minor) => (
						<Card padding='16'>
							<TrackCard
								key={minor.name}
								name={minor.name}
								type='Трек'
								role='student'
								is_visible={true}
								is_signed={false}
								is_active={true}
								id={minor.name}
								handleNavigate={() => {}}
								nameSpec={{
									namespec: '',
									department_name: '',
									nameprof: '',
									group: '',
									course: '',
									eform: '',
									elevel: '',
									recordbook: '',
								}}
							/>
						</Card>
					))
				) : (
					<div>Нет подходящих майноров</div>
				)}
			</HStack>
		</MainLayout>
	);
};

export default ResultPage;
