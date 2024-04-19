import styles from './Verse.module.scss'

export const Verse = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.verseSection}>
                <h2>Bible Verse</h2>
                <p>“Lorem ipsum dolor sit amet consectetur. Quisque auctor facilisis tincidunt ac.” — Lorem Ipsum</p>
            </div>
        </div>
    </section>
  )
}