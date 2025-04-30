import styles from "./MainPage.module.css";
import globalStyles from  '../../index.module.css'
import MainImg2 from "../../assets/img/main2.jpg";
import MainImg3 from "../../assets/img/main3.jpg";

export function MainPage() {
    return (
        <main>
            <section className={styles.main}></section>
            <section className={`${styles.mainContent} ${globalStyles.flex}`}>
                    <h2 className={styles.mainContentTitle}>
                        <b>SmartCampus</b> - место, где рождаются знания и воплощаются мечты!
                    </h2>
                    <div className={`${styles.mainContentBlock} ${styles.firstBlock} ${globalStyles.flex}`}>
                        <img src={MainImg2} alt="" />
                        <div className={styles.mainContentWrapper}>
                            <p className={`${styles.mainContentText} ${styles.textRight}`}>
                                Мы рады приветствовать вас <span className={styles.paintedTextGreen}>SmartCampus</span> – центре инноваций,
                                исследований и личностного роста. Наша миссия – вдохновлять, обучать и готовить будущих лидеров, которые изменят мир к
                                лучшему. Здесь вы найдете все возможности для раскрытия своего потенциала. Присоединяйтесь к нам и начните свой
                                путь к успеху!
                            </p>
                            <button className={`${styles.btnGreen}`}>о нас</button>
                        </div>
                    </div>
                <div className={`${globalStyles.container} ${styles.mainContentBlock} ${styles.secondBlock} ${globalStyles.flex}`}>
                    <p className={`${styles.mainContentText} ${styles.textLeft}`}>
                        <span className={styles.paintedTextAquamarine}>SmartCampus</span> – это передовой центр исследований, 
                        где мы постоянно стремимся к новым открытиям и прорывам.
                        Наша миссия – развивать передовые знания и технологические 
                        решения, которые будут иметь реальное влияние на 
                        общество. Мы предлагаем студентам уникальные возможности 
                        участвовать в исследовательских проектах под руководством 
                        ведущих ученых и профессионалов. Приглашаем вас 
                        присоединиться к нам и стать частью нашего
                        прогрессивного сообщества.
                    </p>
                    <div className={`${styles.secondBlockWrapper} ${globalStyles.flex}`}>
                        <img src={MainImg3} alt="" />
                        <button className={`${styles.btnAquamarine}`}>наука и исследования</button>
                    </div>
                    </div>
            </section>
        </main>
    );
}