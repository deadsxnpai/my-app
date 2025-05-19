import React, { useState, useEffect, Fragment } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card } from '@/shared';
import { Text } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/button-new/button';
import Popup from '@/shared/ui/pop-up/pop-up';
import cls from './style.module.less';

import { SurveyForm } from '@/features/survey-from';

const COLORS = ['#0088FE', '#FF8042'];

type ProfileProgressChartProps = {
	chartData: { name: string; value: number }[];
	onCompletePercent?: (percent: number) => void;
	setFinalData: any;
};

export const ProfileProgressChart: React.FC<ProfileProgressChartProps> = ({
	chartData,
	onCompletePercent,
	setFinalData,
}) => {
	const [isOpen, setIsOpen] = useState(false);

	return (
		<Card padding='16'>
			<VStack
				align='center'
				gap='16'>
				<Text
					size='m'
					text='Прогресс опроса для СППР'
					color='white'
				/>
				<PieChart
					width={250}
					height={200}>
					<Pie
						data={chartData}
						cx={120}
						cy={100}
						innerRadius={40}
						outerRadius={80}
						fill='#8884d8'
						dataKey='value'
						label>
						{chartData.map((entry, index) => (
							<Cell
								key={`cell-${index}`}
								fill={COLORS[index % COLORS.length]}
							/>
						))}
					</Pie>
					<Tooltip />
				</PieChart>
				<Button onClick={() => setIsOpen(true)}>
					Пройти опрос выбора дисциплин
				</Button>

				<Popup
					className={cls.popUp}
					isCloseButton={false}
					isOpen={isOpen}
					setIsOpen={setIsOpen}>
					<VStack className={cls.popupBody}>
						<SurveyForm
							setIsOpen={setIsOpen}
							onProgressChange={onCompletePercent}
							onSubmit={(result) => {
								setFinalData(result);
							}}
						/>
					</VStack>
				</Popup>
			</VStack>
		</Card>
	);
};
