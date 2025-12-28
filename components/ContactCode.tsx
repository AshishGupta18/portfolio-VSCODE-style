import styles from "@/styles/ContactCode.module.css";
import { Experience } from "@/data/experience";

const ContactCode = ({ data }: { data: Experience }) => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.{data.company}</span> &#123;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;role:{" "}
        <span className={styles.className}>&quot;{data.role}&quot;</span>;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;date:{" "}
        <span className={styles.className}>&quot;{data.date}&quot;</span>;
      </p>
      <p className={styles.line}>
        &nbsp;&nbsp;&nbsp;description:{" "}
        <span className={styles.className}>&quot;{data.description}&quot;</span>
        ;
      </p>
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
