import Table from './Table/Table';
// SCSS
import styles from './LiveStreamService.module.scss';
import TableCards from './TableCards/TableCards';

export default function LiveStreamService() {
	return (
		<section className={styles.LiveStreamService}>
			<div className={styles.container}>
				<div className={styles.liveSession}>
					<div className={styles.content}>
						<h2>Live session</h2>
						<p>Lorem ipsum dolor sit amet consectetur. Lectus leo turpis et risus non diam fringilla habitasse accumsan. Neque montes amet quis id pharetra mauris est. Euismod amet in enim vitae. At tempus diam eu quis eros duis egestas. Ultricies morbi nec hendrerit imperdiet pulvinar in.</p>
					</div>
					<div className={styles.liveBox}>
						<h3>
							Session starts in <br /> 7 days, 8 hours and 24 minutes
						</h3>
					</div>
				</div>
				<div className={styles.recordings}>
					<h2>Recordings</h2>
					<div className={styles.desktopVersion}>
						<Table />
						<TableCards />
					</div>
				</div>
			</div>
		</section>
	);
}
