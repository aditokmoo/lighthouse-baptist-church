// SCSS
import styles from './Table.module.scss';

export default function Table() {
	return (
		<table class={styles.table}>
			<thead>
				<tr>
					<td scope="col">Title</td>
					<td scope="col">Subject</td>
					<td scope="col">Delivery By</td>
					<td scope="col">Date</td>
				</tr>
			</thead>
			<tbody>
				<tr>
					<td>Sunday Morning 04-02-23</td>
					<td>-</td>
					<td>Bible Baptist Church - Burlington/Alamance, NC</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 05-07-2023 Rubbing Someone the Right Way</td>
					<td>-</td>
					<td>Bible Baptist Church - Burlington/Alamance, NC</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 05-28-2023 Guest Preacher Steve Shook</td>
					<td>-</td>
					<td>Bible Baptist Church - Burlington/Alamance, NC</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>04-11-2023 Bro. Mike Bradsher’s Funeral</td>
					<td>-</td>
					<td>Bible Baptist Church - Burlington/Alamance, NC</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 04-09-23</td>
					<td>-</td>
					<td>Bible Baptist Church - Burlington/Alamance, NC</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 04-16-23</td>
					<td>-</td>
					<td>Pastor Kevin Bunn</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Night 04-16-23</td>
					<td>-</td>
					<td>Pastor Kevin Bunn</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 06-4-2023 There is One Nation Under God</td>
					<td>-</td>
					<td>Pastor Kevin Bunn</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
				<tr>
					<td>Sunday Morning 04-02-23</td>
					<td>-</td>
					<td>Pastor Kevin Bunn</td>
					<td>Sunday, 4th June, 2023</td>
				</tr>
			</tbody>
		</table>
	);
}
