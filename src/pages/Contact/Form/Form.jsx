import styles from "./Form.module.scss";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import emailjs from "@emailjs/browser";
import { MdOutlineErrorOutline } from "react-icons/md";

const SERVICE_ID = "service_ou0r9a4";
const TEMPLATE_ID = "template_gcx5iwi";
const USER_ID = "actHWvtGVmY6u3NRG";

export default function Form() {
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();

    const sendEmail = async (data) => {
        try {
            await emailjs.send(SERVICE_ID, TEMPLATE_ID, data, USER_ID);
            toast.success("Email sent successfully!");
            console.log(data);
            reset();
        } catch (error) {
            console.log(error);
            toast.error("Something went wrong");
        }
    };

    return (
        <section className={styles.form}>
            <div className={styles.container}>
                <div className={styles.formSection}>
                    <form onSubmit={handleSubmit((data) => sendEmail(data))}>
                        <div className={styles.formContainer}>
                            <div className={styles.inputContainer}>
                                <input
                                    type="text"
                                    placeholder="Name *"
                                    id="name"
                                    className={styles.input}
                                    {...register("name")}
                                    required
                                />
                                {errors.name && (
                                    <p className={styles.errorMsg}>
                                        Name is required. <MdOutlineErrorOutline />
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputContainer}>
                                <input
                                    type="email"
                                    placeholder="Email *"
                                    id="email"
                                    className={styles.input}
                                    {...register("email")}
                                    required
                                />
                                {errors.email && (
                                    <p className={styles.errorMsg}>
                                        Email is required. <MdOutlineErrorOutline />
                                    </p>
                                )}
                            </div>
                            <div className={styles.inputContainer}>
                                <textarea
                                    placeholder="Your message *"
                                    id="message"
                                    className={styles.textarea}
                                    {...register("message")}
                                    required
                                />
                                {errors.message && (
                                    <p className={styles.errorMsg}>
                                        Message is required. <MdOutlineErrorOutline />
                                    </p>
                                )}
                            </div>
                        </div>
                        <button>Submit</button>
                    </form>
                </div>
            </div>
        </section>
    );
}
