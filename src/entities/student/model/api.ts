import { useEffect, useState } from 'react';

export const mockUser = {
	fullName: 'Ключников Даниил Сергеевич',
	group: 'МВТ-232',
	faculty: 'Информатика и системы управления',
	course: '2',
};

export const useGetCurrentUser = () => {
	const [data, setData] = useState<typeof mockUser | null>(null);
	const [loading, setLoading] = useState(true);
	const [error, setError] = useState<string | null>(null);

	useEffect(() => {
		const timer = setTimeout(() => {
			try {
				setData(mockUser);
			} catch (e) {
				setError('Failed to load user');
			} finally {
				setLoading(false);
			}
		}, 500); // 500ms delay

		return () => clearTimeout(timer);
	}, []);

	return { data, loading, error };
};
