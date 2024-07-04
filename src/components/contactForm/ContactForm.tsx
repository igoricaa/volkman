'use client';

import { useForm } from 'react-hook-form';
import styles from './ContactForm.module.scss';
import { useEffect, useState } from 'react';
import Button from '../common/Button/Button';

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
  const [isDesktop, setIsDesktop] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [Message, setMessage] = useState('');

  useEffect(() => {
    if (typeof window !== 'undefined')
      setIsDesktop(window.matchMedia('(min-width: 1024px)').matches);
  }, []);

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
        const json = await response.json();
        if (json.success) {
          setIsSuccess(true);
          setMessage(json.message);
          reset();
        } else {
          setIsSuccess(false);
          setMessage(json.message);
        }
      })
      .catch((error) => {
        setIsSuccess(false);
        setMessage('Client Error. Please check the console.log for more info');
      });
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className={styles.contactForm}>
      <input
        type='hidden'
        value='288b39cc-0062-49e5-b483-39073dfca1a9'
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
      {/* <label htmlFor='email'>Your email</label>
        <input
          {...register('email', {
            required: { value: true, message: 'Required field' },
            pattern: {
              value: /^\S+@\S+$/i,
              message: 'Please enter a valid email address',
            },
          })}
          className={errors.email ? styles.error : ''}
        /> */}
      <div className={styles.fieldWrapper}>
        <label htmlFor='name'>What's your name?</label>
        <input
          id='name'
          type='text'
          placeholder='Name Surname'
          {...register('name', { required: true, maxLength: 80 })}
          autoComplete='name'
        />
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='last_name'>Your whatever?</label>
        <input
          id='last_name'
          type='text'
          placeholder='Last name'
          {...register('last_name', { required: true, maxLength: 100 })}
          autoComplete='family-name'
        />
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='email'>What's your email?</label>
        <input
          id='email'
          type='email'
          placeholder='namesurname@email.com'
          {...register('email', { required: true, pattern: /^\S+@\S+$/i })}
          autoComplete='email'
        />
      </div>
      <div className={styles.fieldWrapper}>
        <label htmlFor='message'>Your message</label>
        <textarea
          id='message'
          placeholder={'Your message'}
          rows={7}
          {...register('message', { required: true, min: 10 })}
        />
      </div>

      <Button type='submit' classes={['roundedButton', 'centered']}>
        <p>Send</p>
      </Button>
    </form>
  );
};

export default ContactForm;
