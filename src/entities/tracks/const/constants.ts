export interface Minor {
	name: string;
	relatedSkills: string[];
	threshold: number; // минимальный балл для рекомендации
}

export const MINORS: Minor[] = [
	{
		name: 'Математический майнор',
		relatedSkills: ['Математика', 'Физика', 'Аналитика'],
		threshold: 56,
	},
	{
		name: 'Программирование и инженерия',
		relatedSkills: ['Программирование', 'Инженерия'],
		threshold: 100,
	},
	{
		name: 'Гуманитарные науки',
		relatedSkills: ['История', 'Философия', 'Литература'],
		threshold: 56,
	},
	{
		name: 'Бизнес и экономика',
		relatedSkills: ['Экономика', 'Маркетинг', 'Менеджмент'],
		threshold: 100,
	},
	{
		name: 'Искусственный интеллект',
		relatedSkills: ['Машинное обучение', 'Нейросети', 'Анализ данных'],
		threshold: 56,
	},
	{
		name: 'Биомедицина',
		relatedSkills: ['Биология', 'Химия', 'Медицина'],
		threshold: 100,
	},
	{
		name: 'Кибербезопасность',
		relatedSkills: ['Криптография', 'Сетевая безопасность', 'Этичный хакинг'],
		threshold: 56,
	},
	{
		name: 'Дизайн и UX',
		relatedSkills: ['Графический дизайн', 'Веб-дизайн', 'Юзабилити'],
		threshold: 100,
	},
];
