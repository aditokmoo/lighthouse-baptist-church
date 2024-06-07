import styles from './AboutSection.module.scss';
import image from '../../../assets/aboutImage1.svg'
import image4 from '../../../assets/image-4.jpg'
import image5 from '../../../assets/image-5.jpg'

export default function AboutSection() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.aboutSection}>
                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h3>Our Mission</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Lectus leo turpis et risus non diam fringilla habitasse accumsan. Neque montes amet quis id pharetra mauris est. Euismod amet in enim vitae. At tempus diam eu quis eros duis egestas. Ultricies morbi nec hendrerit imperdiet pulvinar in. Vel vitae faucibus nibh est. Ac vel faucibus sed leo turpis pellentesque orci. Adipiscing sit suscipit in odio aliquet. Rhoncus quis sagittis turpis fusce.</p>
                        </div>
                        <div className={styles.image}>
                            <img src={image} />
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.image}>
                            <img src={image4} />
                        </div>
                        <div className={styles.content}>
                            <h3>Purpose</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Lectus leo turpis et risus non diam fringilla habitasse accumsan. Neque montes amet quis id pharetra mauris est. Euismod amet in enim vitae. At tempus diam eu quis eros duis egestas. Ultricies morbi nec hendrerit imperdiet pulvinar in. Vel vitae faucibus nibh est. Ac vel faucibus sed leo turpis pellentesque orci. Adipiscing sit suscipit in odio aliquet. Rhoncus quis sagittis turpis fusce.</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h3>Beliefs</h3>
                            <p>We believe that the King James Bible is the sole inerrant Word of God for the English-speaking people and accept any churches that promote/teach from a translation in another language which is based on the Textus Receptus/Masoretic Text. (2 Timothy 3:15-17; Psalms 12:6-7)</p>
                        </div>
                        <div className={styles.image}>
                            <img src={image5} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}