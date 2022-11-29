import videoOne from '../../images/feedback-video-image.png';
import next from '../../images/feedback-next.svg';
import previous from '../../images/feedback-previous.svg';

function FeedBack() {

  return (
    <feedback className='feedback'>
      <div className='feedback__video-container'>
        <h3 className='feedback__title'>Отзывы</h3>
        <video className='feedback__video' poster={videoOne}>
        </video>
        <div className='feedback__video-front'>
          <p className='feedback__text'>«Всё моё наставничество — это челлендж»</p>
          <button className='feedback__send-request' type='button'>
            <img className='feedback__link' src={previous} alt='Предыдущее видео' />
          </button>
          <button className='feedback__send-request' type='button'>
            <img className='feedback__link' src={next} alt='Следующее видео' />
          </button>
        </div>
      </div>
    </feedback >
  )
}

export default FeedBack;