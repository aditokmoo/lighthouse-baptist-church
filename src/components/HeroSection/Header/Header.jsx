// images
import headerBgImage from '../../../assets/header-bg.svg'
// SCSS
import styles from './Header.module.scss'
import Title from './Title/Title'

export default function Header({ title }) {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${headerBgImage})` }}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Title title={title} />
                </div>
            </div>
        </header>
    )
}