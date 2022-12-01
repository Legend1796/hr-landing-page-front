import './Roli.css'
import simbol1 from '../../images/simbol1.svg'
import simbol2 from '../../images/simbol2.svg'
import simbol3 from '../../images/simbol3.svg'
import simbol4 from '../../images/simbol4.svg'
function Roli() {

  return (
    <section className='roli'>
        <p className='roli__title'>В роли наставника и ревьюера вы будете:</p>
        <div className='roli__content'>
            <ul className='roli__container'>
                <li className='roli__item'>
                    <p className="roli__text roli__text_color">Менять жизнь <span className="roli__text">людей к лучшему</span></p>
                    <p className="roli__text roli__text_size">Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться</p>
                </li>
                <li className='roli__item'>
                    <p className="roli__text roli__text_color">Развиваться <span className="roli__text">внутри роли</span></p>
                    <p className="roli__text roli__text_size">Вы сможете стать старшим наставником или сеньор-ревьювером</p>
                </li>
                <li className='roli__item'>
                    <p className="roli__text">Иметь доход в от <span className="roli__text roli__text_color">35 до 50</span> тысяч ₽</p>
                    <p className="roli__text roli__text_size">Работайте удаленно, 2–3 часа в день, график выбираете сами</p>
                </li>
                <li className='roli__item'>
                    <p className="roli__text">Развивать <span className="roli__text roli__text_color">личный бренд</span></p>
                    <p className="roli__text roli__text_size">Пишите и выступайте у нас, чтобы больше людей узнали о вас как об эксперте</p>
                </li>
                <li className='roli__item'>
                    <p className="roli__text">Общаться с людьми из <span className="roli__text roli__text_color">EdTech</span></p>
                    <p className="roli__text roli__text_size">Станете частью сообщества экспертов и посмотрите <br></br>на мир онлайн-образования изнутри</p>
                </li>
                <li className='roli__item'> 
                    <p className="roli__text">Учиться <span className="roli__text roli__text_color">новому</span></p>
                    <p className="roli__text roli__text_size">Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей</p>
                </li>
            </ul>                 
        </div>
        
    </section>
  )
}

export default Roli;