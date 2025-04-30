import globalStyles from  '../../index.module.css'
import styles from './AboutUs.module.css'
import pointSvg from '../../assets/img/point.svg'
import phoneSvg from '../../assets/img/phone.svg'


export function AboutUs(){
    return(
        <main>
              <section className={`${styles.main} ${globalStyles.flex}`}>
            <h1 className={styles.mainTitle}>О нас</h1>
            </section>

            <section>
            <div className={`${globalStyles.container} ${styles.mainContent}`} >
                <h2 className={styles.mainContentTitle}>SmartCampus</h2>
                <p className={styles.mainContentText}>
                Добро пожаловать в <span className={styles.smartFont}> SmartCampus </span>— место, где инновации 
                и образование встречаются, чтобы создавать будущее. Мы 
                гордимся тем, что являемся ведущим университетом, 
                предлагающим передовые программы и уникальные 
                возможности для студентов и исследователей.
                </p>
                <h2 className={styles.mainContentTitle}>Наша история </h2>
                <p className={styles.mainContentText}>Добро пожаловать в 
                <span className={styles.smartFont}> SmartCampus</span> — место, где инновации и образование 
                    встречаются, чтобы создавать будущее. Мы гордимся 
                    тем, что являемся ведущим университетом, предлагающим 
                    передовые программы и уникальные возможности 
                    для студентов и исследователей.
                </p>
                <h2 className={styles.mainContentTitle}>Наша команда</h2>
                <p className={styles.mainContentText}>В 
                <span className={styles.smartFont}> SmartCampuse</span> работает команда высококвалифицированных 
                     преподавателей и исследователей, преданных 
                     своему делу. Наши специалисты постоянно 
                     развиваются, чтобы предлагать студентам самое 
                     современное образование и поддержку.</p>
                <p className={styles.mainContentText}>Принципы работы</p>

                <ol className={styles.mainContentItems}>
                    <li>Инновации: Мы внедряем новейшие технологии в образовательный процесс.</li>
                    <li>Качество: Гарантируем высокий уровень обучения и научных исследований.</li>
                    <li>Инклюзивность: Создаем доступную и поддерживающую среду для всех студентов.</li>
                    <li>Сотрудничество: Поддерживаем партнерские отношения с ведущими университетами и компаниями по всему миру.</li>
                </ol>
                    
            </div>
            </section>
            <section className={`${globalStyles.container} ${globalStyles.flex} ${styles.Contacts}`} >
                <h3 className={styles.ContactsTitle}>Контакты</h3>
                <div className={`${styles.ContactsBlock} ${globalStyles.flex}`} >

                    
                    <div className={`${globalStyles.flex} ${styles.ContactsItem}`}>
                <img src={pointSvg} alt="" />
                <p className={styles.ContactsText}>г. Москва ул. Московская 77 </p>
                    </div>
                    
                <p className={styles.ContactsText}>smartcampus@mail.com</p>

                <div className={globalStyles.flex}>
                <img src={phoneSvg} alt="" className={styles.ContactsPhone}/>
                <p className={styles.ContactsText}>+7 999 546 25 66</p>
                </div>
                </div>
                <form action="" className={`${styles.ContactsForm} ${globalStyles.flex}`}>
                    <p className={styles.ContactsText}>Остались вопросы?</p>
                    <input type="email" placeholder='Почта' className={styles.ContactsInput}/>
                    <input type="text" placeholder='Сообщение' className={styles.ContactsInput}/>
                </form>
               </section>

        </main>
    )
}