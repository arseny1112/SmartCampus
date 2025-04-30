import globalStyles from  '../../index.module.css'
import styles from './News.module.css'

export function News(){
    return(
        <main>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Новости и мероприятия</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>НОВОСТИ</p>
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>МЕРОПРИЯТИЯ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>АРХИВ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            </div>
            </section>
        </main>
    )
}