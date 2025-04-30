import styles from './StudentsPage.module.css'
import globalStyles from  '../../index.module.css'


export function StudentsPage(){
    return(
        <main>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Студентам</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>АТЕСТАЦИЯ</p>
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ДОКУМЕНТЫ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>КРУЖКИ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>РЕСУРСЫ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>РАСПИСАНИЕ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ЗВОНКИ НА 2025</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            </div>
            </section>
        </main>
    )
}