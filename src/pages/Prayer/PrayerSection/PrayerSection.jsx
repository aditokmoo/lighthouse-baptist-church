// SCSS
import styles from './PrayerSection.module.scss';
import Table from './Table/Table';
import TableCards from './TableCard/TableCards';

export default function PrayerSection() {
	return (
		<section className={styles.prayerSection}>
			<div className={styles.container}>
				<Table />
				<TableCards />
			</div>
		</section>
	);
}
