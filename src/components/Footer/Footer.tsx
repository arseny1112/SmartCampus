import styles from './Footer.module.css';
import globalStyles from '../../index.module.css';
import Insta from '../../assets/img/insta.svg';
import VK from '../../assets/img/VK.svg';
import TG from '../../assets/img/TG.svg';

export const Footer = () => {
  return (
    <footer className={`${styles.footer} ${globalStyles.flex}`}>
      <p className={styles.footerTitle}>SmartCampus</p>

      <div className={`${styles.footerSection} ${globalStyles.flex}`}>
        <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
          <p className={styles.footerNavItem}>Меню</p>
          <a className={styles.footerNavItem}>Главная</a>
          <a href="#" className={styles.footerNavItem}>Поиск</a>
          <a href="#" className={styles.footerNavItem}>Оплата</a>
          <a href="#" className={styles.footerNavItem}>Личный кабинет</a>
        </nav>

        <nav className={`${styles.footerNav} ${globalStyles.flex}`}>
          <p  className={styles.footerNavItem}>Компания</p>
          <a href="#" className={styles.footerNavItem}>О компании</a>
          <a href='#' className={styles.footerNavItem}>Контакты</a>
          <a href="#" className={styles.footerNavItem}>Работа</a>
          <a href="#" className={styles.footerNavItem}>Политика конфиденциальности</a>
          <a href="#" className={styles.footerNavItem}>Противодействие коррупции</a>
          <a href="#" className={styles.footerNavItem}>Карта сайта</a>
        </nav>

        <div className={styles.footerSocial}>
          <a href="#">
            <img src={Insta} alt="Instagram" />
          </a>
          <a href="#">
            <img src={VK} alt="VK" className={styles.vkIcon} />
          </a>
          <a href="#">
            <img src={TG} alt="Telegram" className={styles.TGIcon}/>
          </a>
        </div>
      </div>

      <div className={styles.footerSection}>
        <a href="#" className={styles.footerSectionLink}>Обратная связь</a>
        <a href="#" className={styles.footerSectionLink}>Партнерам</a>
      </div>
    </footer>
  );
};
