import React, { useState } from 'react';
import BtnFeedback from './BtnFeedback';
import dataSlider from '../utils/dataSlider';
import playFeedback from '../../images/play-feedback.svg';

function FeedBack() {

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
      <div className='feedback__container'>
        <h3 className='feedback__title'>Отзывы</h3>
        <div className='feedback__container-slider'>
          {dataSlider.map((obj, index) => {
            return (
              <div key={obj.id} className={slideIndex === index + 1 ? 'slide active-anim' : 'slide'}>
                <img className='feedback__image' src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} alt='Видео' />
              </div>
            )
          })}
          <div className='feedback__container-buttons'>
            <h3 className='feedback__subtitle'>«Всё моё наставничество — это челлендж»</h3>
            <div className='feedback__buttons'>
              <BtnFeedback moveSlide={prevSlide} direction={'prev'} />
              <BtnFeedback moveSlide={nextSlide} direction={'next'} />
            </div>
          </div>
          <img className='feedback__play-video' src={playFeedback} alt='play' />
        </div>
      </div>
    </section >
  )
}

export default FeedBack; 