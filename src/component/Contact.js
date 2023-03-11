import React, { useState } from 'react';
import { validateEmail } from '../utils/helper';
import './Contact.css';

function Contact() {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const [errorMessage, setErrorMessage] = useState('');
    const { name, email, message } = formState;

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!errorMessage) {
            setFormState({ [e.target.name]: e.target.value});
            console.log('Form', formState);
        }
    };

    const handleChange = (e) => {
        if (e.target.name === 'email') {
            const isValid = validateEmail(e.target.value);
            if (!isValid) {
                setErrorMessage('Please enter a valid email');
        } else {
            setErrorMessage('');
        }
    } else {
        if (!e.target.value.length) {
            setErrorMessage(
                `${e.target.name} is required`
            );
        } else {
            setErrorMessage('');
        }
    }
};

return (
    <section className='contact-section'>
        <form id='contact-form' onSubmit={handleSubmit}>
            <h1 data-testid='h1tag'>contact me</h1>
            <div className='contact-form-item'>
                <label htmlFor='name'>name</label>
                <br />
                <input 
                    type='text'
                    name='name'
                    defaultValue={name}
                    onBlur={handleChange}
                    className='contact-form-input'
                />
            </div>
            <div className='contact-form-item'>
                <label htmlFor='email'>email</label>
                <br />
                <input 
                    type='email'
                    name='email'
                    defaultValue={email}
                    onBlur={handleChange}
                    className='contact-form-input'
                />
            </div>
            <div className='contact-form-item'>
                <label htmlFor='message'>message</label>
                <br />
                <textarea
                    name='message'
                    defaultValue={message}
                    onBlur={handleChange}
                    className='contact-form-input'
                />
            </div>
            {errorMessage && (
                <div>
                    <p className='error-text'>{errorMessage}</p>
                </div>
            )}
            <button
                date-testid='button'
                type='submit'
                className='contact-form-item'
                id='btn'>submit</button>
        </form>
    </section>
    );
}

export default Contact;