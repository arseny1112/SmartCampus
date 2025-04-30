import styles from "./Header.module.css";
import globalStyles from  '../../index.module.css'
import { Burger } from "../Burger/Burger.tsx";
import LogoIcon from "../../assets/img/logo.jpg";
import { Link } from "react-router-dom";

export const Header = () => {
    const toggleMenu = () =>{
        document.querySelector('.burger')?.classList.toggle('show')
    }

    return (
        <header className={`${styles.header} ${globalStyles.flex}`}>
            <Link to={'/'}>
                <div className={globalStyles.flex}>
                    <img src={LogoIcon} alt="" />
                    <p className={styles.headerTitle}>SmartCampus</p>
                </div>
            </Link>
            <nav className={`${styles.headerNav} ${globalStyles.flex}`}>
                <Link to={'/learning'} className={styles.headerNavItem}>обучение</Link>
                <Link to={'/applicants'} className={styles.headerNavItem}>абитурентам</Link>
                <Link to={'/studentsPage'} className={styles.headerNavItem}>студентам</Link>
                <Link to={'/about-us'} className={styles.headerNavItem}>о нас</Link>
                <Link to={'#'} className={styles.headerNavItem}>контакты</Link>
            </nav>
            
            <button onClick={toggleMenu} className={styles.headerBurger}>
                <span className={styles.headerBurgerLine}></span>
                <span className={styles.headerBurgerLine}></span>
                <span className={styles.headerBurgerLine}></span>
            </button>
            <Burger toggleMenu={toggleMenu} />
        </header>
    );
};