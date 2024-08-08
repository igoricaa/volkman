'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { useState } from 'react';
import Button from '../common/Button/Button';
import CheckIcon from '../CheckIcon';

type FormData = {
  access_key: string;
  subject: string;
  from_name: string;
  name: string;
  last_name: string;
  email: string;
  message: string;
};

const ContactForm = () => {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<FormData>();
  const [isSuccess, setIsSuccess] = useState(false);
  const [message, setMessage] = useState('');

  const onSubmit = async (formData: FormData) => {
    await fetch('https://api.web3forms.com/submit', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
      },
      body: JSON.stringify(formData, null, 2),
    })
      .then(async (response) => {
        const result = await response.json();
        if (result.success) {
          setIsSuccess(true);
          reset();
          setMessage(
            'Your message has been sent successfully. Thank you for contacting me!'
          );
        } else {
          setIsSuccess(false);
          setMessage(
            'There was an error while sending your message. Please try again.'
          );
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage(
          'There was an error while sending your message. Please try again.'
        );
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        type='hidden'
        value='42127bc9-2bb3-4549-ac53-babaab139c16'
        {...register('access_key')}
      />
      <input
        type='hidden'
        value='Kontakt forma sa marijavolkman.com'
        {...register('subject')}
      />
      <input
        type='hidden'
        value='Kontakt forma marijavolkman.com'
        {...register('from_name')}
      />
      <div className={styles.fieldWrapper}>
        <label htmlFor='name'>What's your name?</label>
        <input
          id='name'
          type='text'
          placeholder='Name Surname'
          {...register('name', {
            required: { value: true, message: 'Required field' },
            maxLength: { value: 50, message: 'Maximum length is 50' },
          })}
          autoComplete='name'
        />
        {errors.name && <p className={styles.error}>{errors.name.message}</p>}
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='last_name'>Your whatever?</label>
        <input
          id='last_name'
          type='text'
          placeholder='Last name'
          {...register('last_name', {
            required: { value: true, message: 'Required field' },
            maxLength: { value: 50, message: 'Maximum length is 50' },
          })}
          autoComplete='family-name'
        />
        {errors.last_name && (
          <p className={styles.error}>{errors.last_name.message}</p>
        )}
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='email'>What's your email?</label>
        <input
          id='email'
          type='email'
          placeholder='namesurname@email.com'
          {...register('email', {
            required: { value: true, message: 'Required field' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email address',
            },
          })}
          autoComplete='email'
        />
        {errors.email && <p className={styles.error}>{errors.email.message}</p>}
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='message'>Your message</label>
        <textarea
          id='message'
          placeholder={'Your message'}
          rows={7}
          {...register('message', {
            required: { value: true, message: 'Message is required' },
            minLength: { value: 10, message: 'Minimum length is 10' },
            maxLength: { value: 1000, message: 'Maximum length is 1000' },
          })}
        />
        {errors.message && (
          <p className={styles.error}>{errors.message.message}</p>
        )}
        {message && (
          <p
            className={isSuccess ? styles.successMessage : styles.errorMessage}
          >
            {message}
          </p>
        )}
      </div>

      <Button
        type='submit'
        classes={['roundedButton', 'centered', isSuccess ? 'disabled' : '']}
      >
        {isSuccess ? <CheckIcon /> : <p>Send</p>}
      </Button>
    </form>
  );
};

export default ContactForm;
