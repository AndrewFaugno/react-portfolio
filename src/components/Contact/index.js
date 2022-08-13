import { useState } from 'react';
import { validateEmail } from '../../utils/helpers';

function Contact() {
    const [contactInfo, setContactInfo ] = useState({Name: '', Email: '', Message: ''});
    const [ errorMessage, setErrorMessage ] = useState('');

    function handleChange(e) {
        if (e.target.name === 'Email') {
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
            setContactInfo({...contactInfo, [e.target.name]: e.target.value});
        }
    }

    function handleSubmit(e) {
        e.preventDefault();
    }

    return (
        <div className="w-75 m-auto text-center pt-3">
            <div className="w-full">
                <h3 className='dynapuff'>Contact Me</h3>
            </div>
            <form id="contact-form" onSubmit={handleSubmit}>
                <div className="form-group text-left quicksand">
                    <label htmlFor="Name">Name:</label>
                    <input type="text" name="Name" className="form-control" onBlur={handleChange}/>
                </div>
                <div className="form-group text-left quicksand">
                    <label htmlFor="Email">Email:</label>
                    <input type="email" name="Email" className="form-control" onBlur={handleChange}/>
                </div>
                <div className="form-group text-left quicksand">
                    <label htmlFor="Message">Message:</label>
                    <textarea rows="5" name="Message" type="message" className="form-control" onBlur={handleChange} />
                </div>
                <button type="submit" className="btn btn-danger btn-lg btn-block quicksand">Submit</button>
            </form>
            <h4 className='pt-2 quicksand'>
                {errorMessage}
            </h4>
        </div>
    )
}

export default Contact;