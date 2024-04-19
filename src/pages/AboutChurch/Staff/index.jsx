import Team from "../../Staff/Team/Team";
import styles from './Staff.module.scss'

export default function Staff() {
    return (
        <section className={styles.section}>
            <div className={styles.container}>
                <div className={styles.staffSection}>
                    <h2>Church Staff</h2>
                    <Team />
                </div>
            </div>
        </section>
    )
}