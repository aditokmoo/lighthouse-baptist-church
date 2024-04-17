// SCSS
import styles from './TableCards.module.scss';

export default function TableCards() {
    return (
        <div className={styles.tableCards}>
            <h2>Missions</h2>
            <div className={styles.card}>
                <span>General...</span>
                <span>Submited by: Nandram Ahirwar</span>
                <span>Details</span>
                <span>That the Lord may teach us about necessary steps to be equipped for missionary service.</span>
                <span>Updated</span>
                <span>6th February 2022</span>
            </div>

            <h2>Persecution</h2>
            <div className={styles.card}>
                <span>Distressed situation</span>
                <span>Submited by: Phillip</span>
                <span>Details</span>
                <span>Please pray for me as I go through some difficult times.</span>
                <span>Updated</span>
                <span>6th February 2022</span>
            </div>
        </div>
    )
}