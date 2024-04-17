// images
import churchImage from '../../../assets/header-church.webp'
// SCSS
import styles from './Header.module.scss'
import Title from './Title/Title'

export default function Header({ title }) {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Title title={title} />
                    <img src={churchImage} alt="" className={styles.churchImage} />
                </div>
            </div>
        </header>
    )
}