import React from "react";

const Contact = () => {
  return (
    <div>
      <section id='contact' className='contact section section-bg'>
        <div className='section__header container'>
          <span className='section__subtitle'>Let's Talk</span>
          <h2 className='section__title'>Have a Project Idea? Feel Free to Contact</h2>
        </div>
        <div className='d-grid contact__wrapper container'>
          <form action='' className='contact__form'>
            <div className='form__group'>
              <label for='' className='form__label'>
                Name
              </label>
              <input type='text' className='form__input' placeholder='Enter your name' required />
            </div>
            <div className='form__group'>
              <label for='' className='form__label'>
                Email
              </label>
              <input type='email' className='form__input' placeholder='Enter your email' required />
            </div>
            <div className='form__group'>
              <label for='' className='form__label'>
                Message
              </label>
              <textarea
                className='form__input form__textarea'
                placeholder='Tell me about your project'
              ></textarea>
            </div>
            <button type='submit' className='btn btn--primary'>
              <i className='ri-send-plane-line'></i>Send Message
            </button>
          </form>
          <div className='d-grid contact__content'>
            <div className='contact__info'>
              <div className='contact__icon'>
                <i className='ri-phone-line'></i>
              </div>
              <div className='contact__info-wrapper'>
                <h3 className='contact__title'>Call:</h3>
                <p className='contact__description'>(+987) 954 578 420</p>
              </div>
            </div>

            <div className='contact__info'>
              <div className='contact__icon'>
                <i className='ri-mail-line'></i>
              </div>
              <div className='contact__info-wrapper'>
                <h3 className='contact__title'>Email:</h3>
                <p className='contact__description'>info@natasha.com</p>
              </div>
            </div>

            <div className='contact__info'>
              <div className='contact__icon'>
                <i className='ri-map-pin-line'></i>
              </div>
              <div className='contact__info-wrapper'>
                <h3 className='contact__title'>Location:</h3>
                <p className='contact__description'>23 Avenue California, USA</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      /
    </div>
  );
};

export default Contact;
