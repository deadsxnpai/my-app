import React from 'react';
import {
	Radar,
	RadarChart,
	PolarGrid,
	PolarAngleAxis,
	PolarRadiusAxis,
	ResponsiveContainer,
} from 'recharts';

type SkillData = {
	skill: string;
	value: number;
};

type StudentSkillsRadarProps = {
	data: SkillData[];
};

export const StudentSkillsRadar: React.FC<StudentSkillsRadarProps> = ({
	data,
}) => {
	return (
		<div style={{ width: '100%', height: 350 }}>
			<ResponsiveContainer>
				<RadarChart
					cx='50%'
					cy='50%'
					outerRadius='80%'
					data={data}>
					<PolarGrid />
					<PolarAngleAxis dataKey='skill' />
					<PolarRadiusAxis
						angle={30}
						domain={[0, 100]}
					/>
					<Radar
						name='Навыки'
						dataKey='value'
						stroke='#8884d8'
						fill='#8884d8'
						fillOpacity={0.6}
					/>
				</RadarChart>
			</ResponsiveContainer>
		</div>
	);
};
