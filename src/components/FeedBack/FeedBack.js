import React, { useState } from 'react';
import BtnFeedback from './BtnFeedback';
import dataSlider from './dataSlider';

function Feedback() {

  const [slideIndex, setSlideIndex] = useState(1)

  const nextSlide = () => {
    if (slideIndex !== dataSlider.length) {
      setSlideIndex(slideIndex + 1)
    }
    else if (slideIndex === dataSlider.length) {
      setSlideIndex(1)
    }
  }

  const prevSlide = () => {
    if (slideIndex !== 1) {
      setSlideIndex(slideIndex - 1)
    }
    else if (slideIndex === 1) {
      setSlideIndex(dataSlider.length)
    }
  }

  const moveDot = index => {
    setSlideIndex(index)
  }

  return (
    <section className='feedback'>
      <h3 className='feedback__title'>Отзывы</h3>
      <div className='feedback__container-slider'>
        {dataSlider.map((obj, index) => {
          return (
            <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
              <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='Видео' />
            </div>
          )
        })}
        <BtnFeedback moveSlide={nextSlide} direction={'next'} />
        <BtnFeedback moveSlide={prevSlide} direction={'prev'} />

        <div className='container-dots'>
          {Array.from({ length: 5 }).map((item, index) => (
            <div
              onClick={() => moveDot(index + 1)}
              className={slideIndex === index + 1 ? 'dot active' : 'dot'}
            ></div>
          ))}
        </div>
      </div>
    </section >
  )
}

export default Feedback; 