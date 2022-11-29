import videoOne from '../../images/feedback-video-image.png';
import videoTwo from '../../images/feedback-video-image1.png';
import videoThree from '../../images/feedback-video-image2.png';
import videoFour from '../../images/feedback-video-image3.png';
import videoFive from '../../images/feedback-video-image4.png';
import next from '../../images/feedback-next.svg';
import previous from '../../images/feedback-previous.svg';
import play from '../../images/play-feedback.svg';

function FeedBack() {

  return (
    <section className='feedback'>
      <h3 className='feedback__title'>Отзывы</h3>
      <div className='feedback__video-container'>
        <img className='feedback__video' src={videoOne} alt='Постер отзыва' />
        <img className='feedback__video-play' src={play} alt='play' />
      </div>
      <div className='feedback__video-front'>
        <p className='feedback__text'>«Всё моё наставничество — это челлендж»</p>
        <div className='feedback__buttons'>
          <button className='feedback__send-request' type='button'>
            <img className='feedback__link' src={previous} alt='Предыдущее видео' />
          </button>
          <button className='feedback__send-request' type='button'>
            <img className='feedback__link' src={next} alt='Следующее видео' />
          </button>
        </div>
      </div>
    </section >
  )
}

export default FeedBack;