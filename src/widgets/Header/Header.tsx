import React from 'react';
import cls from './Header.module.less'; // Importing CSS module

// Header Component
const Header = () => {
  return (
    <header className={cls.header}>
      <div className={cls.logoContainer}>
        <div className={cls.logo} /> 
        <div className={cls.textContainer}>
          <h1 className={cls.title}>Система поддержки принятия решений</h1>
          <p className={cls.subtitle}>Выбор предметов для эффективного обучения</p>
        </div>
      </div>
    </header>
  );
};

export default Header;
