import globalStyles from  '../../index.module.css'
import styles from './Science.module.css'
import science1 from '../../assets/img/science-1.jpg'
import science2 from '../../assets/img/science-2.jpg'
import science3 from '../../assets/img/science-3.jpg'
import science4 from '../../assets/img/science-4.jpg'
import science5 from '../../assets/img/science-5.jpg'
import science6 from '../../assets/img/science-6.jpg'


export function Science(){
    return(
        <main className={globalStyles.bgGrey}>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Наука и исследование</h1>
            </section>

            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
                <img src={science1} alt="" />
                <p className={styles.mainContentText}>Технология OCR: что это такое и как улучшает образовательный процесс</p>
            </div>

            <div className={styles.mainContentBlock}>
                <img src={science2} alt="" />
                <p className={styles.mainContentText}>Интерактивные симуляторы для преподавателей: Новые методы обучения в действии</p>
            </div>

            <div className={styles.mainContentBlock}>
                <img src={science3} alt="" />
                <p className={styles.mainContentText}>Как цифровая грамотность помогает студентам быть успешными на современном рынке труда</p>
            </div>

            <div className={styles.mainContentBlock}>
                <img src={science4} alt="" />
                <p className={styles.mainContentText}>Как повысить продуктивность в учебе: приложения для студентов</p>
            </div>

            <div className={styles.mainContentBlock}>
                <img src={science5} alt="" />
                <p className={styles.mainContentText}>Социальные медиа в образовании: как улучшить учебный процесс с помощью ВКонтакте и <span className={styles.tg}>Telegram</span></p>
            </div>

            <div className={styles.mainContentBlock}>
                <img src={science6} alt="" />
                <p className={styles.mainContentText}>Как использовать приложения для заметок для успешной учебы</p>
            </div>

            </div>
        </main>
    )
}