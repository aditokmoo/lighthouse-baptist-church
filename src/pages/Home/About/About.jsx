// IMAGE
import { Link } from 'react-router-dom';
import image1 from '../../../assets/Frame-1.webp';
import image2 from '../../../assets/Frame-2.webp';
import image3 from '../../../assets/Frame-3.webp';
import image4 from '../../../assets/Frame-4.webp';
import image5 from '../../../assets/Frame-5.webp';
import image6 from '../../../assets/Frame-6.webp';
import image7 from '../../../assets/Frame-7.webp';
import image8 from '../../../assets/Frame-8.webp';
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
