// React icons
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// Images
import timImage from '../../../assets/tim-image.png';
// SCSS
import styles from './Team.module.scss';

export default function Team() {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <div className={styles.teamSection}>
                    <div className={styles.card}>
                        <img src={timImage} alt="" />
                        <span className={styles.role}>Pastor</span>
                        <span className={styles.name}>Tim Godin</span>
                        <div className={styles.icons}>
                            <FaPhoneAlt />
                            <MdEmail />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}