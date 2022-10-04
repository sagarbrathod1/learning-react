import {useRef} from 'react';
import emailjs from '@emailjs/browser';

const Contact = () => {
    const form = useRef();
    
  const sendEmail = (e) => {
    e.preventDefault();

    emailjs.sendForm('service_7pbg6u8', 'template_b7ym7af', form.current, 'Q6OYKuY5uwbZJ2unF')
      .then((result) => {
          console.log(result.text);
      }, (error) => {
          console.log(error.text);
      });
      e.target.reset();
  };

  return (
    <section>
        <div className="container">
            <h2 className="--text-center">
                Contact Us
            </h2>
            <form ref={form} onSubmit={sendEmail} className="--form-control --card --flex-center --dir-column">
                <input type="text"
                placeHolder="Full Name"
                name='user_name' required />
                <input type="email"
                placeHolder="Email"
                name='user_email' required />
                <input type="text"
                placeHolder="Subject"
                name='subject' required />
                <textarea name="message"
                cols="30" rows="10"></textarea>
                <button type="submit" className="--btn--btn-primary">
                    Send Message
                </button>
            </form>
        </div>
    </section>
  )
}

export default Contact