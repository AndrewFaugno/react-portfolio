import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [contactInfo, setContactInfo] = useState({ name: '', email: '', message: '' });
    const [errorMessage, setErrorMessage] = useState('');
    const [formComplete, setFormComplete] = useState(false)

    function handleChange(e) {
        if (e.target.name === 'email') {
            const valid = validateEmail(e.target.value);

            if (!valid) {
                setErrorMessage('Please enter a valid email.');
            } else {
                setErrorMessage('');
            }
        } else {
            if (!e.target.value.length) {
                setErrorMessage(`${e.target.name} is required.`);
            } else {
                setErrorMessage('');
            }
        }

        if (!errorMessage) {
            setContactInfo({ ...contactInfo, [e.target.name]: e.target.value });
        }

        if (contactInfo.name && contactInfo.email && contactInfo.message) {
            setFormComplete(true);
        } else {
            setFormComplete(false)
        }
    }

    function handleSubmit(e) {
        // e.preventDefault();
        if (!formComplete) {
            e.preventDefault();
        }
    }

    return (
        <div className="w-50 m-auto text-center pt-3 form-container">
            <div className="w-full">
                <h3 className="dynapuff">Contact Me</h3>
            </div>
            <form action="https://formsubmit.co/andrewfaugno825@gmail.com" method="POST" id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group text-left quicksand">
                    <label htmlFor="name">Name:</label>
                    <input type="text" name="name" className="form-control" id="nameTxt" onChange={handleChange} />
                </div>
                <div className="form-group text-left quicksand">
                    <label htmlFor="email">Email:</label>
                    <input type="email" name="email" className="form-control" id="emailTxt" onChange={handleChange} />
                </div>
                <div className="form-group text-left quicksand">
                    <label htmlFor="message">Message:</label>
                    <textarea rows="5" name="message" type="message" className="form-control" id="messageTxt" onChange={handleChange} />
                </div>
                <button type="submit" className="btn btn-danger btn-lg btn-block quicksand">
                    Send
                </button>
            </form>
            <h4 className="pt-2 quicksand">{errorMessage}</h4>
        </div>
    );
}

export default Contact;