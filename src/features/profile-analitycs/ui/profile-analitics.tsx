import React, { Fragment, useState } from 'react';
import { PieChart, Pie, Cell, Tooltip } from 'recharts';
import { Card } from '@/shared';
import { Text } from '@/shared/ui/Text/Text';
import { HStack, VStack } from '@/shared/ui/Stack';
import { Button } from '@/shared/ui/button-new/button';
import Popup from '@/shared/ui/pop-up/pop-up';
import cls from './style.module.less';

const COLORS = ['#0088FE', '#FF8042'];

const chartData = [
	{ name: 'Заполнено', value: 80 },
	{ name: 'Не заполнено', value: 20 },
];

export const ProfileProgressChart = () => {
	const [isOpen, setIsOpen] = useState<boolean>(false);

	return (
		<Card padding='16'>
			<VStack align='center'>
				<Text
					size='m'
					text='Прогресс опроса для СППР'
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
					<Fragment>
						<VStack className={cls.popupBody}>?</VStack>
					</Fragment>
				</Popup>
			</VStack>
		</Card>
	);
};
