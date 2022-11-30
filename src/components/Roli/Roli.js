import './Roli.css'
import simbol1 from '../../images/simbol1.svg'
import simbol2 from '../../images/simbol2.svg'
import simbol3 from '../../images/simbol3.svg'
import simbol4 from '../../images/simbol4.svg'
function Roli() {

  return (
    <section className='roli'>
        <p className='roli__title'>В роли наставника и ревьюера вы будете:</p>
        <img className='roli_image' src={simbol3} alt='Логотип 1'></img>
        <img className='roli_image' src={simbol1} alt='Логотип 2'></img>
        <img className='roli_image' src={simbol2} alt='Логотип 3'></img>
        <img className='roli_image' src={simbol4} alt='Логотип 4'></img>
        <div className='roli__content'>
            <div className='roli__container'>
                <p className="roli__text">Менять жизнь людей к лучшему</p>
                <p className="roli__text roli__text_size">Тысячи наших студентов нуждаются в ваших знаниях и опыте — не бойтесь ими делиться</p>
                <p className="roli__text">Общаться с людьми из EdTech</p>
                <p className="roli__text roli__text_size roli__text_margin">Станете частью сообщества экспертов и посмотрите на мир онлайн-образования изнутри</p>
                <p className="roli__text">Иметь доход в среднем от 35 до 50 тысяч рублей</p>
                <p className="roli__text roli__text_size"> Удаленно, 2–3 часа в день, график выбираете сами</p>
            </div>
            <div className='roly__container roli__container_right'>
                <p className="roli__text">Учиться новому</p>
                <p className="roli__text roli__text_size">Вы узнаете, как давать обратную связь, выступать на публике и мотивировать людей</p>
                <p className="roli__text">Развивать личный бренд</p>
                <p className="roli__text roli__text_size">Публикуйте статьи в нашем блоге и выступайте на мероприятиях, чтобы как можно больше людей узнали о вас как об эксперте</p>
                <p className="roli__text">Развиваться внутри роли</p>
                <p className="roli__text roli__text_size">Вы сможете стать старшим наставником или сеньор-ревьювером</p>
            </div>                 
        </div>
        
    </section>
  )
}

export default Roli;