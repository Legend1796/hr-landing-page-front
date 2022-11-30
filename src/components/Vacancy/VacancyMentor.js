import React from 'react';
import { Link, Route } from 'react-router-dom';
import { vacancies } from '../utils/vacancies';
import Vacancy from './Vacancy';


function VacancyMentor({ countCards, vacancyRef, clickOnVacancie, addMoreCards }) {

  const [cards, setCards] = React.useState(vacancies);
  const [specs, setSpecs] = React.useState('programming');
  const [resultCards, setResultCards] = React.useState([]);
  const [isNeedMoreButton, setNeedMoreButton] = React.useState(false);

  React.useEffect(() => {
    filterCards(specs, cards);
  }, [specs, countCards])

  function setProgramming() {
    setSpecs('programming');
  }

  function setAnalitics() {
    setSpecs('analitics');
  }

  function setDesigh() {
    setSpecs('design');
  }

  function setMarketing() {
    setSpecs('marketing');
  }

  function setMenegement() {
    setSpecs('menegement');
  }

  function filterCards(specs, cards) {
    var vacanciesOnFilter = (cards.filter((i) => i.role === 'mentor').filter((i) => i.specs === specs));
    if (vacanciesOnFilter.length > countCards) {
      setNeedMoreButton(true);
    } else { setNeedMoreButton(false) }
    setResultCards(vacanciesOnFilter.slice(0, countCards));
  }

  return (
    <>
      <section className='vacancy' ref={vacancyRef} id='vacancy'>
        <div className='vacancy__filter'>

          <h1 className='vacancy__title'>Кого мы ищем</h1>
          <div className='vacancy__links'>
            <Link className='vacancy__link vacancy__link-active' to='/mentor/programming'><p className='vacancy__link-text'>Наставников</p></Link>
            <Link className='vacancy__link' to='/review/programming'><p className='vacancy__link-text'>Ревьюеров</p></Link>
          </div>
          <div className='vacancy__table'>
            <Route path='/mentor/programming'>
              <Link className='vacancy__choise vacancy__choise-active' to='/mentor/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/mentor/analitics'>
              <Link className='vacancy__choise' to='/mentor/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise  vacancy__choise-active' to='/mentor/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/mentor/design'>
              <Link className='vacancy__choise' to='/mentor/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/mentor/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/mentor/marketing'>
              <Link className='vacancy__choise' to='/mentor/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/mentor/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
            <Route path='/mentor/menegement'>
              <Link className='vacancy__choise' to='/mentor/programming'>
                <button type='button' onClick={setProgramming} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Программирование</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/analitics'>
                <button type='button' onClick={setAnalitics} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Аналитика</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/design'>
                <button type='button' onClick={setDesigh} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Дизайн</p>
                </button>
              </Link>
              <Link className='vacancy__choise' to='/mentor/marketing'>
                <button type='button' onClick={setMarketing} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Маркетинг</p>
                </button>
              </Link>
              <Link className='vacancy__choise vacancy__choise-active' to='/mentor/menegement'>
                <button type='button' onClick={setMenegement} className='vacancy__button'>
                  <p className='vacancy__choise-text'>Менеджмент</p>
                </button>
              </Link>
            </Route>
          </div>
        </div>
      </section>
      <section className='vacancy__list'>
        <div className='vacancy__container'>

          {resultCards.length === 0
            ?
            <p className='vacancy__not-found'>Таких вакансий пока нет 😊
              Чтобы посмотреть другие, поменяйте роль или направление.</p>
            :
            <>
              <ul className='vacancy__items'>
                {resultCards.map((vacancy) => (
                  <Vacancy title={vacancy.title} textPay={vacancy.textPay} textCash={vacancy.textCash} url={vacancy.url} key={vacancy.id} clickOnVacancie={clickOnVacancie} />
                ))}
              </ul>
              <div>

              </div>
            </>
          }
          <div className='vacancy__more'>
            <button className={`vacancy__more-button ${isNeedMoreButton ? 'vacancy__more-button_active' : ''}`} type='button' onClick={addMoreCards}>Смотреть еще</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default VacancyMentor;