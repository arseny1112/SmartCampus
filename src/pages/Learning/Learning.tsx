import styles from './Learning.module.css'
import globalStyles from  '../../index.module.css'


export function Learning(){
    return(
        <main  className={globalStyles.bgGrey}>
            <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>Обучение</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} `} >

            <div className={`${styles.mainButtons} ${globalStyles.flex}`}>
                <a href="#" className={styles.mainBtn}>Бакалавриат, специалитет</a>
                <a href="#" className={styles.mainBtn}>Магистратура</a>
                <a href="#" className={styles.mainBtn}>Аспирантура</a>
            </div>  

                <div className={`${styles.seondaryButtons} ${globalStyles.flex}`}>
                    <a href='#' className={styles.secondaryBtn}>Программа обучения</a>
                    <a href='#' className={styles.secondaryBtn}>Специальности</a>
                    <a href='#' className={styles.secondaryBtn}>Факультеты</a>
                    <a href='#' className={styles.secondaryBtn}>Цены на обучение</a>
                    <a href='#' className={styles.secondaryBtn}>Условия поступления</a>
                </div>
            </div>
            </section>

        </main>
    )
}