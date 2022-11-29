import videoOne from '../../images/feedback-video-image.png';
import next from '../../images/feedback-next.svg';
import previous from '../../images/feedback-previous.svg';
import play from '../../images/play-feedback.svg';

function FeedBack() {

  return (
    <section className='feedback'>
      {/* <div className='feedback__video-container'> */}
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
        {/* </div> */}
      </div>
    </section >
  )
}

export default FeedBack;