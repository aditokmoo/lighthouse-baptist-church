// images
import { useLocation } from 'react-router'
import headerBgImage from '../../../../assets/header-bg.svg'
import Title from '../../../../components/HeroSection/Header/Title/Title'
// SCSS
import styles from './Header.module.scss'

export default function Header({ title }) {
    const location = useLocation();
    const pathname = location.pathname;
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${headerBgImage})` }}>
            <div className={styles.container}>
                <div className={styles.headerSection}>
                    <Title title={title} />
                    {pathname === '/' && <p>Lorem ipsum dolor sit amet consectetur. Quisque auctor facilisis tincidunt ac.</p>}
                </div>
            </div>
        </header>
    )
}