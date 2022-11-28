import React from 'react';
import { Link, Route } from 'react-router-dom';

function VacancyReview() {

  function handleChoise() {
    console.log('sfwe');
  }

  return (
    <section className='vacancy'>
      <h1 className='vacancy__title'>Кого мы ищем</h1>
      <div className='vacancy__links'>
        <Link className='vacancy__link' to='/mentor/programming'><p className='vacancy__link-text'>Наставников</p></Link>
        <Link className='vacancy__link vacancy__link-active' to='/review/programming'><p className='vacancy__link-text'>Ревьюеров</p></Link>
      </div>
      <div className='vacancy__table'>
        <Route path='/review/programming'>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/programming'><button type='button' onClick={handleChoise} className='vacancy__button'><p className='vacancy__choise-text'>Программирование</p></button></Link>
          <Link className='vacancy__choise' to='/review/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
          <Link className='vacancy__choise' to='/review/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
          <Link className='vacancy__choise' to='/review/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
          <Link className='vacancy__choise' to='/review/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
        </Route>
        <Route path='/review/analitics'>
          <Link className='vacancy__choise' to='/review/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
          <Link className='vacancy__choise  vacancy__choise-active' to='/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
          <Link className='vacancy__choise' to='/review/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
          <Link className='vacancy__choise' to='/review/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
          <Link className='vacancy__choise' to='/review/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
        </Route>
        <Route path='/review/design'>
          <Link className='vacancy__choise' to='/review/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
          <Link className='vacancy__choise' to='/review/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
          <Link className='vacancy__choise' to='/review/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
          <Link className='vacancy__choise' to='/review/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
        </Route>
        <Route path='/review/marketing'>
          <Link className='vacancy__choise' to='/review/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
          <Link className='vacancy__choise' to='/review/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
          <Link className='vacancy__choise' to='/review/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
          <Link className='vacancy__choise' to='/review/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
        </Route>
        <Route path='/review/menegement'>
          <Link className='vacancy__choise' to='/review/programming'><p className='vacancy__choise-text'>Программирование</p></Link>
          <Link className='vacancy__choise' to='/review/analitics'><p className='vacancy__choise-text'>Аналитика</p></Link>
          <Link className='vacancy__choise' to='/review/design'><p className='vacancy__choise-text'>Дизайн</p></Link>
          <Link className='vacancy__choise' to='/review/marketing'><p className='vacancy__choise-text'>Маркетинг</p></Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/menegement'><p className='vacancy__choise-text'>Менеджмент</p></Link>
        </Route>
      </div>


    </section>
  )
}

export default VacancyReview;