// React icons
import { FaPhoneAlt } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
// Images
import mikeImage from '../../../assets/mike-image.webp';
import billImage from '../../../assets/bill-image.webp';
import johnImage from '../../../assets/john-image.webp';
import kevinImage from '../../../assets/kevin-image.webp';
// SCSS
import styles from './Team.module.scss';

export default function Team() {
    return (
        <section className={styles.team}>
            <div className={styles.container}>
                <div className={styles.teamSection}>
                    <div className={styles.card}>
                        <img src={mikeImage} alt="" />
                        <span className={styles.role}>DEACON</span>
                        <span className={styles.name}>Mike Bradsher</span>
                        <div className={styles.icons}>
                            <FaPhoneAlt />
                            <MdEmail />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={billImage} alt="" />
                        <span className={styles.role}>DEACON</span>
                        <span className={styles.name}>Bill Montgomery</span>
                        <div className={styles.icons}>
                            <FaPhoneAlt />
                            <MdEmail />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={johnImage} alt="" />
                        <span className={styles.role}>DEACON</span>
                        <span className={styles.name}>John Bundren</span>
                        <div className={styles.icons}>
                            <FaPhoneAlt />
                            <MdEmail />
                        </div>
                    </div>
                    <div className={styles.card}>
                        <img src={kevinImage} alt="" />
                        <span className={styles.role}>PASTOR</span>
                        <span className={styles.name}>Kevin Bunn</span>
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