import { Link } from 'react-router-dom';
// Images
import footerLogo from '../../../assets/footer-logo.webp';
// React icons
import { IoLocationSharp } from 'react-icons/io5';
import { FaPhoneAlt } from 'react-icons/fa';
import { MdEmail } from 'react-icons/md';
// SCSS
import styles from './Footer.module.scss';

export default function Footer() {
	return (
		<footer className={styles.footer}>
			<div className={styles.container}>
				<div className={styles.footerSection}>
					<div className={styles.col}>
						<h3>
							<img src={footerLogo} alt="Bible Baptist Church" className={styles.footerLogo} />Bible
							Baptist Church
						</h3>
						<p>
							Join Bible Baptist Church, rooted in the King James Bible for over 30 years, welcoming all
							to worship and grow in Christ.
						</p>
					</div>
					<div className={styles.col}>
						<h4>Pages</h4>
						<ul>
							<li>
								<Link to="/">Staff</Link>
							</li>
							<li>
								<Link to="/">Ministries</Link>
							</li>
							<li>
								<Link to="/">Pastor’s Corner</Link>
							</li>
							<li>
								<Link to="/">Prayer</Link>
							</li>
						</ul>
					</div>
					<div className={styles.col}>
						<h4>Contact</h4>
						<ul>
							<li>
								<IoLocationSharp /> 2733 Kirkdwood Dr. Burlington, North Carolina 27215
							</li>
							<li>
								<FaPhoneAlt /> 336-350-7336
							</li>
							<li>
								<FaPhoneAlt /> 336-213-9878
							</li>
							<li>
								<Link to="/">
									<MdEmail /> Send Email
								</Link>
							</li>
						</ul>
					</div>
					<div className={styles.col}>
						<h4>Location</h4>
						<iframe
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3225.1611201348333!2d-79.46606982383241!3d36.06517400878704!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x88532bfb95d79997%3A0x30150ef46a0fc6d7!2s2733%20Kirkwood%20Dr%2C%20Burlington%2C%20NC%2027215%2C%20USA!5e0!3m2!1sen!2sba!4v1709115728131!5m2!1sen!2sba"
							width="600"
							height="450"
							style={{ border: 0 }}
							className={styles.map}
							allowFullScreen=""
							loading="lazy"
							referrerPolicy="no-referrer-when-downgrade"
							title="Google Map"
						/>
					</div>
				</div>
			</div>
		</footer>
	);
}
