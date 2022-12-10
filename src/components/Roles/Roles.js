import './Roles.css'

function Roles() {

  return (
    <section className='roles'>
      <div className='roles__margins'>
        <p className='roles__title'>В роли наставника и ревьюера вы будете:</p>
        <div className='roles__content'>
          <ul className='roles__container'>
            <li className='roles__item'>
              <p className="roles__text roles__text_color">Менять жизнь <span className="roles__text">людей к лучшему</span></p>
              <p className="roles__text roles__text_size">Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться</p>
            </li>
            <li className='roles__item'>
              <p className="roles__text roles__text_color">Развиваться <span className="roles__text">внутри роли</span></p>
              <p className="roles__text roles__text_size">Вы сможете стать старшим наставником или сеньор-ревьювером</p>
            </li>
            <li className='roles__item'>
              <p className="roles__text">Иметь доход в от <span className="roles__text roles__text_color">35 до 50</span> тысяч ₽</p>
              <p className="roles__text roles__text_size">Работайте удаленно, 2–3 часа в день, график выбираете сами</p>
            </li>
            <li className='roles__item'>
              <p className="roles__text">Развивать <span className="roles__text roles__text_color">личный бренд</span></p>
              <p className="roles__text roles__text_size">Пишите и выступайте у нас, чтобы больше людей узнали о вас как об эксперте</p>
            </li>
            <li className='roles__item'>
              <p className="roles__text">Общаться с людьми из <span className="roles__text roles__text_color">EdTech</span></p>
              <p className="roles__text roles__text_size">Станете частью сообщества экспертов и посмотрите <br></br>на мир онлайн-образования изнутри</p>
            </li>
            <li className='roles__item'>
              <p className="roles__text">Учиться <span className="roles__text roles__text_color">новому</span></p>
              <p className="roles__text roles__text_size">Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей</p>
            </li>
          </ul>
        </div>

      </div>
    </section>
  )
}

export default Roles;