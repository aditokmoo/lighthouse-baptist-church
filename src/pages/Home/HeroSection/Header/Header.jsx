// images
import headerBgImage from '../../../../assets/header-bg.svg'
import Title from '../../../../components/HeroSection/Header/Title/Title'
// SCSS
import styles from './Header.module.scss'

export default function Header({ title }) {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${headerBgImage})` }}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Title title={title} />
                    <p>Lorem ipsum dolor sit amet consectetur. Quisque auctor facilisis tincidunt ac.</p>
                </div>
            </div>
        </header>
    )
}