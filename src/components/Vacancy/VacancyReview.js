import React from 'react';
import { Link, Route } from 'react-router-dom';
import { vacancies } from '../utils/vacancies';

function VacancyReview() {

  const [cards, setCards] = React.useState(vacancies);
  const [specs, setSpecs] = React.useState('programming');
  const [resultCards, setResultCards] = React.useState([]);

  React.useEffect(() => {
    filterCards(specs, cards);
  }, [])

  function setProgramming() {
    setSpecs('programming');
    filterCards(specs, cards);
  }

  function setAnalitics() {
    setSpecs('analitics');
    filterCards(specs, cards);
  }

  function setDesigh() {
    setSpecs('design');
    filterCards(specs, cards);
  }

  function setMarketing() {
    setSpecs('marketing');
    filterCards(specs, cards);
  }

  function setMenegement() {
    setSpecs('menegement');
    filterCards(specs, cards);
  }

  function filterCards(specs, cards) {
    setResultCards(cards.filter((i) => i.role === 'review').filter((i) => i.specs === specs));
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
          <Link className='vacancy__choise vacancy__choise-active' to='/review/programming'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Программирование</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/analitics'>
            <button type='button' onClick={setAnalitics} className='vacancy__button'>
              <p className='vacancy__choise-text'>Аналитика</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/design'>
            <button type='button' onClick={setDesigh} className='vacancy__button'>
              <p className='vacancy__choise-text'>Дизайн</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/marketing'>
            <button type='button' onClick={setMarketing} className='vacancy__button'>
              <p className='vacancy__choise-text'>Маркетинг</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/menegement'>
            <button type='button' onClick={setMenegement} className='vacancy__button'>
              <p className='vacancy__choise-text'>Менеджмент</p>
            </button>
          </Link>
        </Route>
        <Route path='/review/analitics'>
          <Link className='vacancy__choise' to='/review/programming'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Программирование</p>
            </button>
          </Link>
          <Link className='vacancy__choise  vacancy__choise-active' to='/analitics'>
            <button type='button' onClick={setAnalitics} className='vacancy__button'>
              <p className='vacancy__choise-text'>Аналитика</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/design'>
            <button type='button' onClick={setDesigh} className='vacancy__button'>
              <p className='vacancy__choise-text'>Дизайн</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/marketing'>
            <button type='button' onClick={setMarketing} className='vacancy__button'>
              <p className='vacancy__choise-text'>Маркетинг</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/menegement'>
            <button type='button' onClick={setMenegement} className='vacancy__button'>
              <p className='vacancy__choise-text'>Менеджмент</p>
            </button>
          </Link>
        </Route>
        <Route path='/review/design'>
          <Link className='vacancy__choise' to='/review/programming'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Программирование</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/analitics'>
            <button type='button' onClick={setAnalitics} className='vacancy__button'>
              <p className='vacancy__choise-text'>Аналитика</p>
            </button>
          </Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/design'>
            <button type='button' onClick={setDesigh} className='vacancy__button'>
              <p className='vacancy__choise-text'>Дизайн</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/marketing'>
            <button type='button' onClick={setMarketing} className='vacancy__button'>
              <p className='vacancy__choise-text'>Маркетинг</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/menegement'>
            <button type='button' onClick={setMenegement} className='vacancy__button'>
              <p className='vacancy__choise-text'>Менеджмент</p>
            </button>
          </Link>
        </Route>
        <Route path='/review/marketing'>
          <Link className='vacancy__choise' to='/review/programming'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Программирование</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/analitics'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Аналитика</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/design'>
            <button type='button' onClick={setDesigh} className='vacancy__button'>
              <p className='vacancy__choise-text'>Дизайн</p>
            </button>
          </Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/marketing'>
            <button type='button' onClick={setMarketing} className='vacancy__button'>
              <p className='vacancy__choise-text'>Маркетинг</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/menegement'>
            <button type='button' onClick={setMenegement} className='vacancy__button'>
              <p className='vacancy__choise-text'>Менеджмент</p>
            </button>
          </Link>
        </Route>
        <Route path='/review/menegement'>
          <Link className='vacancy__choise' to='/review/programming'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Программирование</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/analitics'>
            <button type='button' onClick={setProgramming} className='vacancy__button'>
              <p className='vacancy__choise-text'>Аналитика</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/design'>
            <button type='button' onClick={setDesigh} className='vacancy__button'>
              <p className='vacancy__choise-text'>Дизайн</p>
            </button>
          </Link>
          <Link className='vacancy__choise' to='/review/marketing'>
            <button type='button' onClick={setMarketing} className='vacancy__button'>
              <p className='vacancy__choise-text'>Маркетинг</p>
            </button>
          </Link>
          <Link className='vacancy__choise vacancy__choise-active' to='/review/menegement'>
            <button type='button' onClick={setMenegement} className='vacancy__button'>
              <p className='vacancy__choise-text'>Менеджмент</p>
            </button>
          </Link>
        </Route>
      </div>


    </section>
  )
}

export default VacancyReview;