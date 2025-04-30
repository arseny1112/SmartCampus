import { Link } from 'react-router-dom';
import './Burger.css'

interface Props {
    toggleMenu: () => void;
  }
  

export function Burger ({toggleMenu}: Props){
    
    const handleLinkClick = () => {
        toggleMenu(); 
      };

    return(
        <div className="burger">
        <button onClick={toggleMenu} className="burger__back"><svg width="50" height="15" viewBox="0 0 50 15" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M0.287815 6.79289C-0.102707 7.18342 -0.102707 7.81658 0.287815 8.20711L6.65178 14.5711C7.0423 14.9616 7.67546 14.9616 8.06599 14.5711C8.45652 14.1805 8.45652 13.5474 8.06599 13.1569L2.40914 7.5L8.06599 1.84315C8.45652 1.45262 8.45652 0.819457 8.06599 0.428932C7.67546 0.0384078 7.0423 0.0384078 6.65178 0.428932L0.287815 6.79289ZM50.0051 6.5L0.994923 6.5V8.5L50.0051 8.5V6.5Z" fill="black"/>
        </svg>
        </button>

            <nav className="burger__nav burger-nav">
                <Link onClick={handleLinkClick} to={'./studentsLife'} className="burger-nav__item">жизнь студента</Link>
                <Link onClick={handleLinkClick} to={'./Science'} className="burger-nav__item">наука и исследования</Link>
                <Link onClick={handleLinkClick} to={'./cooperation'} className="burger-nav__item">сотрудничество</Link>
                <Link onClick={handleLinkClick} to={'/library'} className="burger-nav__item">библиотека</Link>
                <Link onClick={handleLinkClick} to={'/news'} className="burger-nav__item">новости и мероприятия</Link>
                <Link onClick={handleLinkClick} to={'#'} className="burger-nav__item">социальные медиа</Link>
                
            </nav>
        </div>
    )
}