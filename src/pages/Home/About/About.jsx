// IMAGE
import { aboutImages } from '../../../utils/constants';
// SCSS
import styles from './About.module.scss';

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.aboutSection}>
					<div className={styles.heading}>
						<h2>Our Church Gallery</h2>
						<p>
							Lorem ipsum dolor sit amet consecturetur. Quisque auctor fascilias tincuide ac.
						</p>
					</div>
					<div className={styles.workGallery}>
						<div className={styles.grid}>
							{aboutImages.map(({ image }, index) => (
								<div key={index} className={styles.image}>
									<img src={image} alt="" className={styles.div} />
								</div>

							))}
						</div>
					</div>
				</div>
			</div>
		</section>
	);
}
