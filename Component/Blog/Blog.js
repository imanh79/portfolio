import React from "react";

const Blog = () => {
  return (
    <div>
      <section id='blog' className='blog section'>
        <div className='section__header container'>
          <span className='section__subtitle'>My Blog</span>
          <h2 className='section__title'>Latest Posts & News</h2>
        </div>
        <div className='d-grid blog__wrapper container'>
          <div className='blog__post'>
            <div className='blog__img-wrapper'>
              <img src='/img/blog1.jpg' alt='' className='blog__img' />
              {/* <span className='blog__category'>UI/UX Design</span> */}
            </div>
            <div className='blog__content'>
              <h3 className='blog__title'>10 UI/UX Design trends that made for 2023</h3>
              <p className='blog__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil quam velit
                ipsam possimus.
              </p>
              <a href='javascript:void(0)' className='blog__link'>
                Read More
                <i className='ri-arrow-right-s-line'></i>
              </a>
            </div>
          </div>

          <div className='blog__post'>
            <div className='blog__img-wrapper'>
              <img src='/img/blog2.jpg' alt='' className='blog__img' />
              {/* <span className='blog__category'>UI/UX Design</span> */}
            </div>
            <div className='blog__content'>
              <h3 className='blog__title'>
                The 5 most used prototyping tools for UI/UX Designers in 2023
              </h3>
              <p className='blog__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil quam velit
                ipsam possimus.
              </p>
              <a href='javascript:void(0)' className='blog__link'>
                Read More
                <i className='ri-arrow-right-s-line'></i>
              </a>
            </div>
          </div>

          <div className='blog__post'>
            <div className='blog__img-wrapper'>
              <img src='/img/blog3.jpg' alt='' className='blog__img' />
              {/* <span className='blog__category'>Web Development</span> */}
            </div>
            <div className='blog__content'>
              <h3 className='blog__title'>React vs Vue: Which is Better and Why?</h3>
              <p className='blog__description'>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum nihil quam velit
                ipsam possimus.
              </p>
              <a href='javascript:void(0)' className='blog__link'>
                Read More
                <i className='ri-arrow-right-s-line'></i>
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Blog;
