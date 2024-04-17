import { HiPlus } from "react-icons/hi2";
import { FiMinus } from "react-icons/fi";
import { useState } from "react";
import styles from './FAQ.module.scss';

export default function FAQ() {
    const [activeItems, setActiveItems] = useState([]);

    const toggleItem = (index) => {
        setActiveItems(prevActiveItems => {
            if (prevActiveItems.includes(index)) {
                return prevActiveItems.filter(itemIndex => itemIndex !== index);
            } else {
                return [...prevActiveItems, index];
            }
        });
    };

    return (
        <section className={styles.faq}>
            <div className={styles.container}>
                <div className={styles.faqSection}>
                    <div className={styles.heading}>
                        <h2>Frequently Asked Questions</h2>
                        <p>Most people have similar questions so we decided to answer them afterwards for anyone who’s looking fo similar answers.</p>
                    </div>
                    <div className={styles.questions}>
                        <div className={styles.questionItem}>
                            <div className={styles.question} onClick={() => toggleItem(0)}>
                                <p>What will you find when you visit our church?</p>
                                <span>{activeItems.includes(0) ? <FiMinus /> : <HiPlus />}</span>
                            </div>
                            <div className={activeItems.includes(0) ? `${styles.content} ${styles.active}` : styles.content}>
                                <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Saepe et ab itaque voluptatem. Similique natus suscipit omnis blanditiis officiis. Voluptas nemo aliquid repudiandae qui quod vero, cupiditate velit natus hic ullam et porro, debitis libero voluptatem cum amet non! Rem!</p>
                            </div>
                        </div>
                        <div className={styles.questionItem}>
                            <div className={styles.question} onClick={() => toggleItem(1)}>
                                <p>Where to find sermons?</p>
                                <span>{activeItems.includes(1) ? <FiMinus /> : <HiPlus />}</span>
                            </div>
                            <div className={activeItems.includes(1) ? `${styles.content} ${styles.active}` : styles.content}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Expedita nemo cumque molestiae officia iste culpa, asperiores quod fugiat rerum eveniet.</p>
                            </div>
                        </div>
                        <div className={styles.questionItem}>
                            <div className={styles.question} onClick={() => toggleItem(2)}>
                                <p>How to access live stream service?</p>
                                <span>{activeItems.includes(2) ? <FiMinus /> : <HiPlus />}</span>
                            </div>
                            <div className={activeItems.includes(2) ? `${styles.content} ${styles.active}` : styles.content}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis rerum, hic, numquam maxime incidunt nesciunt, ea veniam illum vel culpa qui inventore ipsa maiores iure blanditiis consequatur ex fugiat porro.</p>
                            </div>
                        </div>
                        <div className={styles.questionItem}>
                            <div className={styles.question} onClick={() => toggleItem(3)}>
                                <p>Where can I see church activities and calendar?</p>
                                <span>{activeItems.includes(3) ? <FiMinus /> : <HiPlus />}</span>
                            </div>
                            <div className={activeItems.includes(3) ? `${styles.content} ${styles.active}` : styles.content}>
                                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet minus eos commodi neque hic sed.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
