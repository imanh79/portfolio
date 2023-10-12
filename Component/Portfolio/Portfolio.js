import React from "react";

const Portfolio = () => {
  return (
    <div>
      <section id='portfolio' className='portfolio section'>
        <div className='section__header container'>
          <span className='section__subtitle'>Portfolio</span>
          <h2 className='section__title'>Featured Projects</h2>
        </div>
        <div className='d-grid portfolio__wrapper container'>
          <div className='portfolio__project'>
            <div className='portfolio__overlay'></div>
            <img src='/img/project1.jpg' alt='Website Design' className='portfolio__img' />
            <div className='portfolio__info'>
              <div className='portfolio__info-wrapper'>
                <h3 className='portfolio__title'>Website Design</h3>
                <p className='portfolio__description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis
                  repellendus...
                </p>
              </div>
            </div>
          </div>

          <div className='portfolio__project'>
            <div className='portfolio__overlay'></div>
            <img
              src='/img/project2.jpg'
              alt='Mobile App UI/UX Design '
              className='portfolio__img'
            />
            <div className='portfolio__info'>
              <div className='portfolio__info-wrapper'>
                <h3 className='portfolio__title'>Mobile App UI/UX Design</h3>
                <p className='portfolio__description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis
                  repellendus...
                </p>
              </div>
            </div>
          </div>

          <div className='portfolio__project'>
            <div className='portfolio__overlay'></div>
            <img src='/img/project3.jpg' alt='App Re-design' className='portfolio__img' />
            <div className='portfolio__info'>
              <div className='portfolio__info-wrapper'>
                <h3 className='portfolio__title'>App Re-design</h3>
                <p className='portfolio__description'>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae facilis
                  repellendus...
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Portfolio;
