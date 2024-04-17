// SCSS
import styles from './Calendar.module.scss';

export default function Calendar() {
	return (
		<section className={styles.calendar}>
			<div className={styles.container}>
				<div className={styles.calendarSection}>
					<div className={styles.heading}>
						<h2>Church Calendar</h2>
						<p>
							Check our church calendar – it's the roadmap to good times. Days of worship, hangouts, and
							doing good shine in Carolina blue. Don't miss out!
						</p>
					</div>
					<iframe
						src="https://calendar.google.com/calendar/embed?height=600&wkst=2&ctz=UTC&bgcolor=%23ffffff&showTabs=0&showPrint=0&showDate=0&showTitle=0&showTz=0&src=YWRpdG9rbW9vMThAZ21haWwuY29t&src=YWRkcmVzc2Jvb2sjY29udGFjdHNAZ3JvdXAudi5jYWxlbmRhci5nb29nbGUuY29t&src=ZW4uYmEjaG9saWRheUBncm91cC52LmNhbGVuZGFyLmdvb2dsZS5jb20&color=%23039BE5&color=%2333B679&color=%230B8043"
						width="800"
						height="600"
						frameBorder="0"
                        className={styles.calendar}
						scrolling="no"
						title="Google Calendar"
					/>
				</div>
			</div>
		</section>
	);
}
