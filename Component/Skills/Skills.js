import React from "react";

const Skills = () => {
  return (
    <div>
      <section id='skills' className='skills section section-bg'>
        <div className='section__header container'>
          <span className='section__subtitle'>Skills</span>
          <h2 className='section__title'>Some of My Working Tools</h2>
        </div>
        <div className='d-grid skills__wrapper container'>
          <div className='skills__content'>
            <h3 className='skills__title'>UI/UX Design</h3>
            <div className='skills__content-wrapper'>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/figma-logo.svg' alt='Figma Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Figma</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/adobexd-logo.svg' alt='Adobe XD Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Adobe XD</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img
                    src='/img/adobe-illustrator-logo.svg'
                    alt='Illustrator Logo'
                    className='skills__img'
                  />
                </div>
                <h3 className='skills__name'>Illustrator</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/photoshop-logo.svg' alt='Photoshop Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Photoshop</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/sketch-logo.svg' alt='Sketch Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Sketch</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/invision-logo.jpg' alt='InVision Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>InVision</h3>
              </div>
            </div>
          </div>
          <div className='skills__content'>
            <h3 className='skills__title'>Web Development</h3>
            <div className='skills__content-wrapper'>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/html-logo.svg' alt='HTML Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>HTML</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/css-logo.svg' alt='CSS Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>CSS</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img
                    src='/img/javascript-logo.svg'
                    alt='JavaScript Logo'
                    className='skills__img'
                  />
                </div>
                <h3 className='skills__name'>JavaScript</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/nodejs-logo.svg' alt='Node.Js Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Node.Js</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/react-logo.svg' alt=' React  Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>React</h3>
              </div>
              <div className='skills__card'>
                <div className='skills__img-wrapper'>
                  <img src='/img/vue-logo.svg' alt='Vue.js Logo' className='skills__img' />
                </div>
                <h3 className='skills__name'>Vue.js</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Skills;
