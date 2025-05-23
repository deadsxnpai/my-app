export const QUESTIONS: Record<string, string[]> = {
	Математика: [
		'Доказательство теоремы Пифагора основано на тригонометрии?', // Нет (1)
		'Матрицы всегда коммутативны при умножении?', // Нет (1)
	],
	Физика: [
		'Закон сохранения импульса действует только в закрытой системе?', // Да (3)
		'Скорость света зависит от направления движения наблюдателя?', // Нет (1)
	],
	Программирование: [
		'В JavaScript переменные, объявленные через var, имеют блочную область видимости?', // Нет (1)
		'React использует виртуальный DOM для оптимизации обновлений интерфейса?', // Да (3)
	],
	Аналитика: [
		'Корреляция всегда означает причинно-следственную связь?', // Нет (1)
		'Регрессионный анализ позволяет прогнозировать значения зависимой переменной?', // Да (3)
	],
	Коммуникация: [
		'Активное слушание включает повторение слов собеседника дословно?', // Нет (1)
		'Эффективные переговоры требуют понимания интересов обеих сторон?', // Да (3)
	],
	'Теория систем': [
		'Обратная связь в системе всегда усиливает исходный сигнал?', // Нет (1)
		'Устойчивость системы означает её способность возвращаться к равновесию после воздействия?', // Да (3)
	],
	Менеджмент: [
		'Методология Scrum подразумевает детальное планирование всего проекта заранее?', // Нет (1)
		'Диаграмма Ганта помогает визуализировать расписание проекта?', // Да (3)
	],
	Инженерия: [
		'Теплопередача возможна только через контактные поверхности?', // Нет (1)
		'Электрические схемы состоят из элементов и соединений между ними?', // Да (3)
	],
	Экономика: [
		'Инфляция всегда способствует экономическому росту?', // Нет (1)
		'Баланс спроса и предложения влияет на цену товара на рынке?', // Да (3)
	],
	Дизайн: [
		'Теория цвета включает понятия контраста и гармонии?', // Да (3)
		'Адаптивный дизайн не учитывает размеры экрана пользователя?', // Нет (1)
	],
	Маркетинг: [
		'SEO направлен на улучшение видимости сайта в поисковых системах?', // Да (3)
		'Аналитика не помогает оценить эффективность рекламных кампаний?', // Нет (1)
	],
	Психология: [
		'Теория Эриксона описывает стадии развития личности в течение всей жизни?', // Да (3)
		'Когнитивные искажения — это ошибки в физическом восприятии?', // Нет (1)
	],
	История: [
		'Вторая мировая война началась в 1939 году?', // Да (3)
		'Реформы Петра I были направлены на укрепление феодальной раздробленности?', // Нет (1)
	],
	Философия: [
		'Кант считал, что познание возможно только через опыт?', // Нет (1)
		'Утилитаризм оценивает действия по их последствиям для общего счастья?', // Да (3)
	],
	Лингвистика: [
		'Морфемный разбор позволяет выделить в слове корень, приставку и суффикс?', // Да (3)
		'Синтаксис изучает звуки языка?', // Нет (1)
	],
	'Машинное обучение': [
		'Обучение с учителем требует размеченных данных?', // Да (3)
		'Алгоритмы машинного обучения не требуют предварительной обработки данных?', // Нет (1)
	],
	Нейросети: [
		'Нейросети вдохновлены биологическим мозгом человека?', // Да (3)
		'Нейрон в искусственной нейросети выполняет ту же функцию, что и нейрон в мозге?', // Нет (1)
	],
	'Анализ данных': [
		'Нормализация данных помогает улучшить сходимость моделей?', // Да (3)
		'Выбросы в данных всегда следует удалять?', // Нет (1)
	],
};

export const CORRECT_ANSWERS: Record<string, number[]> = {
	'Машинное обучение': [3, 1],
	Нейросети: [3, 1],
	'Анализ данных': [3, 1],
	Математика: [1, 1],
	Физика: [3, 1],
	Программирование: [1, 3],
	Аналитика: [1, 3],
	Коммуникация: [1, 3],
	'Теория систем': [1, 3],
	Менеджмент: [1, 3],
	Инженерия: [1, 3],
	Экономика: [1, 3],
	Дизайн: [3, 1],
	Маркетинг: [3, 1],
	Психология: [3, 1],
	История: [3, 1],
	Философия: [1, 3],
	Лингвистика: [3, 1],
};
