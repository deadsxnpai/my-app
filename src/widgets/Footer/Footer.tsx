import React from 'react';
import './Footer.less';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footerContent">
        <h3 className="footerTitle">Контактная информация</h3>
        <ul className="contactList">
          <li className="contactItem">
            <strong>Email:</strong> <a href="mailto:luchnikovds@tsutmb.ru">kluchnikovds@tsutmb.ru</a>
          </li>
          <li className="contactItem">
            <strong>Telegram:</strong> <a href="https://t.me/deadsxnpai" target="_blank" rel="noopener noreferrer">deadsxnpai</a>
          </li>
          <li className="contactItem">
            <strong>Phone:</strong> <a href="tel:+79005125355">+7(900)512-53-55</a>
          </li>
        </ul>
      </div>
    </footer>
  );
};

export default Footer;
