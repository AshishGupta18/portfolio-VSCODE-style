import ContactCode from "@/components/ContactCode";

import styles from "@/styles/CareerPage.module.css";
import { experience } from "@/data/experience";

const CareerPage = () => {
  return (
    <div className={styles.layout}>
      <h1 className={styles.pageTitle}>Career Ladder</h1>
      <p className={styles.pageSubtitle}>
        Feel free to reach out to me through any of the social platforms below.
        I&apos;m always open to new opportunities and connections.
      </p>
      {experience.map((experience, index) => (
        <div className={styles.container} key={index}>
          <div className={styles.contactContainer}>
            <ContactCode data={experience} />
          </div>
        </div>
      ))}
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: "Experience" },
  };
}

export default CareerPage;
