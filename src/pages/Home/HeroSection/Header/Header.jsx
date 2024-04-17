// images
import churchImage from '../../../../assets/header-church.webp'
// SCSS
import styles from './Header.module.scss'

export default function Header() {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <h1 className={styles.titleText}>BIBLE BAPTIST CHURCH</h1>
                    <div className={styles.headerNotes}>
                        <div className={styles.items}>
                            <span>Sunday Worship Service 11:00 AM</span>
                            <span>Sunday Night Service: 6:00 PM</span>
                        </div>
                        <div className={styles.items}>
                            <span>Wednesday Night Service: 7:00 PM</span>
                            <span>Sunday School: 10:00 AM</span>
                        </div>
                    </div>
                    <img src={churchImage} alt="" className={styles.churchImage} />
                </div>
            </div>
        </header>
    )
}