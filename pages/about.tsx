import styles from '@/styles/AboutPage.module.css';

const AboutPage = () => {
  return (
    <div className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Ashish Gupta</h1>
        <div className={styles.subtitle}>Software Developer</div>

        <div className={styles.aboutContent}>
          <section className={styles.section}>
            <p className={styles.paragraph}>
              Hey! I&apos;m a software developer from Bengaluru, India. I primarily
              work with JavaScript and the React ecosystem for web applications and flutter for mobile applications.
            </p>
            <p className={styles.paragraph}>
              I&apos;m focused on frontend development with flutter, but
              you&apos;ll also find me working with React, Node.js, MongoDB and Express
              while building the backend for my personal projects.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Experience</h2>
            <p className={styles.paragraph}>
              Currently at <span className={styles.highlight}>Smartshift technologies</span> as
              Software Developer - SAP ABAP, working with the team to develop and cater to SAP clients with their SAP ERP system. 
            </p>
            {/* <p className={styles.paragraph}>
              I&apos;ve been leading the development efforts for bringing
              collaborative video reviewing and editing to the platform. I also
              maintain our in-house component library, icon library and website.
            </p> */}
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Writing</h2>
            <p className={styles.paragraph}>
              I&apos;ve had the pleasure of writing for a amazing
              publication like{' '}
              <span className={styles.highlight}>Assured Unlock: A Mobile App for Dual-Layer Encryption</span>,{' '}
              {/* <span className={styles.highlight}>LogRocket Blog</span>,{' '}
              <span className={styles.highlight}>DEV.to</span> and more as a
              freelance technical author. */}
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Beyond Code</h2>
            <p className={styles.paragraph}>
              Aside from programming, I like to play all kinds of sports and watch movies.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
};

export async function getStaticProps() {
  return {
    props: { title: 'About' },
  };
}

export default AboutPage;
