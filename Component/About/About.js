import React from "react";

const About = () => {
  return (
    <div>
      <section id='about' className='about section'>
        <div className='d-grid about__wrapper container'>
          <div className='about__content'>
            <span className='section__subtitle'>About Me</span>
            <h2 className='section__title'>
              I Design and Develop Experiences that make people's live simple.
            </h2>
            <p className='about__description'>
              Viverra nisl nibh dolor nam venenatis turpis ultrices. Vulputate facilisis urna
              pulvinar fringilla consequat molestie vulputate lacus. Pretium leo et nec fusce.
              Cursus volutpat sed.
            </p>
            <a href='javascript:void(0)' className='btn btn--primary'>
              <i className='ri-article-line'></i>Download CV
            </a>
          </div>
          <img src='/img/about.jpg' alt='Natasha Smith' className='about__img' />
        </div>
      </section>
    </div>
  );
};

export default About;
