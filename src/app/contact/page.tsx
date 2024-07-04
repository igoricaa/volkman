import ContactForm from '@/components/contactForm/ContactForm';
import styles from './page.module.scss';

const ContactPage = () => {
  return (
    <main className='main'>
      <div className={styles.pageHeader}>
        <h1>Let's start a project together</h1>
        <ContactForm />
      </div>
    </main>
  );
};

export default ContactPage;
