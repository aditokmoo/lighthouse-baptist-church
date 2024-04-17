// SCSS
import styles from './Table.module.scss';

export default function Table() {
	return (
		<>
			<div className={styles.missions}>
				<h2>Missions</h2>
				<table className={styles.table}>
					<thead>
						<tr>
							<td scope="col">Title</td>
							<td scope="col">Details</td>
							<td scope="col">Updated</td>
						</tr>
					</thead>
					<tbody>
						<tr>
							<td>
								General... <br />
								<span>Submited by: Nandram Ahirwar</span>
							</td>
							<td>That the Lord may teach us about necessary steps to be equipped for missionary service.</td>
							<td>6th February 2022</td>
						</tr>
					</tbody>
				</table>
			</div>
			<div className={styles.persecution}>
			<h2>Persecution</h2>
			<table className={styles.table}>
				<thead>
					<tr>
						<td scope="col">Title</td>
						<td scope="col">Details</td>
						<td scope="col">Updated</td>
					</tr>
				</thead>
				<tbody>
					<tr>
						<td>
						Distressed situation <br />
							<span>Submited by: Phillip</span>
						</td>
						<td>Please pray for me as I go through some difficult times.</td>
						<td>6th February 2022</td>
					</tr>
				</tbody>
			</table>
		</div>
		</>
	);
}
