import styles from '@/styles/ContactCode.module.css';

const contactItems = [
  
  {
    social: 'email',
    link: 'ashishgupta189000@gmail.com',
    href: 'mailto:ashishgupta189000@gmail.com',
  },
  {
    social: 'github',
    link: 'AshishGupta18',
    href: 'http://github.com/AshishGupta18',
  },
  {
    social: 'linkedin',
    link: 'ashish-gupta189',
    href: 'https://www.linkedin.com/in/ashish-gupta189/',
  },
  
];

const ContactCode = () => {
  return (
    <div className={styles.code}>
      <p className={styles.line}>
        <span className={styles.className}>.socials</span> &#123;
      </p>
      {contactItems.map((item, index) => (
        <p className={styles.line} key={index}>
          &nbsp;&nbsp;&nbsp;{item.social}:{' '}
          <a href={item.href} target="_blank" rel="noopener">
            {item.link}
          </a>
          ;
        </p>
      ))}
      <p className={styles.line}>&#125;</p>
    </div>
  );
};

export default ContactCode;
