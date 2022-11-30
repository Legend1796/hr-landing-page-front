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
            <img className='expert__card-title' src={firsdtStep} alt='1 шаг' />
            <p className='expert__card-paragraph'>Выберите роль и заполните заявку</p>
            <p className='expert__card-paragraph'>1 шаг</p>
          </li>
          <li className='expert__card'>
            <img className='expert__card-title' src={secondtStep} alt='2 шаг' />
            <p className='expert__card-paragraph'>2 шаг</p>
            <p className='expert__card-paragraph'>Пройдите отбор и бесплатное обучение</p>
          </li>
          <li className='expert__card'>
            <img className='expert__card-title' src={thirdStep} alt='3 шаг' />
            <p className='expert__card-paragraph'>3 шаг</p>
            <p className='expert__card-paragraph'>Делитесь знаниями со студентами Яндекс Практикума</p>
          </li>
        </ul>
      </div>
    </section>
  )
}

export default Expert;