import React from 'react';
import { useNavigate } from 'react-router-dom'; // Import useNavigate hook from react-router-dom
import cls from './Header.module.less'; // Importing CSS module
import { Text } from '@/shared';
import { Button } from '@/shared/ui/button-new/button';

// Header Component
const Header = () => {
	const navigate = useNavigate(); // Initialize navigate function

	const handleLogout = () => {
		navigate('/logout'); // Navigate to the logout route
	};

	return (
		<header className={cls.header}>
			<div className={cls.logoContainer}>
				<div className={cls.logo} />
				<div className={cls.textContainer}>
					<h1 className={cls.title}>Система поддержки принятия решений</h1>
					<p className={cls.subtitle}>
						Выбор предметов для эффективного обучения
					</p>
				</div>
			</div>

			<Button
				className={cls.logoutButton}
				type='submit'
				onClick={() => handleLogout()}>
				Выход
			</Button>
		</header>
	);
};

export default Header;
