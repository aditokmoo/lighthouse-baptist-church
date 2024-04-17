// IMAGE
import image1 from '../../../assets/Frame-1.webp';
import image2 from '../../../assets/Frame-2.webp';
import image3 from '../../../assets/Frame-3.webp';
import image4 from '../../../assets/Frame-4.webp';
import image5 from '../../../assets/Frame-5.webp';
import image6 from '../../../assets/Frame-6.webp';
import image7 from '../../../assets/Frame-7.webp';
import image8 from '../../../assets/Frame-8.webp';
// SCSS
import styles from './About.module.scss';

export default function About() {
	return (
		<section className={styles.about}>
			<div className={styles.container}>
				<div className={styles.aboutSection}>
					<div className={styles.heading}>
						<h2>Who We Are?</h2>
						<p>
							Welcome to Bible Baptist Church, rooted in the 1611 King James Bible. For over 30 years,
							we've lived by God's Word and spread the gospel worldwide through missions.
						</p>
					</div>
					<div className={styles.images}>
                        <div className={styles.overlay}></div>
						<div className={styles.imagesLayer}>
							<img src={image7} className={styles.image} />
							<img src={image8} className={styles.image} />
						</div>
						<div className={styles.imagesLayer}>
							<img src={image1} className={styles.image} />
							<img src={image2} className={styles.image} />
						</div>
					
                        <div className={styles.imagesLayer}>
							<img src={image3} className={styles.image} />
							<img src={image4} className={styles.image} />
						</div>

                        <div className={styles.imagesLayer}>
							<img src={image5} className={styles.image} />
							<img src={image6} className={styles.image} />
						</div>
                    </div>
				</div>
			</div>
		</section>
	);
}
