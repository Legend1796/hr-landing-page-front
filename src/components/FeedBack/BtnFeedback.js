import React from 'react';
import leftArrow from '../../images/feedback-previous.svg';
import rightArrow from '../../images/feedback-next.svg';

function BtnFeedback({ direction, moveSlide }) {
  console.log(direction, moveSlide);
  return (
    <button onClick={moveSlide} className={direction === 'next' ? 'btn-slide next' : 'btn-slide prev'}>
      <img className='feedback__btn-slide' src={direction === 'next' ? rightArrow : leftArrow} alt='кнопка' />
    </button>
  );
}

export default BtnFeedback;