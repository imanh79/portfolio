import React, { useEffect } from "react";
import Footer from "../Footer/footer";

const HomeM = () => {
  useEffect(() => {
    // در هنگام بارگذاری صفحه، کلاس invisible را حذف کرده و visible را اضافه می‌کنیم
    const homeContent = document.querySelector(".home__content");
    const homeImg = document.querySelector(".home__img");

    homeContent.classList.remove("invisible");

    homeImg.classList.remove("invisible");
    homeContent.classList.add("transformed", "visible");
    homeImg.classList.add("transformed", "visible");
  }, []); // [] به معنی اجرای این افکت فقط یک بار در زمان بارگذاری صفحه است

  return (
    <div>
      <section id='home' className='home'>
        <div className='d-grid home__wrapper container'>
          <div className='home__content invisible'>
            <h1 className='home__title'>
              I Am <span className='home__name'>Natasha</span>
              <br />
              UI/UX Designer & Developer
            </h1>
            <p className='home__description'>
              Laculis eget elementum felis pellentesque tellus tellus tincidunt tortor natoque. Cras
              amet ornare egestas.
            </p>
            <a href='#contact' className='btn btn--primary'>
              <i className='ri-mail-line'></i>
              Hire Me
            </a>
            <div className='social'>
              <span className='social__title'>Follow Me</span>
              <ul className='social__list'>
                <li className='social__item'>
                  <a href='javascript:void(0)' className='social__link'>
                    <i className='ri-facebook-fill'></i>
                  </a>
                </li>
                <li className='social__item'>
                  <a href='javascript:void(0)' className='social__link'>
                    <i className='ri-twitter-line'></i>
                  </a>
                </li>
                <li className='social__item'>
                  <a href='javascript:void(0)' className='social__link'>
                    <i className='ri-dribbble-line'></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          {/* <Blobprofile /> */}
          <img src='/img/Home2.webp' alt='Natasha Smith' className='home__img invisible' />
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default HomeM;
