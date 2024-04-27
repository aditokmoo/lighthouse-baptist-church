import styles from './Verse.module.scss'

export const Verse = () => {
  return (
    <section className={styles.section}>
        <div className={styles.container}>
            <div className={styles.verseSection}>
                <h2>Bible Verse</h2>
                <p>“Matthew 5:14-16 KJB
Ye are the light of the world. A city that is set on an hill cannot be hid. Neither do men light a candle, and put it under a bushel, but on a candlestick; and it giveth light unto all that are in the house. Let your light so shine before men, that they may see your good works, and glorify your Father which is in heaven.</p>
            </div>
        </div>
    </section>
  )
}