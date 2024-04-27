import { Link } from 'react-router-dom';
// Images
import footerLogo from '../../../assets/logo.svg';
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
							<img src={footerLogo} alt="Bible Baptist Church" className={styles.footerLogo} />
						</h3>
						<p>
							We exist to be light to the lost. We are ONLY Independent Baptist Church in Haughton, LA. Loving on people and preaching the truth of the Gospel!
						</p>
					</div>
					<div className={styles.col}>
						<h4>Pages</h4>
						<ul>
							<li>
								<Link to="/">Home</Link>
							</li>
							<li>
								<Link to="/about">About Us</Link>
							</li>
							<li>
								<Link to="/live-stream">Live Stream</Link>
							</li>
							<li>
								<Link to="/contact">Contact Us</Link>
							</li>
						</ul>
					</div>
					<div className={styles.col}>
						<h4>Contact</h4>
						<ul>
							<li>
								<IoLocationSharp /> 7789 S Elm St, LA-157, Haughton, LA 71037
							</li>
							<li>
								<FaPhoneAlt /> 318-455-4791
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
							src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3364.3724649188334!2d-93.51864712395123!3d32.516197797268795!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x86313be703fded69%3A0xa5b6646edd4e6299!2s7789%20S%20Elm%20St%2C%20Haughton%2C%20LA%2071037%2C%20USA!5e0!3m2!1sen!2sba!4v1714257934492!5m2!1sen!2sba"
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
