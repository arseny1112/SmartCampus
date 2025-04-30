import globalStyles from  '../../index.module.css'
import styles from './Applicants.module.css'

export function Application(){
    return(
        <main className={globalStyles.bgGrey}>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Абитуриентам</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ПРИЕМ 2025</p>
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ФИЛИАЛЫ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ПЛАТНОЕ ОБУЧЕНИЕ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>БЮДЖЕТ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>КОНКУРСЫ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ОЛИМПИАДА</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            </div>
            </section>
        </main>
    )
}