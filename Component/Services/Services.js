import React from "react";

const Services = () => {
  return (
    <div>
      <section id='service' className='service section section-bg'>
        <div className='d-grid service__wrapper container'>
          <div className='service__content'>
            <span className='section__subtitle'>My Services</span>
            <h2 className='section__title'>What I Provide To My Clients</h2>

            <p className='service__description'>
              Sit elementum fringilla ipsum accumsan sagittis ullamcorper dolor. Nunc tempor ut amet
              enim dui. Congue viverra tortor integer fames amet odio cursus.
            </p>

            <p className='service__description'>
              Rhoncus lacinia turpis sagittis sed ipsum hendrerit nunc non. Leo massa a est
              ullamcorper at vulputate. Sit elementum fringilla ipsum accumsan sagittis ullamcorper
              dolor. Nunc tempor ut amet enim dui. Congue viverra tortor integer fames amet odio
              cursus.
            </p>

            <a href='#' className='btn btn--primary'>
              <i className='ri-chat-3-line'></i>
              Let's Talk
            </a>
          </div>
          <div className='service__info'>
            <div className='service__card'>
              <div className='service__icon'>
                <i className='ri-code-line'></i>
              </div>
              <div className='service__info-wrapper'>
                <h3 className='service__info-title'>Frontend Development</h3>
                <p className='service__description'>
                  Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                </p>
              </div>
            </div>
            <div className='service__card'>
              <div className='service__icon'>
                <i className='ri-layout-masonry-fill'></i>
              </div>
              <div className='service__info-wrapper'>
                <h3 className='service__info-title'>UI/UX Design</h3>
                <p className='service__description'>
                  Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                </p>
              </div>
            </div>
            <div className='service__card'>
              <div className='service__icon'>
                <i className='ri-pen-nib-fill'></i>
              </div>
              <div className='service__info-wrapper'>
                <h3 className='service__info-title'>Graphic Design</h3>
                <p className='service__description'>
                  Nunc nunc facilisis eu non enim adipiscing. Erat nunc dignissim condimentum quis.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Services;
