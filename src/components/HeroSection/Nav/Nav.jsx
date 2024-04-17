import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// Images
import logo from '../../../assets/logo.webp';
import musicPlayerIcon from '../../../assets/music-player-icon.webp';
// SCSS
import styles from './Nav.module.scss';

export default function Nav() {
	const [ isOpen, setIsOpen ] = useState(false);
	const location = useLocation();
	const pathname = location.pathname;

	return (
		<nav className={styles.nav}>
			<div className={styles.container}>
				<div className={styles.navSection}>
					<Link to='/'><img src={logo} alt="" className={styles.logo} /></Link>
					<ul className={isOpen ? styles.mobileLinks : styles.links}>
					<button className={styles.closeMenu} onClick={() => setIsOpen(prevState => !prevState)}>{isOpen && <FaTimes />}</button>
						<li>
							<Link to="/staff" className={pathname === '/staff' ? styles.active : ''}>Staff</Link>
						</li>
						<li>
							<Link to="/ministries" className={pathname === '/ministries' ? styles.active : ''}>Ministries</Link>
						</li>
						<li>
							<Link to="/pastor-corner" className={pathname === '/pastor-corner' ? styles.active : ''}>Pastor’s Corner</Link>
						</li>
						<li>
							<Link to="/prayer" className={pathname === '/prayer' ? styles.active : ''}>Prayer</Link>
						</li>
						{isOpen && (
							<li>
								<Link to="/live-stream" className={pathname === '/prayer' ? styles.active : ''}>Live Stream</Link>
							</li>
						)}
					</ul>
				    <Link to='/live-stream' className={styles.btn}>
                        <img src={musicPlayerIcon} alt="" />
                        Live Stream
                    </Link>
					<button className={styles.hambMenu} onClick={() => setIsOpen(prevState => !prevState)}>{!isOpen && <GiHamburgerMenu />}</button>
				</div>
			</div>
		</nav>
	);
}