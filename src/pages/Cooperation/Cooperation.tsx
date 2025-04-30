import globalStyles from  '../../index.module.css'
import styles from './Cooperation.module.css'



export function Cooperation(){
    return(
        <main>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Сотрудничество</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>Возможности сотрудничества</p>
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>Спонсорские
            программы</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>Помощь
            университету</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            </div>
            </section>
        </main>
    )
}