import firsdtStep from '../../images/1step.svg';
import secondtStep from '../../images/2step.svg';
import thirdStep from '../../images/3step.svg';

function Expert() {

  return (
    <section className='expert' id='expert'>
      <div className='expert__container'>
        <h2 className='expert__title'>Как стать экспертом</h2>
        <ul className='expert__cards'>
          <li className='expert__card'>
            <div className='expert__card-image'>
              <img className='expert__image expert__image_position' src={firsdtStep} alt='1 шаг' />
            </div>
            <div className='expert__text-block expert__text-block_position'>
              <div className='expert__subtitle-container expert__subtitle-container_position'>
                <h4 className='expert__card-subtitle'>1 шаг</h4>
              </div>
              <p className='expert__card-paragraph'>Выберите роль и заполните заявку</p>
            </div>
          </li>
          <li className='expert__card'>
            <div className='expert__card-image'>
              <img className='expert__image' src={secondtStep} alt='2 шаг' />
            </div>
            <div className='expert__text-block'>
              <div className='expert__subtitle-container'>
                <h4 className='expert__card-subtitle'>2 шаг</h4>
              </div>
              <p className='expert__card-paragraph'>Пройдите отбор <br />и бесплатное обучение</p>
            </div>
          </li>
          <li className='expert__card'>
            <div className='expert__card-image'>
              <img className='expert__image' src={thirdStep} alt='3 шаг' />
            </div>
            <div className='expert__text-block'>
              <div className='expert__subtitle-container'>
                <h4 className='expert__card-subtitle'>3 шаг</h4>
              </div>
              <p className='expert__card-paragraph'>Делитесь знаниями со студентами</p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Expert;