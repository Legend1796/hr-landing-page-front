// import promoImage from '../../images/Vector37.svg';

function Expert() {

  return (
    <section className='expert'>
      <h2 className='expert__title'>Как стать экспертом</h2>
      <ul className='expert__cards'>
        <li className='expert__card'>
          <h3 className='expert__card-title'>ШАГ 1</h3>
          <p className='expert__card-paragraph'>Выберите роль и заполните заявку</p>
        </li>
        <li className='expert__card'>
          <h3 className='expert__card-title'>ШАГ 2</h3>
          <p className='expert__card-paragraph'>Пройдите отбор и бесплатное обучение</p>
        </li>
        <li className='expert__card'>
          <h3 className='expert__card-title'>ШАГ 3</h3>
          <p className='expert__card-paragraph'>Делитесь знаниями со студентами Яндекс Практикума</p>
        </li>
      </ul>

    </section>
  )
}

export default Expert;