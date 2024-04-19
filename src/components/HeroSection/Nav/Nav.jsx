import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { GiHamburgerMenu } from "react-icons/gi";
import { FaTimes } from "react-icons/fa";
// Images
import logo from '../../../assets/logo.svg';
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
							<Link to="/" className={pathname === '/' ? styles.active : ''}>Home</Link>
						</li>
						<li>
							<Link to="/about" className={pathname === '/about' ? styles.active : ''}>About</Link>
						</li>
						<li>
							<Link to="/contact" className={pathname === '/contact' ? styles.active : ''}>Contact</Link>
						</li>
						{isOpen && (
							<li>
								<Link to="/live-stream" className={pathname === '/live-stream' ? styles.active : ''}>Live Stream</Link>
							</li>
						)}
					</ul>
				    <Link to='/live-stream' className={styles.btn}>
                        Live Stream
                    </Link>
					<button className={styles.hambMenu} onClick={() => setIsOpen(prevState => !prevState)}>{!isOpen && <GiHamburgerMenu />}</button>
				</div>
			</div>
		</nav>
	);
}