import firsdtStep from '../../images/1step.svg';
import secondtStep from '../../images/2step.svg';
import thirdStep from '../../images/3step.svg';
import expertImage from '../../images/expert.svg';

function Expert() {

  return (
    <section className='expert'>
      <h2 className='expert__title'>Как стать экспертом</h2>
      <ul className='expert__cards'>
        <li className='expert__card expert__card_first'>
          <img className='expert__card-title' src={firsdtStep} alt='1 шаг' />
          <p className='expert__card-paragraph'>Выберите роль и заполните заявку</p>
        </li>
        <li className='expert__card expert__card_second'>
          <img className='expert__card-title' src={secondtStep} alt='2 шаг' />
          <p className='expert__card-paragraph'>Пройдите отбор и бесплатное обучение</p>
        </li>
        <li className='expert__card expert__card_third'>
          <img className='expert__card-title' src={thirdStep} alt='3 шаг' />
          <p className='expert__card-paragraph'>Делитесь знаниями со студентами Яндекс Практикума</p>
        </li>
      </ul>
      <img className='expert__bottom-image' src={expertImage} alt='Картинка пути по шагам' />
    </section>
  )
}

export default Expert;