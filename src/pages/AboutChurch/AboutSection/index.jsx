import styles from './AboutSection.module.scss';
import image from '../../../assets/aboutImage1.svg'

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
                            <img src={image} />
                        </div>
                        <div className={styles.content}>
                            <h3>Purpose</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Lectus leo turpis et risus non diam fringilla habitasse accumsan. Neque montes amet quis id pharetra mauris est. Euismod amet in enim vitae. At tempus diam eu quis eros duis egestas. Ultricies morbi nec hendrerit imperdiet pulvinar in. Vel vitae faucibus nibh est. Ac vel faucibus sed leo turpis pellentesque orci. Adipiscing sit suscipit in odio aliquet. Rhoncus quis sagittis turpis fusce.</p>
                        </div>
                    </div>

                    <div className={styles.box}>
                        <div className={styles.content}>
                            <h3>Statment</h3>
                            <p>Lorem ipsum dolor sit amet consectetur. Lectus leo turpis et risus non diam fringilla habitasse accumsan. Neque montes amet quis id pharetra mauris est. Euismod amet in enim vitae. At tempus diam eu quis eros duis egestas. Ultricies morbi nec hendrerit imperdiet pulvinar in. Vel vitae faucibus nibh est. Ac vel faucibus sed leo turpis pellentesque orci. Adipiscing sit suscipit in odio aliquet. Rhoncus quis sagittis turpis fusce.</p>
                        </div>
                        <div className={styles.image}>
                            <img src={image} />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}