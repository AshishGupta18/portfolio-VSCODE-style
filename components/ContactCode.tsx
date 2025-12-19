import styles from "@/styles/ContactCode.module.css";
import { Experience } from "@/data/experience";

const contactItems = [
  {
    social: "email",
    link: "ashishgupta189000@gmail.com",
    href: "mailto:ashishgupta189000@gmail.com",
  },
  {
    social: "github",
    link: "AshishGupta18",
    href: "http://github.com/AshishGupta18",
  },
  {
    social: "linkedin",
    link: "ashish-gupta189",
    href: "https://www.linkedin.com/in/ashish-gupta189/",
  },
];

const ContactCode = ({ data }: { data: Experience }) => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.{data.company}</span> &#123;
      </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;role:{" "}
          <span className={styles.className}>&quot;{data.role}&quot;</span>
          ;
        </p>
        <p className={styles.line}>
          &nbsp;&nbsp;&nbsp;date:{" "}
          <span className={styles.className}>&quot;{data.date}&quot;</span>
          ;
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
