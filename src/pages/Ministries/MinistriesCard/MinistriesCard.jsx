// Images
import radioMinistryIcon from '../../../assets/radioMinistryIcon.webp'
import sundaySchoolIcon from '../../../assets/sundaySchoolIcon.webp'
import ladiesMinistryIcon from '../../../assets/ladiesMinistryIcon.webp'
// SCSS
import styles from './MinistriesCard.module.scss';

export default function MinistriesCard() {
    return (
        <section className={styles.ministries}>
            <div className={styles.container}>
                <div className={styles.ministriesSection}>
                    <div className={styles.card}>
                        <img src={radioMinistryIcon} alt="" className={styles.imageIcon} />
                        <span className={styles.role}>Radio Ministry</span>
                    </div>
                    <div className={styles.card}>
                        <img src={sundaySchoolIcon} alt="" className={styles.imageIcon} />
                        <span className={styles.role}>Sunday School</span>
                    </div>
                    <div className={styles.card}>
                        <img src={ladiesMinistryIcon} alt="" className={styles.imageIcon} />
                        <span className={styles.role}>Ladies Ministry</span>
                    </div>
                </div>
            </div>
        </section>
    )
}