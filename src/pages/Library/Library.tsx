import globalStyles from  '../../index.module.css'
import styles from './Library.module.css'


export function Library(){
    return(
        <main>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Библиотека</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent} ${globalStyles.flex}`} >

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>ЛИТЕРАТУРА</p>
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>РЕСУРСЫ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            <div className={styles.mainContentBlock}>
            <p className={styles.mainContentBlockText}>СТАТЬИ</p>         
            <a href="#" className={styles.mainContentBlockLink}>на страницу</a>
            </div>

            </div>
            </section>
        </main>
    )

}
