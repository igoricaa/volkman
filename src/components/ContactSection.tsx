import styles from './ContactSection.module.scss';
import Button from './common/Button/Button';
import CopyButton from './common/CopyButton/CopyButton';
import Image from 'next/image';

const ContactSection = ({
  className,
  hasTitle = false,
}: {
  className?: string;
  hasTitle?: boolean;
}) => {
  return (
    <div
      className={[
        styles.contactSection,
        className ? styles[className] : '',
      ].join(' ')}
    >
      {hasTitle && <h4 className={styles.sectiontitle}>Contact</h4>}
      <div className={styles.innerWrapper}>
        <h2>
          <span>
            <Image
              src='/home/marija-volkman-rounded.png'
              alt='Marija Volkman'
              fill
            />
          </span>
          Let's work
        </h2>
        <h2>together</h2>
        <Button href='/contact' classes={['roundedButton', 'centered']}>
          <p>Get in touch</p>
        </Button>
      </div>
      <div className={styles.contactInfoWrapper}>
        <CopyButton
          text='volkmanm@archicraft.co'
          classes={['contactInfoButton']}
        />
        <Button href='tel:0018184581762' classes={['contactInfoButton']}>
          <p>+1 818 458 1762</p>
        </Button>
      </div>
    </div>
  );
};

export default ContactSection;
