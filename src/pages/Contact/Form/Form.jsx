import styles from './Form.module.scss';

export default function Form() {
    return (
        <section className={styles.form}>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <form>
                        <div className={styles.formContainer}>
                            <input type="text" placeholder='Name *' id='name' className={styles.input}  required/>
                            <input type="email" placeholder='Email *' id='email' className={styles.input}  required/>
                            <textarea placeholder='Your message *' id='message' className={styles.textarea} required />
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    )
}