import styles from './StudentsLife.module.css'
import globalStyles from  '../../index.module.css'
import studentsLife1 from '../../assets/img/studentsLife-1.jpg'
import studentsLife2 from '../../assets/img/studentsLife-2.jpg'
import studentsLife3 from '../../assets/img/studentsLife-3.jpg'
import studentsLife4 from '../../assets/img/studentsLife-4.jpg'
import studentsLife5 from '../../assets/img/studentsLife-5.jpg'
import studentsLife6 from '../../assets/img/studentsLife-6.jpg'



export function StudentsLife(){
    return(
        <main className={globalStyles.bgGrey}>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Жизнь студента</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent}`} >
            <h2 className={styles.secondaryTitle}>
                Добро пожаловать на страницу, посвященную 
                студенческой жизни! Здесь вы найдете всю 
                необходимую информацию о том, как проходит
                 жизнь студентов в нашем университете, а 
                 также советы и рекомендации для комфортного 
                 обучения и проживания.
                 </h2>

                 <div className={styles.mainContentBlock}>
                    <h3 className={styles.mainContentBlockTitle}>Комфорт проживания в общежитии</h3>
                    <p className={styles.mainContentBlockText}>Общежитие — это не только место для ночлега, но и настоящая студенческая община. Мы предлагаем:</p>
                    <ul className={styles.mainContentBlockItems}>
                        <li className={styles.mainContentBlockItem}>Уютные комнаты: Комнаты с современным ремонтом, мебелью и необходимыми удобствами.</li>
                        <li className={styles.mainContentBlockItem}>Общие зоны: Просторные кухни, комнаты для отдыха и учебы, где можно встретиться с друзьями и обсудить занятия.</li>
                        <li className={styles.mainContentBlockItem}>Безопасность: Круглосуточная охрана и видеонаблюдение обеспечивают безопасность студентов.</li>
                    </ul>
                    <div className={`${styles.mainContentImgs} ${globalStyles.flex}`}>

                    <img src={studentsLife1} alt="" />
                    <img src={studentsLife2} alt="" />
                    </div>
                 </div>

                 <div className={styles.mainContentBlock}>
                    <h3 className={styles.mainContentBlockTitle}>Спортивные мероприятия</h3>
                    <p className={styles.mainContentBlockText}>Спорт — важная часть студенческой жизни! У нас есть:</p>
                    <ul className={styles.mainContentBlockItems}>
                        <li className={styles.mainContentBlockItem}>Спортивные секции: Футбол, волейбол, баскетбол, плавание и многие другие виды спорта.</li>
                        <li className={styles.mainContentBlockItem}>Соревнования: Регулярные турниры и чемпионаты, где студенты могут проявить свои таланты.</li>
                        <li className={styles.mainContentBlockItem}>Фитнес и здоровье: Залы для тренировок, занятия йогой и пилатесом, а также мероприятия по здоровому образу жизни.</li>
                    </ul>
                    <div className={`${styles.mainContentImgs} ${globalStyles.flex}`}>
                    <img src={studentsLife3} alt="" />
                    <img src={studentsLife4} alt="" />
                    </div>
                 </div>
                 
                 <div className={styles.mainContentBlock}>
                    <h3 className={styles.mainContentBlockTitle}>Самоорганизация студентов</h3>
                    <p className={styles.mainContentBlockText}>Студенческая жизнь — это не только учеба, но и активное участие в жизни университета:</p>
                    <ul className={styles.mainContentBlockItems}>
                        <li className={styles.mainContentBlockItem}>Студенческие организации: Присоединяйтесь к клубам по интересам, участвуйте в культурных и образовательных мероприятиях.</li>
                        <li className={styles.mainContentBlockItem}>Инициативы и проекты: Участвуйте в разработке и реализации студенческих инициатив, которые могут улучшить жизнь в университете.</li>
                        <li className={styles.mainContentBlockItem}>Волонтерство: Присоединяйтесь к волонтерским проектам и помогайте сообществу.</li>
                    </ul>
                    <div className={`${styles.mainContentImgs} ${globalStyles.flex}`}>
                    <img src={studentsLife5} alt="" />
                    <img src={studentsLife6} alt="" />
                    </div>
                 </div>
            </div>
            </section>
        </main>
    )
}