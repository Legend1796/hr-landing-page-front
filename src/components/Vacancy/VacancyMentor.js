import React from 'react';
import { Link, Route } from 'react-router-dom';
import { vacancies } from '../utils/vacancies';
import Vacancy from './Vacancy';

function VacancyMentor() {

  const [cards, setCards] = React.useState(vacancies);
  const [role, setRole] = React.useState('mentor');
  const [specs, setSpecs] = React.useState('programming');
  const [resultCards, setResultCards] = React.useState([]);

  React.useEffect(() => {
    filterCards(role, specs, cards);
  }, [])


  function filterCards(role, specs, cards) {
    setResultCards(cards.filter((i) => i.role === role).filter((i) => i.specs === specs));
  }

  // console.log(cards);


  return (
    <>
      <section className='vacancy'>
        <h1 className='vacancy__title'>Кого мы ищем</h1>
        <div className='vacancy__links'>
          <Link className='vacancy__link vacancy__link-active' to='/mentor/programming'><p className='vacancy__link-text'>Наставников</p></Link>
          <Link className='vacancy__link' to='/review/programming'><p className='vacancy__link-text'>Ревьюеров</p></Link>
        </div>
        <div className='vacancy__table'>
          <Route path='/mentor/programming'>
            <Link className='vacancy__choise vacancy__choise-active' to='/mentor/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
            <Link className='vacancy__choise' to='/mentor/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
            <Link className='vacancy__choise' to='/mentor/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
            <Link className='vacancy__choise' to='/mentor/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
            <Link className='vacancy__choise' to='/mentor/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
          </Route>
          <Route path='/mentor/analitics'>
            <Link className='vacancy__choise' to='/mentor/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
            <Link className='vacancy__choise  vacancy__choise-active' to='/mentor/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
            <Link className='vacancy__choise' to='/mentor/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
            <Link className='vacancy__choise' to='/mentor/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
            <Link className='vacancy__choise' to='/mentor/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
          </Route>
          <Route path='/mentor/design'>
            <Link className='vacancy__choise' to='/mentor/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
            <Link className='vacancy__choise' to='/mentor/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
            <Link className='vacancy__choise vacancy__choise-active' to='/mentor/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
            <Link className='vacancy__choise' to='/mentor/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
            <Link className='vacancy__choise' to='/mentor/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
          </Route>
          <Route path='/mentor/marketing'>
            <Link className='vacancy__choise' to='/mentor/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
            <Link className='vacancy__choise' to='/mentor/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
            <Link className='vacancy__choise' to='/mentor/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
            <Link className='vacancy__choise vacancy__choise-active' to='/mentor/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
            <Link className='vacancy__choise' to='/mentor/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
          </Route>
          <Route path='/mentor/menegement'>
            <Link className='vacancy__choise' to='/mentor/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
            <Link className='vacancy__choise' to='/mentor/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
            <Link className='vacancy__choise' to='/mentor/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
            <Link className='vacancy__choise' to='/mentor/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
            <Link className='vacancy__choise vacancy__choise-active' to='/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
          </Route>
        </div>
      </section>
      <section className='vacancy__list'>
        {resultCards.length === 0
          ?
          <p className='vacancy__not-found'>Таких вакансий пока нет 😊
            Чтобы посмотреть другие, поменяйте роль или направление.</p>
          :
          <ul className='vacancy__item'>
            {resultCards.map((vacancy) => (
              <Vacancy title={vacancy.title} text={vacancy.text} url={vacancy.url} key={vacancy.id} />
            ))}
          </ul>
        }
      </section>
    </>
  )
}

export default VacancyMentor;